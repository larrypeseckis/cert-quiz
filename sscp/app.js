"use strict";

const STORAGE_KEY = "sscp-quiz-progress-v1";
const WEIGHTS_KEY = "sscp-quiz-weights-v1";
const LETTERS = ["A", "B", "C", "D", "E"];

const state = {
  bank: [],
  topics: [],
  domains: [],
  session: null,
};

function loadBank() {
  if (!Array.isArray(window.QUESTIONS)) throw new Error("questions.js did not load — window.QUESTIONS is missing.");
  state.bank = window.QUESTIONS;
  state.topics = Array.isArray(window.TOPICS) ? window.TOPICS : [];
  const set = new Set(state.bank.map(q => q.domain));
  state.domains = Array.from(set).sort();
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { sessions: [], perDomain: {} };
    return JSON.parse(raw);
  } catch {
    return { sessions: [], perDomain: {} };
  }
}

function saveProgress(p) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

function loadWeights() {
  try {
    const raw = localStorage.getItem(WEIGHTS_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

function saveWeights(w) { localStorage.setItem(WEIGHTS_KEY, JSON.stringify(w)); }
function clearWeights() { localStorage.removeItem(WEIGHTS_KEY); }

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function questionWeightForIndex(globalIdx, weights) {
  if (!weights) return 1.0;
  const topic = state.topics[globalIdx] || "";
  const subM = topic.match(/^(\d+)\.(\d+)/);
  if (subM) {
    const subId = `${subM[1]}.${subM[2]}`;
    if (weights.subObjScores && weights.subObjScores[subId] !== undefined) {
      return scoreToWeight(weights.subObjScores[subId]);
    }
  }
  const q = state.bank[globalIdx];
  const dm = q.domain.match(/^(\d+):/);
  if (dm && weights.domainScores && weights.domainScores[dm[1]] !== undefined) {
    return scoreToWeight(weights.domainScores[dm[1]]);
  }
  return 1.0;
}

function scoreToWeight(score) {
  // 100% → 0.5x, 50% → 1.5x, 0% → 2.5x
  return Math.max(0.5, 0.5 + (100 - score) / 50);
}

function pickQuestions(domain, count, order) {
  const weights = loadWeights();
  const pool = state.bank
    .map((q, idx) => ({ q, idx }))
    .filter(({ q }) => domain === "all" || q.domain === domain);

  if (count === 0 || count >= pool.length) {
    const chosen = order === "sequential" ? pool : shuffle(pool);
    return chosen.map(x => x.q);
  }

  if (order === "sequential") {
    return pool.slice(0, count).map(x => x.q);
  }

  if (!weights) {
    return shuffle(pool).slice(0, count).map(x => x.q);
  }

  // Weighted sample without replacement
  const items = pool.map(({ q, idx }) => ({ q, w: questionWeightForIndex(idx, weights) }));
  const selected = [];
  for (let pick = 0; pick < count && items.length; pick++) {
    const total = items.reduce((s, x) => s + x.w, 0);
    let r = Math.random() * total;
    let chosenIdx = items.length - 1;
    for (let j = 0; j < items.length; j++) {
      r -= items[j].w;
      if (r <= 0) { chosenIdx = j; break; }
    }
    selected.push(items[chosenIdx].q);
    items.splice(chosenIdx, 1);
  }
  return selected;
}

function mount(templateId) {
  const tpl = document.getElementById(templateId);
  const app = document.getElementById("app");
  app.replaceChildren(tpl.content.cloneNode(true));
}

function renderHome() {
  mount("tpl-home");
  const domainSel = document.getElementById("domain");
  for (const d of state.domains) {
    const opt = document.createElement("option");
    opt.value = d; opt.textContent = d;
    domainSel.appendChild(opt);
  }
  document.getElementById("start").addEventListener("click", () => {
    const domain = domainSel.value;
    const count = parseInt(document.getElementById("count").value, 10);
    const order = document.getElementById("order").value;
    const timeLimit = parseInt(document.getElementById("time-limit").value, 10) || 0;
    const qs = pickQuestions(domain, count, order);
    if (qs.length === 0) { alert("No questions match that selection."); return; }
    state.session = {
      questions: qs.map(q => {
        const order = shuffle([0, 1, 2, 3]);
        return {
          ...q,
          options: order.map(i => q.options[i]),
          answer: order.indexOf(q.answer),
        };
      }),
      index: 0, answers: [], startedAt: Date.now(),
      timeLimit, deadline: timeLimit > 0 ? Date.now() + timeLimit * 1000 : null,
      timerId: null, expired: false
    };
    renderQuiz();
    if (timeLimit > 0) startTimer();
  });
  document.getElementById("reset").addEventListener("click", () => {
    if (confirm("Erase all stored progress?")) { saveProgress({ sessions: [], perDomain: {} }); renderHome(); }
  });
  renderStats();
  renderWeightsPanel();
  wireScoreImport();
}

function renderStats() {
  const p = loadProgress();
  const el = document.getElementById("stats");
  if (!p.sessions.length) { el.innerHTML = '<div class="empty">No completed sessions yet.</div>'; return; }
  const totalCorrect = p.sessions.reduce((s, x) => s + x.correct, 0);
  const totalAsked = p.sessions.reduce((s, x) => s + x.total, 0);
  const last = p.sessions[p.sessions.length - 1];
  let html = "";
  html += `<div class="stat-row"><span>Sessions completed</span><span>${p.sessions.length}</span></div>`;
  html += `<div class="stat-row"><span>Lifetime accuracy</span><span>${totalCorrect}/${totalAsked} (${Math.round(100*totalCorrect/totalAsked)}%)</span></div>`;
  html += `<div class="stat-row"><span>Last session</span><span>${last.correct}/${last.total} (${Math.round(100*last.correct/last.total)}%)</span></div>`;
  for (const d of state.domains) {
    const dd = p.perDomain[d];
    if (!dd || !dd.total) continue;
    html += `<div class="stat-row"><span>${d}</span><span>${dd.correct}/${dd.total} (${Math.round(100*dd.correct/dd.total)}%)</span></div>`;
  }
  el.innerHTML = html;
}

function renderWeightsPanel() {
  const el = document.getElementById("weights-panel");
  if (!el) return;
  const w = loadWeights();
  if (!w) {
    el.innerHTML = '<div class="empty">No score report loaded. Random selection is uniform. Load a CompTIA-style score report (.js) to bias questions toward your weak areas.</div>';
    return;
  }
  const when = new Date(w.importedAt).toLocaleString();
  let html = `<div class="stat-row"><span>Source</span><span>${escapeHtml(w.source || "?")}</span></div>`;
  html += `<div class="stat-row"><span>Imported</span><span>${escapeHtml(when)}</span></div>`;
  if (w.overallScore !== undefined && w.overallScore !== null) {
    html += `<div class="stat-row"><span>Overall score</span><span>${escapeHtml(String(w.overallScore))}</span></div>`;
  }
  html += `<h3 style="margin-top:14px">Domain weighting</h3>`;
  const domainKeys = Object.keys(w.domainScores || {}).sort();
  for (const d of domainKeys) {
    const s = w.domainScores[d];
    const wt = scoreToWeight(s).toFixed(2);
    const label = state.domains.find(x => x.startsWith(d + ":")) || `Domain ${d}`;
    html += `<div class="stat-row"><span>${escapeHtml(label)}</span><span>${s}% → ${wt}x</span></div>`;
  }
  const subObjKeys = Object.keys(w.subObjScores || {});
  if (subObjKeys.length) {
    html += `<h3 style="margin-top:14px">Sub-objective weighting (${subObjKeys.length} items)</h3>`;
    html += `<details><summary>Show all</summary>`;
    for (const k of subObjKeys.sort(compareSubObj)) {
      const s = w.subObjScores[k];
      const wt = scoreToWeight(s).toFixed(2);
      const flag = (w.inferredSet && w.inferredSet[k]) ? ' <em style="color:var(--muted)">(weak flag)</em>' : '';
      html += `<div class="stat-row"><span>${escapeHtml(k)}${flag}</span><span>${s}% → ${wt}x</span></div>`;
    }
    html += `</details>`;
  }
  el.innerHTML = html;
}

function compareSubObj(a, b) {
  const [a1, a2] = a.split(".").map(Number);
  const [b1, b2] = b.split(".").map(Number);
  return a1 - b1 || a2 - b2;
}

function wireScoreImport() {
  const fileInput = document.getElementById("score-file");
  const clearBtn = document.getElementById("clear-weights");
  const downloadBtn = document.getElementById("download-weights");
  const applyTextBtn = document.getElementById("apply-text");
  const textArea = document.getElementById("score-text");

  function applyParsed(source, text) {
    // Prefer the CompTIA .js parser first; fall back to free-text.
    let items = parseScoreReport(text);
    let mode = "json";
    if (items.length === 0) { items = parseTextScoreReport(text); mode = "text"; }
    if (items.length === 0) { alert("No sub-objective lines found. Expecting lines that start with 'N.M', optionally followed by a score (0-100)."); return; }
    const overall = mode === "json" ? parseOverallScore(text) : null;
    const computed = computeWeights(items);
    saveWeights({
      source,
      importedAt: Date.now(),
      overallScore: overall,
      rawItems: items,
      subObjScores: computed.subObjScores,
      domainScores: computed.domainScores,
      inferredSet: computed.inferredSet || {},
      mode
    });
    renderHome();
  }

  if (applyTextBtn) {
    applyTextBtn.addEventListener("click", () => {
      const text = (textArea && textArea.value || "").trim();
      if (!text) { alert("Paste your score lines into the textarea first."); return; }
      try { applyParsed("(pasted text)", text); }
      catch (err) { alert("Could not parse pasted text: " + err.message); }
    });
  }

  if (fileInput) {
    fileInput.addEventListener("change", async (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      try {
        const text = await file.text();
        applyParsed(file.name, text);
      } catch (err) {
        alert("Could not parse that file: " + err.message);
      }
    });
  }
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (!loadWeights()) return;
      if (confirm("Clear imported study weights and return to uniform random selection?")) {
        clearWeights();
        renderHome();
      }
    });
  }
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      const w = loadWeights();
      if (!w) { alert("No weights loaded."); return; }
      const md = renderWeightsMarkdown(w);
      const blob = new Blob([md], { type: "text/markdown" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "weights.md";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }
}

function parseScoreReport(text) {
  const items = [];
  const blockRe = /\{\s*(?:"name"\s*:\s*"[^"]*"\s*,\s*)?"title"\s*:\s*"([^"]+)"\s*,\s*"score"\s*:\s*"?(\d+)"?\s*\}/g;
  let m;
  while ((m = blockRe.exec(text)) !== null) {
    const title = m[1];
    const score = parseInt(m[2], 10);
    if (/^\d+\.\d+/.test(title)) {
      items.push({ title, score });
    }
  }
  return items;
}

function parseTextScoreReport(text) {
  const items = [];
  for (const raw of text.split(/\r?\n/)) {
    let line = raw.trim();
    if (!line) continue;
    if (line.startsWith("#") || line.startsWith("//")) continue;     // headings, comments
    line = line.replace(/^[-*+>]\s+/, "");                            // strip md list/quote markers
    line = line.replace(/^\|/, "").replace(/\|$/, "").trim();         // strip table pipes
    const idMatch = line.match(/^(\d+)\.(\d+)\b/);
    if (!idMatch) continue;
    const id = `${idMatch[1]}.${idMatch[2]}`;
    // Look for trailing 0–100 score, optionally with % or after a separator
    let score, inferred = false;
    const scoreMatch = line.match(/(?:[\s:|=→\-]+)(\d{1,3})\s*%?\s*$/);
    if (scoreMatch) {
      const n = parseInt(scoreMatch[1], 10);
      if (n >= 0 && n <= 100) score = n;
    }
    if (score === undefined) { score = 30; inferred = true; }         // no score = "weak"
    items.push({ title: line, score, inferred, id });
  }
  return items;
}

function parseOverallScore(text) {
  // Top-level "score" within the exam object, before reportingGroups
  const head = text.split("reportingGroups")[0];
  const m = head.match(/"score"\s*:\s*"?(\d+)"?/);
  return m ? parseInt(m[1], 10) : null;
}

function computeWeights(items) {
  const subObjScores = {};
  const inferredSet = {};
  const domAccum = {};
  for (const it of items) {
    const m = it.title.match(/^(\d+)\.(\d+)/);
    if (!m) continue;
    const sub = `${m[1]}.${m[2]}`;
    // For duplicate sub-objective entries, keep the lower (more conservative) score
    if (subObjScores[sub] === undefined || it.score < subObjScores[sub]) {
      subObjScores[sub] = it.score;
    }
    if (it.inferred) inferredSet[sub] = true;
    if (!domAccum[m[1]]) domAccum[m[1]] = { sum: 0, count: 0 };
    domAccum[m[1]].sum += it.score;
    domAccum[m[1]].count += 1;
  }
  const domainScores = {};
  for (const [d, v] of Object.entries(domAccum)) {
    domainScores[d] = Math.round(v.sum / v.count);
  }
  return { subObjScores, domainScores, inferredSet };
}

function renderWeightsMarkdown(w) {
  const lines = [];
  lines.push("# Study Weights");
  lines.push("");
  lines.push(`- **Source:** ${w.source || "?"}`);
  lines.push(`- **Imported:** ${new Date(w.importedAt).toISOString()}`);
  if (w.overallScore !== undefined && w.overallScore !== null) {
    lines.push(`- **Reported overall score:** ${w.overallScore}`);
  }
  lines.push("");
  lines.push("Question sampling is biased: each question's selection probability is multiplied by its weight.");
  lines.push("");
  lines.push("> Weight formula: `weight = max(0.5, 0.5 + (100 - score) / 50)` — perfect (100) → 0.5x, half (50) → 1.5x, zero → 2.5x.");
  lines.push("");
  lines.push("## Domain-level weighting");
  lines.push("");
  lines.push("| Domain | Avg score | Weight |");
  lines.push("|---|---:|---:|");
  for (const d of Object.keys(w.domainScores).sort()) {
    const s = w.domainScores[d];
    const wt = scoreToWeight(s).toFixed(2);
    const label = state.domains.find(x => x.startsWith(d + ":")) || `Domain ${d}`;
    lines.push(`| ${label} | ${s}% | ${wt}x |`);
  }
  const subKeys = Object.keys(w.subObjScores || {});
  if (subKeys.length) {
    lines.push("");
    lines.push("## Sub-objective weighting");
    lines.push("");
    lines.push("Applies only to questions whose topic tag begins with the same sub-objective ID.");
    lines.push("");
    lines.push("| Sub-objective | Score | Weight |");
    lines.push("|---|---:|---:|");
    for (const k of subKeys.sort(compareSubObj)) {
      const s = w.subObjScores[k];
      const wt = scoreToWeight(s).toFixed(2);
      const flag = (w.inferredSet && w.inferredSet[k]) ? ' _(weak flag)_' : '';
      lines.push(`| ${k}${flag} | ${s}% | ${wt}x |`);
    }
  }
  lines.push("");
  lines.push("## Weak-area summary");
  lines.push("");
  const weak = Object.entries(w.subObjScores || {})
    .filter(([, s]) => s < 70)
    .sort((a, b) => a[1] - b[1]);
  if (weak.length) {
    for (const [k, s] of weak) {
      lines.push(`- **${k}** — ${s}%`);
    }
  } else {
    lines.push("_No sub-objectives below 70%._");
  }
  return lines.join("\n") + "\n";
}

function renderQuiz() {
  mount("tpl-quiz");
  const s = state.session;
  const q = s.questions[s.index];
  document.getElementById("progress").textContent = `Question ${s.index + 1} of ${s.questions.length}`;
  document.getElementById("domain-tag").textContent = q.domain;
  document.getElementById("qtext").textContent = q.question;
  const ol = document.getElementById("options");
  ol.innerHTML = "";
  q.options.forEach((text, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="letter">${LETTERS[i]}.</span> ${escapeHtml(text)}`;
    li.addEventListener("click", () => selectAnswer(i, li));
    ol.appendChild(li);
  });
  document.getElementById("next").addEventListener("click", advance);
  document.getElementById("quit").addEventListener("click", () => {
    if (s.answers.length === 0 || confirm("End session and see results so far?")) finalize();
  });
  updateTimerDisplay();
}

function startTimer() {
  const s = state.session;
  if (!s || !s.timeLimit) return;
  stopTimer();
  s.timerId = setInterval(() => {
    const remaining = s.deadline - Date.now();
    if (remaining <= 0) {
      s.expired = true;
      stopTimer();
      finalize();
      return;
    }
    updateTimerDisplay();
  }, 500);
}

function stopTimer() {
  const s = state.session;
  if (s && s.timerId) { clearInterval(s.timerId); s.timerId = null; }
}

function updateTimerDisplay() {
  const el = document.getElementById("timer");
  if (!el) return;
  const s = state.session;
  if (!s || !s.timeLimit) { el.classList.add("hidden"); return; }
  el.classList.remove("hidden");
  const remaining = Math.max(0, s.deadline - Date.now());
  el.textContent = formatDuration(remaining);
  el.classList.toggle("timer-warn", remaining < 5 * 60 * 1000 && remaining >= 60 * 1000);
  el.classList.toggle("timer-crit", remaining < 60 * 1000);
}

function formatDuration(ms) {
  const totalSec = Math.ceil(ms / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const sec = totalSec % 60;
  const pad = n => String(n).padStart(2, "0");
  return h > 0 ? `${h}:${pad(m)}:${pad(sec)}` : `${m}:${pad(sec)}`;
}

function selectAnswer(idx, liEl) {
  const s = state.session;
  const q = s.questions[s.index];
  if (s.answers[s.index] !== undefined) return;
  s.answers[s.index] = idx;
  const items = document.querySelectorAll("#options li");
  items.forEach((li, i) => {
    li.classList.add("locked");
    if (i === q.answer) li.classList.add("correct");
    if (i === idx && idx !== q.answer) li.classList.add("incorrect");
    if (i === idx) li.classList.add("chosen");
  });
  const fb = document.getElementById("feedback");
  const correct = idx === q.answer;
  fb.classList.remove("hidden");
  fb.classList.toggle("correct", correct);
  fb.classList.toggle("incorrect", !correct);
  fb.innerHTML = `<div class="label">${correct ? "Correct" : "Incorrect — answer: " + LETTERS[q.answer]}</div>${escapeHtml(q.explanation)}`;
  document.getElementById("next").disabled = false;
}

function advance() {
  const s = state.session;
  if (s.index + 1 >= s.questions.length) { finalize(); return; }
  s.index += 1;
  renderQuiz();
}

function finalize() {
  const s = state.session;
  stopTimer();
  const answered = s.answers.filter(a => a !== undefined).length;
  const correct = s.answers.reduce((acc, a, i) => acc + (a === s.questions[i].answer ? 1 : 0), 0);
  const byDomain = {};
  s.questions.forEach((q, i) => {
    const a = s.answers[i];
    if (a === undefined) return;
    if (!byDomain[q.domain]) byDomain[q.domain] = { correct: 0, total: 0 };
    byDomain[q.domain].total += 1;
    if (a === q.answer) byDomain[q.domain].correct += 1;
  });
  const elapsedMs = Date.now() - s.startedAt;
  const progress = loadProgress();
  progress.sessions.push({ correct, total: answered, at: Date.now() });
  for (const [d, v] of Object.entries(byDomain)) {
    if (!progress.perDomain[d]) progress.perDomain[d] = { correct: 0, total: 0 };
    progress.perDomain[d].correct += v.correct;
    progress.perDomain[d].total += v.total;
  }
  saveProgress(progress);
  renderResults({ correct, total: answered, byDomain, elapsedMs, expired: s.expired, timeLimit: s.timeLimit });
}

function renderResults({ correct, total, byDomain, elapsedMs, expired, timeLimit }) {
  mount("tpl-results");
  const pct = total ? Math.round(100 * correct / total) : 0;
  document.getElementById("score").textContent = `${correct} / ${total}  (${pct}%)`;
  const meta = document.getElementById("results-meta");
  if (meta) {
    const parts = [`Time: ${formatDuration(elapsedMs)}`];
    if (timeLimit) parts.push(`limit: ${formatDuration(timeLimit * 1000)}`);
    if (expired) parts.push(`<span class="timer-crit">time expired</span>`);
    meta.innerHTML = parts.join(" · ");
  }
  const tbody = document.querySelector("#bydomain tbody");
  for (const [d, v] of Object.entries(byDomain)) {
    const tr = document.createElement("tr");
    const p = Math.round(100 * v.correct / v.total);
    tr.innerHTML = `<td>${escapeHtml(d)}</td><td>${v.correct}</td><td>${v.total}</td><td>${p}%</td>`;
    tbody.appendChild(tr);
  }
  const reviewOl = document.getElementById("review");
  state.session.questions.forEach((q, i) => {
    const a = state.session.answers[i];
    const li = document.createElement("li");
    const isCorrect = a === q.answer;
    const yourAns = a === undefined ? "(skipped)" : LETTERS[a] + ". " + q.options[a];
    const correctAns = LETTERS[q.answer] + ". " + q.options[q.answer];
    li.innerHTML = `<div class="q">${escapeHtml(q.question)}</div>
      <div class="a ${isCorrect ? "good" : "bad"}">Your answer: ${escapeHtml(yourAns)}</div>
      ${isCorrect ? "" : `<div class="a good">Correct: ${escapeHtml(correctAns)}</div>`}
      <div class="a">${escapeHtml(q.explanation)}</div>`;
    reviewOl.appendChild(li);
  });
  document.getElementById("again").addEventListener("click", renderHome);
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
}

(function init() {
  try { loadBank(); }
  catch (e) {
    document.getElementById("app").innerHTML =
      `<section class="card"><h2>Couldn't load questions</h2><p>${escapeHtml(e.message)}</p></section>`;
    return;
  }
  renderHome();
})();

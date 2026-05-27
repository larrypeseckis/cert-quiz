# cert-quiz

A small, forkable practice-quiz template for certification study, with one feature most prep sites don't offer: **drop in your actual vendor score report and the quiz biases questions toward your weak spots.**

I built this because I couldn't find SSCP-focused practice quizzes that adapted to my historical performance instead of just shuffling through everything. After making one for SSCP, I added CCSP too. The whole thing is plain HTML + JavaScript with no dependencies — open `index.html` and it works.

If you're studying for a different cert, the [ADAPTING.md](ADAPTING.md) walkthrough shows how to fork this for yours in about an hour.

## What's in here

| Folder | Cert / Course | Questions | Topics/Domains |
|---|---|---:|---:|
| `sscp/` | ISC2 SSCP | 500 | 7 |
| `ccsp/` | ISC2 CCSP | 253 | 6 |
| `linux-essentials/` | LPI Linux Essentials (010-160) | 250 | 5 |
| `data-plus/` | CompTIA Data+ (DA0-002) | 265 | 5 |
| `discrete-math/` | Discrete Mathematics (course quiz) | 100 | 6 |

Each quiz is self-contained — just open the `index.html` inside the folder. There's no server, no install, no build step.

## Features

- **Domain filter** — practice one domain at a time or all mixed
- **Immediate feedback** — explanations appear right after you answer, not just at the end
- **Per-session results** — score by domain plus a full review of every question
- **Progress tracking** — lifetime accuracy and per-domain stats persist in `localStorage` across sessions
- **Adaptive weighting** — paste your actual score-report data into the textarea (or load a CompTIA-style `.js` report), and the quiz biases random selection toward weaker sub-objectives or domains

The score-report parser is the differentiator. It accepts:

- Paste-in lines like `1.1 Topic title 50` or `- 2.3 Topic: 0` directly from any report
- CompTIA-style `.js` score-report files (PenTest+, SecurityX, etc. — same format)
- Markdown or text files in the same line format

Sub-objective weighting applies first (matching by `N.M` prefix against per-question tags in `topics.js`); domain-level weighting fills in the rest. Weight formula: 100% scores → 0.5×, 50% → 1.5×, 0% → 2.5× — so weak areas show up roughly 5× as often as mastered ones.

You can also download a human-readable `weights.md` summary of whatever's currently applied.

## Disclaimers (please read)

- **All questions are AI-generated.** They're modeled on the published CCSP and SSCP exam objectives but they are NOT reproductions of actual exam content. This is a study aid, not authoritative test prep.
- **Questions may contain errors.** Wording can be ambiguous, occasionally an answer key could be debated, and some questions might test a concept slightly off. If you spot one, file an issue or PR.
- **Sub-objective tags are best-effort.** They follow my read of each CBK's structure. If your practice-exam tool uses different IDs, the domain-level fallback still gives useful weighting, and you can edit `topics.js` to align.
- **Not affiliated with ISC2 or CompTIA.** All trademarks belong to their owners.

## Quick start

```
git clone <this-repo>
cd cert-quiz/sscp        # or cd cert-quiz/ccsp
```

Then open `index.html` in your browser. That's it.

(On some systems `file://` URLs are restricted. If the quiz fails to load, run `python -m http.server` in the quiz folder and visit `http://localhost:8000`.)

## Adapting for another cert

See [ADAPTING.md](ADAPTING.md). The short version: copy `sscp/`, change four things, drop in your own questions.

## License

[MIT](LICENSE) — fork it, modify it, ship it. Attribution appreciated but not required.

Contributions to fix individual questions are welcome via PR. Larger contributions (adding a new cert folder, improving the score parser, etc.) — open an issue first so we can talk through it.
"# cert-quiz" 

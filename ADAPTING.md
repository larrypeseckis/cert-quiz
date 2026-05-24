# Adapting cert-quiz for another certification

The whole project is intentionally small. To target a new cert, you copy one of the existing quiz folders and change four things. Plan on about an hour of mechanical work plus however long it takes you to write or generate questions.

## Step 1: Copy a starting folder

```
cp -r sscp/ mycert/      # or any cert short name
```

The SSCP folder is a fine starting point regardless of which cert you're targeting — the structure is identical between `sscp/` and `ccsp/`.

## Step 2: Edit `mycert/index.html`

Three things to update:

```html
<title>SSCP Practice Quiz</title>          <!-- change to your cert -->

<h1>SSCP Practice Quiz</h1>                <!-- change to your cert -->
<p class="sub">Original practice questions modeled on the ISC2 SSCP Common Body of Knowledge.
   Not affiliated with ISC2.</p>           <!-- change cert + body name -->
```

Update the textarea placeholder in the Adaptive weighting card too so the examples reflect your cert's actual sub-objectives.

## Step 3: Edit `mycert/app.js`

Two storage keys at the top — change them so your quiz's progress and weights don't collide with other quizzes' `localStorage`:

```js
const STORAGE_KEY = "sscp-quiz-progress-v1";   // → "mycert-quiz-progress-v1"
const WEIGHTS_KEY = "sscp-quiz-weights-v1";    // → "mycert-quiz-weights-v1"
```

## Step 4: Replace `mycert/questions.json`

This is where the real work is. The format is a JSON array of question objects:

```json
[
  {
    "domain": "1: Domain name",
    "question": "Which of the following ... ?",
    "options": ["First option", "Second option", "Third option", "Fourth option"],
    "answer": 2,
    "explanation": "Why the correct answer is correct."
  }
]
```

Rules:

- `domain` must start with a digit followed by a colon (`"1: Cloud Concepts"`). The leading digit is used to group questions and to match against score-report domain numbers.
- `options` must have exactly 4 entries.
- `answer` is the zero-indexed position of the correct option in `options`.
- `explanation` is shown after the user picks an answer.

### Regenerate `questions.js` from `questions.json`

The browser needs a `<script>`-loadable copy. A one-liner:

```bash
python -c "import json; data=open('questions.json').read(); open('questions.js','w').write('window.QUESTIONS = ' + data + ';\n')"
```

Run that any time you edit `questions.json`.

## Step 5: Replace `mycert/topics.js`

This is a sidecar file giving each question a sub-objective tag. The tags drive the fine-grained weighting when a score report is imported.

```js
window.TOPICS = [
  "1.1 Topic for question 0",
  "1.1 Topic for question 1",
  "1.2 Topic for question 2",
  // ...one string per question, in the same order as questions.json
];
```

Rules:

- One entry per question, in the same order as `questions.json` (count must match).
- Each entry should start with the sub-objective ID (`N.M`) followed by a short topic descriptor.
- The leading `N.M` is what matches against score-report titles when weighting is applied. The descriptor after it is for human readability.

If you skip this step entirely, domain-level weighting still works — the file is optional for that. But sub-objective weighting needs it.

## Step 6: Use it

Open `mycert/index.html` in your browser. Test a session. Try importing a score report (or pasting fake scores) to verify your topic IDs match what your score reports actually emit.

If a sub-objective in your score report doesn't match any topic in `topics.js`, the domain fallback kicks in automatically — no error, but you lose granularity. Fix by aligning your `topics.js` IDs with the IDs your reports use.

## Common pitfalls

- **Question count mismatch.** `topics.js` length must equal `questions.json` length. Mismatch silently degrades to domain-level weighting for the unmatched questions.
- **Domain prefix.** Every `domain` field needs the leading `N:` (number colon). Without it, the weighting won't map.
- **Forgetting to regen `questions.js`.** The browser loads `questions.js`, not `questions.json`. Edit the JSON, then regenerate.
- **localStorage collisions.** If you skip step 3, your new cert quiz will share state with the one you forked from. Always change both `STORAGE_KEY` and `WEIGHTS_KEY`.

## A note on question quality

AI-generated questions are uneven. Expect to revise some as you encounter them — wording, ambiguity, or factual quirks. Treat the initial bank as a starting draft, not a finished product. If you spot errors in the SSCP or CCSP banks here, PRs welcome.

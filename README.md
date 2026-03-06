# AlgoBlocks - Learning Platform for Danish Gymnasium Students

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/4755fcf1-e8bd-49f9-b73d-ec758210083d" />

An interactive, block-based programming environment for gymnasium students to learn and implement algorithms. Built with React and [Blockly](https://developers.google.com/blockly), AlgoBlocks lets students visually construct algorithms by connecting code blocks — no syntax knowledge required.

> 🔗 Live site: [algo-blocks.ballebysoftware.dk](https://algo-blocks.ballebysoftware.dk)

---

## Features

- 🧩 **Block-based editor** — drag and drop code blocks to build algorithms visually
- ✅ **Automated test cases** — run your algorithm against predefined test cases with pass/fail feedback
- 🛡️ **Safe code execution** — generated code runs in an isolated Web Worker with a timeout to prevent infinite loops
- 📋 **Live code preview** — see the generated JavaScript update in real time as blocks are placed

---

## Tech Stack

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming language of choice
- [React](https://react.dev/) — UI framework
- [Blockly](https://developers.google.com/blockly) — block-based editor
- [Vite](https://vitejs.dev/) — build tool
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [Vitest](https://vitest.dev/) — unit testing

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone git@github.com:AndersBalleby/AlgoBlocks.git
cd AlgoBlocks
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

### Running Tests

```bash
npm test          # Watch mode
npm run test:run  # Run once
```

---

## Project Structure

```
src/
├── blocks/           # Blockly block definitions and generators
│   ├── logic/
│   ├── loops/
│   ├── math/
│   ├── text/
│   ├── lists/
│   ├── conditionals/
│   ├── variables/
│   └── functions/
├── components/       # React components
│   ├── BlocklyWorkspace.jsx
│   ├── TestCaseTab.jsx
│   ├── ProblemTab.jsx
│   ├── TestCase.jsx
│   ├── IntroModal.jsx
│   └── ...
├── __tests__/        # Vitest unit tests for generators
└── toolbox.js        # Blockly toolbox configuration
```

---

## How It Works

1. Students are presented with the Linear Search algorithm during a presentation.
2. Then, they are introduced to the platform, where they can read the problem description and pseudocode in the left panel
3. They drag blocks from the toolbox to construct their algorithm
4. The generated JavaScript updates live in the code preview
5. Clicking **Kør Algoritme** runs the code against test cases in a Web Worker
6. Each test case shows pass/fail with the actual vs expected result

---

_Built by [Anders Balleby](https://www.ballebysoftware.dk)_

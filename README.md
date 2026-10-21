# Snake & Ladders 🎲🐍🪜

A clean, interactive 2-player Snakes & Ladders game built with **React**, **Vite**, and **Modular CSS**.

- **Live Demo**: [https://x-snakes-n-ladders-tanmaygurav.vercel.app/](https://x-snakes-n-ladders-tanmaygurav.vercel.app/)
- **Repository**: [https://github.com/tanmaygurav/XSnakesNLadders](https://github.com/tanmaygurav/XSnakesNLadders)

---

## 🎮 Game Rules & Features

- **2 Players**: Red token (`P1`) and Blue token (`P2`).
- **Turn-based**: Players take turns rolling a standard 6-sided dice.
- **Snakes & Ladders**:
  - Landing on a ladder climbs you up to the designated square.
  - Landing on a snake's head slides you down to its tail.
- **Winning Condition**: An **exact 100** is required to win. If a dice roll exceeds 100, the player stays in place until the next turn.
- **Reset**: Quick restart at any time with the Reset button.

---

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/)
- **Bundler / Dev Server**: [Vite](https://vitejs.dev/)
- **Styling**: CSS Modules
- **Testing**: [Cypress](https://www.cypress.io/) for end-to-end test verification

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tanmaygurav/XSnakesNLadders.git
   cd XSnakesNLadders
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

---

## 🧪 Running Tests

The application includes Cypress tests to verify rendering, game rules, and player states.

1. In a separate terminal, navigate to the `assessment` directory:
   ```bash
   cd assessment
   npm install
   ```

2. Run the Cypress E2E test suite (ensure the dev server is running on `http://localhost:5173`):
   ```bash
   npx cypress run --spec "cypress/e2e/spec.cy.js"
   ```


# 🔍 Diff Files Online (diff.devcito.org)

A premium, client-side visual text and file comparison web application with a **GitHub Dark & VS Code** inspired hybrid aesthetic. 100% local, secure, fast, and fully interactive.

Live Site: 👉 **[https://diff.devcito.org](https://diff.devcito.org)**

[![Astro](https://img.shields.io/badge/Astro-%23FF5D01.svg?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat)](https://opensource.org/licenses/MIT)

---

## ✨ Key Features

*   **🔒 Absolute Privacy**: 100% local client-side processing. Your texts and files are evaluated directly in your browser's RAM. No data ever travels to external servers.
*   **📊 Myers Diff Algorithm**: Utilizes the highly optimized and robust Myers algorithm (powered by `jsdiff`) for precise, Git-like line diffing.
*   **💡 Word-Level Highlighting**: Highlights not just modified lines, but also the exact letters or words changed within each line.
*   **💻 GitHub Dark & VS Code Theme**: A sleek, familiar high-contrast visual style making code reviews and text comparison natural and easy on the eyes.
*   **↕️ Split (Side-by-Side) & Unified (Inline) Views**: Toggle view modes instantly depending on your preference.
*   **🚀 Immediate Demo Example**: Pre-loads a mock server configuration comparison on startup so you can see the diff highlighter in action immediately.
*   **📂 Drag & Drop Uploads**: Upload files directly by dragging them onto their respective panels. Supports code formats, markdown, JSON, and plain text.
*   **🛠️ Productivity Utilities**:
    *   Interactive keyword search filter to focus on specific modified lines.
    *   Toggle panel button to hide/show input editors and maximize diff screen space.
    *   Quick copy-to-clipboard buttons.
    *   One-click clear button to reset the dashboard.
*   **📱 Fully Responsive & Adaptable**: Designed to look premium on desktops and fit comfortably on smaller laptop viewports, with clean vertical stacking and horizontal overflow scroll support on mobile.

---

## 🛠️ Tech Stack

*   **Astro v6**: Modern static site builder for lightning-fast delivery and optimal client-side hydration.
*   **Tailwind CSS v4**: Built natively with Vite (`@tailwindcss/vite`) to power glassmorphism effects, harmonized dark-mode color palettes, and fluid animations.
*   **jsdiff**: Myers algorithm engine for calculating line and character differences.
*   **Google Fonts**: JetBrains Mono (for code clarity), Outfit (for modern headers), and Plus Jakarta Sans (for interface UI readability).

---

## 🚀 Local Installation & Setup

Ensure you have [Node.js](https://nodejs.org) and [pnpm](https://pnpm.io) installed on your machine.

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/diff-files-online.git
    cd diff-files-online
    ```

2.  **Install dependencies**:
    ```bash
    pnpm install
    ```

3.  **Start the local development server**:
    ```bash
    pnpm dev
    ```
    The application will run locally at `http://localhost:4321/`.

4.  **Build for Production**:
    ```bash
    pnpm run build
    ```
    The production-ready assets will compile into the `/docs` folder. This project is configured to target `/docs` as its output directory to enable seamless deployment directly from Github's `docs/` branch folder option in GitHub Pages.

---

## 📈 Directory Structure

```text
├── docs/                      # Compiled production assets (ideal for GitHub Pages hosting)
├── src/
│   ├── components/
│   │   ├── Navbar.astro       # Top navigation bar with glassmorphic styling
│   │   ├── Hero.astro         # Hero banner with Split/Unified visual mockup
│   │   ├── DiffApp.astro      # Main diff engine (inputs, Myers logic, stats, search, and renderer)
│   │   ├── Features.astro     # Interactive feature showcase grid & security section
│   │   └── Footer.astro       # Footer with devcito attribution links
│   ├── layouts/
│   │   └── Layout.astro       # Global page layout containing premium SEO tags and font connections
│   ├── pages/
│   │   └── index.astro        # Main entrypoint of the SPA
│   └── styles/
│       └── global.css         # Custom Tailwind v4 tokens & animation frames
├── astro.config.mjs           # Astro configuration (directs build to /docs and sets canonical diff.devcito.org)
├── package.json               # Package scripts & dependencies
└── README.md                  # Project documentation (this file)
```

---

## 🔒 Privacy & Safety

Your data belongs to you. **Diff Files Online** operates entirely on the client side. No text, source code, or JSON input is ever transmitted, stored, or analyzed on a remote server. 

## 📄 License

Distributed under the MIT License. See license documentation for details.

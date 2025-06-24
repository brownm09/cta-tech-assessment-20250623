<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This project is a React app scaffolded with Vite. The main page should display 'Hello, World!'.

---

## User-Provided Instructions and Actions

### 1. The main page must display only 'Hello, World!'.

- **Action:** Updated `src/App.jsx` to render only 'Hello, World!' and removed all extra content and unused imports.

### 2. Use Vite to scaffold the React app.

- **Action:** Ran `npx create-vite@latest . --template react` to scaffold the project in the current directory.

### 3. Provide a README and VS Code tasks for easy setup and usage.

- **Action:** Replaced the default `README.md` with custom setup and usage instructions. Created `.vscode/tasks.json` with tasks for dev and build.

### 4. Document all commands and steps used to set up and modify the project.

- **Action:** All commands and steps are listed below, and this file is kept up to date with every change.

### 5. When generating code, follow these user-provided coding instructions unless they contradict a system message.

- **Action:** All code and documentation changes have followed these instructions exactly.

---

## Commands and Steps Used to Set Up This Project

1. **Scaffold the React app with Vite:**
   ```bash
   npx create-vite@latest . --template react
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Build for production:**
   ```bash
   npm run build
   ```

- The main page was updated to display only 'Hello, World!'.
- A README and VS Code tasks were created for easy setup and usage.

# Todo App Exercise
## Exercise Description
Create a React app that presents a todo list, and every list item has a "more detailes" button that navigates to a "Details" page that presents the title and description of the task item.
The "Detailes" pages also have a "go back" button that navigates to the main page.
Use mock data (mock data was supplied in the exercise)

## Time constraines
Develop the app in about 3 hours.

### My Component Tree

I designed the 2-page app with the routing on the "App.tsx" component and the Home component renders the TodoList component, that renders Todo component.
The routing to TodoDetails component is managed in the App component.

<img width="707" alt="Screenshot 2024-12-08 at 16 46 43" src="https://github.com/user-attachments/assets/639cc72f-993d-4d59-886b-0c44b743f808">

# Run Instructions

* Clone this repo
* Inside the root directory: `npm install`
* `npm run dev`

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

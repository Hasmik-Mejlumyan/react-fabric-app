# React Fabric App

![screenshot](./public/screenshot.gif)

Basic Canvas editor based on web technologies with **dark mode support**. <br>
The website is deployed on [Vercel](https://vercel.com/). <br>
Website: https://react-fabric-app.vercel.app

## 🔍 Table of Contents

## 📦 Installation
1. Clone the repository
```bash
git clone https://github.com/Hasmik-Mejlumyan/react-fabric-app
```

2. Install the dependencies
```html
yarn
```
_*Note: Ensure you are using Node.js v22.14.0 for better and stable experience._

3. Run the project
```bash
yarn dev  
```

4. For checking and fixing code style run eslint commands accordingly
```bash
yarn lint # For checking
```
```bash
yarn lint:fix # For fixing
```

## 🚀 Performance optimization
Simple techniques were used for performance optimization such as
1. Lazy loading for bigger components (we don't have many, that's why I imported my global Canvas element 🙂)
2. Used Fabric.js library, instead of Canvas API with `requestAnimationFrame`
3. Used **React Context API** instead of prop drilling

## Pipeline Setup
A basic template was used only for checking PRs, specifically **lints** and **build check**. <br>
The deployment part was taken care of by **Vercel**. <br>
PR Check consists of the following jobs.
1. **lint** - which check linters in a few steps
2. **build** - which checks if the app builds properly in a few steps

## 💻 Tech Stack
<div>
    <img src="https://github.com/devicons/devicon/blob/master/icons/vitejs/vitejs-original.svg" title="Vite" alt="Vite" width="40" height="40"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" title="Typescript" alt="Typescript" width="40" height="40"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" title="React" alt="React" width="40" height="40" />&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/tailwindcss/tailwindcss-original.svg" title="TailwindCSS" alt="TailwindCSS" width="40" height="40" />&nbsp;
    <img src="https://pbs.twimg.com/profile_images/1436375272/Screen_shot_2011-07-11_at_1.55.36_AM_400x400.png" title="Fabric.js" alt="Fabric.js" width="40" height="40" />&nbsp;
</div>


---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

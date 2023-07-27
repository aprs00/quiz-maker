# Quiz Maker Repository Setup

### https://quiz-maker-delta.vercel.app/quizzes

## Getting Started

To get started with the Quiz Maker application, follow these steps:

1.  **Close the Repository**:

    ```bash
    git clone https://github.com/aprs00/quiz-maker.git
    ```

2.  **Change Directory to Quiz Maker**:

    ```bash
    cd quiz-maker
    ```

3.  **Create .env file in project root and paste following code**:

    ```bash
    VITE_API_URL=https://quiz-maker.api.enterwell.space
    VITE_USE_MOCK_API=true
    VITE_MSW_DB_UUID=dev-cad3e5da-f69f-40b3-9545-137520e75db7
    ```

4.  **Install Dependencies**:

    ```bash
    pnpm install
    ```

5.  **Run project**:

    ```bash
    pnpm dev
    ```

---

### Packages used:

-   [React](https://react.dev)
-   [TypeScript](https://www.typescriptlang.org)
-   [Vite](https://vitejs.dev/)
-   [React Router](https://reactrouter.com/en/main)
-   [Tanstack Query](https://tanstack.com/query/latest)
-   [Mantine](https://mantine.dev)
-   [ky](https://github.com/sindresorhus/ky)
-   [msw](https://mswjs.io/)
-   [mswjs/data](https://github.com/mswjs/data)
-   [faker](https://fakerjs.dev/)

---

<br /> <br />

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

-   Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
-   Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs) [![Netlify Status](https://api.netlify.com/api/v1/badges/e0a1faba-20d9-400c-93f9-d8fffc943841/deploy-status)](https://app.netlify.com/sites/ligalaiz-notab/deploys) [![Maintainability](https://api.codeclimate.com/v1/badges/753f9cd8ffa551fdebcf/maintainability)](https://codeclimate.com/github/Ligalaiz/catalog/maintainability)


# Notab - app landing page.

## Tech Stack

SCSS, JS

## Run Locally

Clone the project

```js
  gh repo clone Ligalaiz/catalog
```

Go to the project directory

```bash
  cd catalog
```

Install dependencies

```bash
  npm install
```

Start the server and client

```bash
  npm run start:client
```

## Running Tests

To run tests, run the following command

```js
  npm run test
```

## Running Lint

To run lint, run the following command

```js
  npm run lint
```

## Deployment

To run deploy, run the following command

```js
  npm run build
```

## Project structure

```
├── src/                             # Исходники
│   ├── assets/                      # Подключаемые ресурсы
│   │   ├── fonts/                   # Шрифты используемые в проекте
│   │   ├── img/                     # Изображения используемые в проекте
│   │   └── styles/                  # Стили
│   │       ├── global/              # Папка с глобальнымистилями
│   │       │   ├── _global.scss     # Файл с глобальными стилями
│   │       │   └── _fonts.scss      # Файл с подлючаемыми шрифтами
│   │       └── internals/           # Дополнения
│   │          ├── _mixins.scss      # Файл с миксинами
│   │          └── _variables.scss   # Файл с переменными
│   ├── internals/                   # Дополнения
│   ├── template/                    # Папка с шаблонами
│   └── pages/                       # Папка страниц проекта
├── config/                          # Конфигурация Webpack
|    ├── webpack.common.js           # Базовая конфигурация Webpack.js
|    ├── webpack.dev.js              # Конфигурация для dev сборки
|    └── webpack.prod.js             # Конфигурация для production сборки
├── .browserslistrc                  # Конфигурация Browserslist
├── .editorconfig                    # Конфигурация IDE
├── .env                             # Environment Variables
├── .eslintignore                    # Список исключённых файлов из ESLint
├── .eslintrc.js                     # Конфигурация проверки JS в ESLint
├── .gitignore                       # Список исключённых файлов из Git
├── .gitattributes                   # Конфигурация GIT по отношению к путям
├── .npmrc                           # Конфигурация npm
├── .prettierignore                  # Список исключённых файлов из Prettier
├── .projections.json                # Конфигурация отношений между файлами
├── babel.config.js                  # Конфигурация компиляции Javascript в es5
├── jest.config.js                   # Конфигурация Jest
├── LICENSE                          # Файл лицензии
├── package.json                     # Список модулей и прочей информации
├── postcss.config.js                # Конфигурация компиляции стилей
├── prettier.config.js               # Конфигурация форматирования кода
└── README.md                        # Файл описания проекта
```
## Templates

<table>
  <tr>
    <th>
      <a href="https://ligalaiz-notab.netlify.app/notab" target="_blank">Landing Page | Desktop</a>
    </th>
    <th>
      <a href="https://ligalaiz-notab.netlify.app/notab" target="_blank">Landing Page | Mobile</a>
    </th>
  </tr>

  <tr valign="top">
    <td>
      <a href="https://github.com/Ligalaiz/catalog/blob/develop/src/template/landing.jpg?raw=true" target="_blank">
        <img src="https://github.com/Ligalaiz/catalog/blob/develop/src/template/landing.jpg?raw=true?raw=true" width="250" alt="Desktop">
      </a>
    </td>
    <td>
      <a href="https://github.com/Ligalaiz/catalog/blob/develop/src/template/mobile.jpg?raw=true" target="_blank">
        <img src="https://github.com/Ligalaiz/catalog/blob/develop/src/template/mobile.jpg?raw=true" width="250" alt="Mobile">
      </a>
    </td>
  </tr>
</table>

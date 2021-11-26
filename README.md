# nikola-generator

Generator of [eslint](https://eslint.org/) and [prettier](https://prettier.io/) configurations for [next](https://nextjs.org/), [nest](https://nestjs.com/), [react](https://reactjs.org/), [node](https://nodejs.dev/) for both [typescript](https://www.typescriptlang.org/) and [javascript](https://www.javascript.com/).

## 📦 Usage

Install on a particular project:

```sh
npx nikola-generator
```

Install globally(recommended if you are using our technologies very often):

```sh
# yarn
yarn global add nikola-generator

# npm
npm install -g nikola-generator

# use
nikola
```

## Recommended vscode settings

This configuration allows you to automatically correct most of the problems that eslint marks in your [VS Code](https://code.visualstudio.com/)

```js
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},

"[javascript]": {
	"editor.formatOnPaste": false,
	"editor.formatOnSave": false
},

"[javascriptreact]": {
	"editor.formatOnPaste": false,
	"editor.formatOnSave": false
},

"[typescript]": {
	"editor.formatOnPaste": false,
	"editor.formatOnSave": false
},

"[typescriptreact]": {
	"editor.formatOnPaste": false,
	"editor.formatOnSave": false
},
```

Don't forget to have [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) installed in your VS Code

## 🔥 Working in...

templates for more configurations and projects configured to start 🚀.

## ©️ Copyright

**`LICENSE`**: MIT

Check the file [here](./LICENSE)

# swc-react-template

[![GitHub Release Date](https://img.shields.io/github/release-date/tohsaka888/create-react-swc-app.svg?style=flat-square)](https://github.com/tohsaka888/create-react-swc-app/releases)
[![npm package](https://img.shields.io/npm/v/create-react-swc-app.svg?style=flat-square)](https://www.npmjs.org/package/create-react-swc-app)
[![NPM downloads](http://img.shields.io/npm/dm/create-react-swc-app.svg?style=flat-square)](https://npmjs.org/package/create-react-swc-app)
[![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/tohsaka888/create-react-swc-app/blob/master/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## introduction

use `swc` and `webpack5` to build the template for your react application.

## usage

you can use cli commands to create your own react application.

```bash
Usage: create-react-swc-app [options] [name]

create a project

Arguments:
  name              project name

Options:
  -ts --typescript  language
  -js --javascript  language
  -h, --help        display help for command
```

for example, i want to create a project named `my-app` and i want to use typescript:

```bash
 npx create-react-swc-app my-app -ts
⚛️   React With SWC  ⚛️
✔ 🎉🎉🎉 succeed download template! 🎉🎉🎉
? 🤔 choose a package manager (Use arrow keys)
❯ npm
  yarn
  pnpm
```

you can just run `npx create-react-swc-app` instead.

```bash
npx create-react-swc-app
? 🤔 project name? my-app
? 🤔 choose a template TypeScript
⚛️   React With SWC  ⚛️
✔ 🎉🎉🎉 succeed download template! 🎉🎉🎉
? 🤔 choose a package manager (Use arrow keys)
❯ npm
  yarn
  pnpm
```

now, you can see the now folder in current working space.

then, you can select the package manager to download the dependencies.

```bash
? 🤔 choose a package manager pnpm
✔ 🎉🎉🎉 success download dependencies! 🎉🎉🎉
🚀 run: cd ./my-app && pnpm dev
```

if you see something like this, congratulations!

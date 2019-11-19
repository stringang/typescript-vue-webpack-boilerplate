# TypeScript, Vue full-stack JS Boilerplate

This is a full stack webapp boilerplate project with TypeScript + VueJS + Webpack.

## Usage
Install dependencies
```shell
$ npm install
```
For development

```shell
$ npm run dev
```

## Features
**Server-side**

* [x] NodeJS
* [x] Koa2/NestJS/express

**Client-side**
* [x] VueJS 2.X
* [x] Vue-router
* [x] Webpack 4
* [x] Babel

## Directory structure
```txt
+---build
|-------devServer.ts
|-------wepback.base.conf.js
|-------webpack.dev.conf.js
|-------webpack.prod.conf.js
+---src
|   +---client
|   |-------index.html
|   |-------main.ts
|   |-------tsconfig.json
|   |   +---componets
|   |           HelloWorld.Vue
|   |   +---router
|   |           index.ts              
|   +---server
|   |        main.ts
|   |   +---services
|   |   +---utils
|
|   package.json
|   tsconfig.json
```

## Reference
- https://github.com/microsoft/TypeScript-Vue-Starter
- https://github.com/samteb/vue-2-webpack-4-boilerplate
- https://github.com/vuejs-templates/webpack
- https://github.com/icebob/vue-express-mongo-boilerplate

<p align="center">
  <img src="https://raw.githubusercontent.com/laradumps/laradumps-core/refs/heads/2.x/art/logo.png" height="128" alt="" />
</p>
<h1 align="center">LaraDumps Js</h1>

<div align="center">
  <p align="center">
    <a href="https://packagist.org/packages/laradumps/laradumps-js">
      <img alt="Total Downloads" src="https://img.shields.io/npm/dm/laradumps-js">
    </a>
    <a href="https://packagist.org/packages/laradumps/laradumps-js">
      <img alt="Latest Version" src="https://img.shields.io/npm/v/laradumps-js">
    </a>
    <a href="https://github.com/laradumps/laradumps-js/actions">
        <img alt="Tests" src="https://github.com/laradumps/laradumps-js/workflows/Node.js%20CI/badge.svg" />
    </a>
    <a href="https://packagist.org/packages/laradumps-js/laradumps">
      <img alt="License" src="https://img.shields.io/github/license/laradumps/laradumps-js">
    </a>
  </p>
</div>

### 👋 Hello Dev,

<br/>

LaraDumps is a user-friendly application designed to boost your coding and debugging experience.

When using LaraDumps, you can see your debugging results displayed in a standalone Desktop application.

### Get Started

#### Web

1. Add the min script to your header.

```html
<script src="
https://cdn.jsdelivr.net/npm/laradumps-js/dist/laradumps.min.js
"></script>
 ```
   
2. Add a `ds()` function somewhere in your code.

---

#### NodeJs | ReactJs | React Native

1. Install LaraDumps Js in your project, run the command:

```shell
yarn add -D laradumps-js
npm install -D laradumps-js
```

2. Import the Laradumps Js

```Javascript
import {ds} from 'laradumps-js'
```
or
```Javascript
import 'laradumps-js'
```

3. Add a `ds()` function somewhere in your code.

#### Vite

1. Install LaraDumps Js in your project, run the command:

```shell
yarn add -D laradumps-js
npm install -D laradumps-js
```

2. Import Laradumps Js inside bootstrap

```Javascript
import 'laradumps-js'
```

3. Add a `ds()` function somewhere in your code.

Here's an example:

```js
//... some JS code ...

ds('Hello from LaraDumps!').info();
```

### Credits

- Author: [Luan Freitas](https://github.com/luanfreitasdev)

- Contribution: [Hecktor Viegas](https://github.com/hecktorvn)

- Logo by [Vitor S. Rodrigues](https://github.com/vs0uz4)
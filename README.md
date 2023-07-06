<p align="center">
  <a href="https://www.npmjs.com/package/@sl-code-lords/web_screenshot" rel="noopener">
 <img width=100px height=100px src="https://play-lh.googleusercontent.com/_hNqSzAVIx5jNvxATP3V5grf5lBMvHSZ5IqbyHJA_wHbS2lGXVntocuokRPaOs0D9A" alt="SL Code LORDS"></a>
</p>

<h2 align="center">WEB ScreenShot</h2>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/SL-CODE-LORDS/Web-Screenshot.svg)](https://github.com/SL-CODE-LORDS/Web-Screenshot/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/SL-CODE-LORDS/Web-Screenshot.svg)](https://github.com/SL-CODE-LORDS/Web-Screenshot/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> takes a screenshot of a website or web page and saves it as a PDF file.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

This project takes a screenshot of a website or web page and saves it as a PDF file. The screenshot can be taken of the entire page or of a specific region. The PDF file can be saved in a variety of formats, including PDF/A, PDF/X, and PDF/UA.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes

### Installing


```sh
yarn add @sl-code-lords/web_screenshot
```

or

```sh
npm i @sl-code-lords/web_screenshot
```

## 🎈 Usage <a name="usage"></a>

```ts
const {WebScreenShot,WebPdf,valid_devices} = require('@sl-code-lords/web_screenshot')
const fs = require('fs')
```
## Screenshot
```ts
const device = 'desktop' // tablet or phone
const full_page = false // true

var data = await WebScreenShot('https://ravindumanoj.ml',device,full_page)
fs.writeFileSync('ravindumanoj-ml.png',data)

```
## Pdf
```ts

const portrait=true // false for landscape
const zoom = false // true
const print_size = false //true

var data = await WebPdf('https://ravindumanoj.ml',portrait,zoom,print_size)
fs.writeFileSync('ravindumanoj-ml.pdf',data)

```

## ✍️ Authors <a name = "authors"></a>

- [@ravindu01manoj](https://github.com/ravindu01manoj) Project Author
- [@vihangayt0](https://github.com/vihangayt0) source helper

See also the list of [contributors](https://github.com/SL-CODE-LORDS/Esana-News/contributors) who participated in this project.
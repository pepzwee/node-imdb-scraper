<h1 align="center">Node.js IMDB Scraper</h1>

<h5 align="center">Scrape data from IMDB pages.</h5>

<div align="center">
  <a href="https://www.npmjs.com/package/node-steam-market-crawler">
    <img src="https://img.shields.io/npm/dm/node-imdb-scraper.svg?style=flat-square" alt="Downloads" />
  </a>
  <a href="https://github.com/pepzwee/node-imdb-scraper">
    <img src="https://img.shields.io/david/pepzwee/node-imdb-scraper.svg" alt="Dependencies" />
  </a>
  <a href="https://github.com/pepzwee/node-imdb-scraper/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/express.svg?style=flat-square" alt="License" />
  </a>
</div>

<br />

```js
const IMDBScraper = require('imdb-scraper')
const Imdb = new IMDBScraper()

Imdb.title('tt3896198')
    .then(res => console.log(res))
    .catch(err => console.log(err))
```

## Installation
`npm install imdb-scraper`
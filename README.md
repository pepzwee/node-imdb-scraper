<h1 align="center">Node.js IMDB Scraper</h1>

<h5 align="center">Scrape data from IMDB pages.</h5>

<div align="center">
  <a href="https://www.npmjs.com/package/imdb-scraper">
    <img src="https://img.shields.io/npm/dw/localeval.svg?style=flat-square" alt="npm" />
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

## Donate
```
BTC: 1Monu1inZHHV4bVfhq9SyfLAsGM2x8dhSE
ETH: 0x9F73bd17CCC4fd12800Bda6F63e708476ba311fC
LTC: LTVuvzqq3vuAqHD5VF8zE6naUDjy3Tbr5E
XMR: 42kQNeiVWvxZickcq5o4F1h3z9h6LsdLbibZd4XKUbzxDzjDJAGmSkJF7K4mfLsq8pe5u24t1qENg5TUin5gDeqBVqEBgt6
```
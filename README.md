# IMDB Scraper [![npm](https://img.shields.io/npm/v/netifriik/imdb-scraper.svg?maxAge=3600)](https://www.npmjs.com/package/imdb-scraper)

> A simple Promise based IMDB scraper

### Install

```console
npm install imdb-scraper
```

### Example

```js
const IMDBScraper = require('imdb-scraper')
const Imdb = new IMDBScraper()

Imdb.title('tt3896198')
  .then(res => console.log(res))
  .catch(err => console.log(err))
```

### Usage

#### Constructor Options

```js
{
  // Request defaults to change headers, use proxies, etc..
  requestDefaults: {},
  // How many retries before request fails
  maxRetries: 3
}
```

### Methods

#### title(tmdbId)
#### episodes(tmdbId, season = 1)
#### search(string || object)

### Contributions

Contributions are welcome, make a PR.
const request = require('request-promise')
const cheerio = require('cheerio')
const fs = require('fs')

const URL = 'http://www.imdb.com'
const PAGE_CHECK_STRING = 'A1EVAM02EL8SFB'

const Title = require('./classes/Title')

class IMDBScraper {

    constructor(options) {

        this.req = request.defaults({
            headers: {
                'Accept-Language': 'en-US,en;q=0.5',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36'
            }
        })
        this.maxRetries = 3

    }

    request(url, retries) {
        if (retries === undefined) retries = this.maxRetries
        const options = {
            url,
            transform: body => {
                return cheerio.load(body)
            },
            transform2xxOnly: true
        }
        return this.req(options)
            .then($ => {
                // Some proxies return HTML when they fail
                // so we need to check if parsed HTML is valid.
                // If page doesn't contain identifier string we retry.
                if ($.html().indexOf(PAGE_CHECK_STRING) === -1) {
                    if (retries) {
                        return this.request(url, retries - 1)
                    }
                    // Failure
                    return Promise.reject('Received malformed body. If you are using proxies this could be due to bad proxies.')
                }
                // Body should be valid
                return $
            })
            .catch(err => {
                if (retries) {
                    return this.request(url, retries - 1)
                }
                return Promise.reject(err)
            })
    }

    title(id) {
        return this.request(`${URL}/title/${id}`)
            .then($ => {
                return new Title($)
            })
            .catch(err => Promise.reject(err))
    }

}

module.exports = IMDBScraper
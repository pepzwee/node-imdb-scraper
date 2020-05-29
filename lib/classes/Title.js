class Title {

    constructor ($) {
        const self = this

        this.title = $('.title_wrapper > h1').clone().find('#titleYear').remove().end().text().trim()
        this.originalTitle = $('.originalTitle').first().clone().find('.description').remove().end().text().trim() || null
        this.release = $('.titleYear > a').text().trim()
        this.genre = $('.title_wrapper a').filter(function () {
            return $(this).attr('href') && $(this).attr('href').indexOf('genres') !== -1
        }).map(function () {
            return $(this).text()
        }).toArray()

        this.plot = $('.title-overview .summary_text').first().text().trim()

        this.poster = $('.poster img').first().attr('src')
        this.metascore = $('.metacriticScore > span').text().trim() || null
        this.imdbRating = $('[itemprop="ratingValue"]').text().trim()
        this.imdbVotes = $('[itemprop="ratingCount"]').text().replace(' ', ',').trim()
        this.imdbID = $('[property="pageId"]').attr('content')
        this.type = $('[property="og:type"]').attr('content').replace('video.', '')

        this.tagline = this.blocks($, 'Tagline').text().trim()
        this.language = this.blocks($, 'Language').find('a').map(function () {
            return $(this).text().trim()
        }).toArray()

        this.seasons = $('a').filter(function () {
            const href = $(this).attr('href')
            return href && href.indexOf(self.imdbID) !== -1 && href.indexOf('season=') !== -1
        }).map(function () {
            return Number($(this).text().trim())
        }).toArray().filter(x => x).sort()

        // TV Shows have a different way of showing the year/release
        if ( ! this.release) {
            this.release = $('[title="See more release dates"]').text().replace('TV Series', '').replace(/\(|\)/g, '').trim()
        }

    }

    blocks ($, text) {
        return $('.txt-block').filter(function() {
            return $(this).text().indexOf(text) !== -1
        }).clone().find('h4, span').remove().end()
    }

}

module.exports = Title

class Title {

    constructor($) {

        this.title = $('h1[itemprop="name"]').clone().find('#titleYear').remove().end().text().trim()
        this.originalTitle = $('.originalTitle').first().clone().find('.description').remove().end().text().trim() || null
        this.year = $('#titleYear > a').text().trim()
        this.rated = $('[itemprop="contentRating"]').attr('content')
        this.released = $('[itemprop="datePublished"]').attr('content') || null
        this.runtime = $('[itemprop="duration"]').first().text().trim()

        this.genre = $('.itemprop[itemprop="genre"]').map(function() {
            return $(this).text()
        }).toArray()
        this.director = $('[itemprop="director"][itemtype="http://schema.org/Person"] [itemprop="name"]').map(function() {
            return $(this).text()
        }).toArray()
        this.writer = $('[itemprop="creator"][itemtype="http://schema.org/Person"] [itemprop="name"]').map(function() {
            return $(this).text()
        }).toArray()
        this.actors = $('[itemprop="actors"][itemtype="http://schema.org/Person"] [itemprop="name"]').map(function() {
            return $(this).text()
        }).toArray()

        this.plot = $('.summary_text[itemprop="description"]').text().trim()

        this.awards = $('[itemprop="awards"]').filter(function() {
            const txt = $(this).text()
            if (txt.indexOf('win') !== -1 || txt.indexOf('nomination') !== -1) {
                return true
            }
            return false
        }).text().toLowerCase().replace('another', '').trim()

        this.poster = $('.poster [itemprop="image"]').attr('src')
        this.metascore = $('.metacriticScore > span').text().trim() || null
        this.imdbRating = $('[itemprop="ratingValue"]').text().trim()
        this.imdbVotes = $('[itemprop="ratingCount"]').text().replace(' ', ',').trim()
        this.imdbID = $('[property="pageId"]').attr('content')
        this.type = $('[property="og:type"]').attr('content').replace('video.', '')
        this.production = $('[itemprop="creator"][itemtype="http://schema.org/Organization"] [itemprop="name"]').map(function() {
            return $(this).text()
        }).toArray()

        this.tagline = this.blocks($, 'Tagline').text().trim()
        this.language = this.blocks($, 'Language').text().trim()
        this.country = this.blocks($, 'Country').find('[itemprop="url"]').map(function() {
            return $(this).text().trim()
        }).toArray()

        // TV Shows have a different way of showing the year
        if ( ! this.year) {
            this.year = $('[title="See more release dates"]').text().replace('TV Series', '').replace(/\(|\)/g, '').trim()
        }

    }

    blocks($, text) {
        return $('.txt-block').filter(function() {
            return $(this).text().indexOf(text) !== -1
        }).clone().find('h4, span').remove().end()
    }

}

module.exports = Title
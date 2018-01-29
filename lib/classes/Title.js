class Title {

    constructor($) {

        this.Title = $('h1[itemprop="name"]').clone().find('#titleYear').remove().end().text().trim()
        this.OriginalTitle = $('.originalTitle').first().clone().find('.description').remove().end().text().trim() || null
        this.Year = $('#titleYear > a').text().trim()
        this.Rated = $('[itemprop="contentRating"]').attr('content')
        this.Released = $('[itemprop="datePublished"]').attr('content') || null
        this.Runtime = $('[itemprop="duration"]').first().text().trim()

        this.Genre = $('.itemprop[itemprop="genre"]').map(function() {
            return $(this).text()
        }).toArray()
        this.Director = $('[itemprop="director"][itemtype="http://schema.org/Person"] [itemprop="name"]').map(function() {
            return $(this).text()
        }).toArray()
        this.Writer = $('[itemprop="creator"][itemtype="http://schema.org/Person"] [itemprop="name"]').map(function() {
            return $(this).text()
        }).toArray()
        this.Actors = $('[itemprop="actors"][itemtype="http://schema.org/Person"] [itemprop="name"]').map(function() {
            return $(this).text()
        }).toArray()

        this.Plot = $('.summary_text[itemprop="description"]').text().trim()

        this.Awards = $('[itemprop="awards"]').filter(function() {
            const txt = $(this).text()
            if (txt.indexOf('win') !== -1 || txt.indexOf('nomination') !== -1) {
                return true
            }
            return false
        }).text().toLowerCase().replace('another', '').trim()

        this.Poster = $('.poster [itemprop="image"]').attr('src')
        this.Metascore = $('.metacriticScore > span').text().trim() || null
        this.imdbRating = $('[itemprop="ratingValue"]').text().trim()
        this.imdbVotes = $('[itemprop="ratingCount"]').text().replace(' ', ',').trim()
        this.imdbID = $('[property="pageId"]').attr('content')
        this.Type = $('[property="og:type"]').attr('content').replace('video.', '')
        this.Production = $('[itemprop="creator"][itemtype="http://schema.org/Organization"] [itemprop="name"]').map(function() {
            return $(this).text()
        }).toArray()

        this.Tagline = this.blocks($, 'Tagline').text().trim()
        this.Language = this.blocks($, 'Language').text().trim()
        this.Country = this.blocks($, 'Country').find('[itemprop="url"]').map(function() {
            return $(this).text().trim()
        }).toArray()

        // TV Shows have a different way of showing the year
        if ( ! this.Year) {
            this.Year = $('[title="See more release dates"]').text().replace('TV Series', '').replace(/\(|\)/g, '').trim()
        }


    }

    blocks($, text) {
        return $('.txt-block').filter(function() {
            return $(this).text().indexOf(text) !== -1
        }).clone().find('h4, span').remove().end()
    }

}

module.exports = Title
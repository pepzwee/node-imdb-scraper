class Search {

    constructor (result) {

        this.title = result.find('.lister-item-header a').text().trim()
        this.year = result.find('.lister-item-year').text().replace(/\(|\)/g, '').trim() || null
        this.poster = result.find('.lister-item-image img').attr('loadlate') || null
        this.genre = result.find('.genre').text().trim().split(', ') || null
        this.plot = result.find('.ratings-bar + p').clone().find('a').remove().end().text().trim() || null

        this.director = result.find('a').map(function() {
            if (this.attribs.href.indexOf('adv_li_dr') !== -1) {
                return this.children[0].data
            }
        }).toArray() || null
        this.actors = result.find('a').map(function() {
            if (this.attribs.href.indexOf('adv_li_st') !== -1) {
                return this.children[0].data
            }
        }).toArray() || null

        this.imdbRating = result.find('[name="ir"]').attr('data-value') || null
        this.imdbVotes = result.find('[name="nv"]').attr('data-value') || null
        this.imdbID = result.find('.lister-item-header a').attr('href').split('/')[2]

        if (this.imdbVotes) {
            this.imdbVotes = parseInt(this.imdbVotes).toLocaleString()
        }
        if (this.year) {
            this.year = parseInt(this.year)
        }

    }

}

module.exports = Search
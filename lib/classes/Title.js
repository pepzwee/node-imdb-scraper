class Title {

    constructor ($) {
        const self = this

        this.title = $('[data-testid="hero-title-block__title"]').text().trim()

        this.originalTitle = $('[data-testid="hero-title-block__original-title"]').text().trim().replace('Original title: ') || null

        // this.release = $('[data-testid="hero-title-block__metadata"] a').first().text().trim()
        this.release = $('[data-testid="title-details-releasedate"] .ipc-metadata-list-item__content-container a').text().trim();

        this.runtime = $('[data-testid="hero-title-block__metadata"] a').last().text().trim()
        
        this.genre = $('[data-testid="genres"] a').map(function () {
            return $(this).text()
        }).toArray()

        this.plot = $('[data-testid="plot"]').first().text().trim()

        this.director = $('li[data-testid="title-pc-principal-credit"]:first-child li').map(function () { 
            return $(this).text().trim()
        }).toArray()

        this.stars = $('li[data-testid="title-pc-principal-credit"]:last-child li').map(function () { 
            return $(this).text().trim()
        }).toArray()

        this.poster = $('[data-testid="hero-media__poster"] img')
            .first()
            .attr('srcset')
            .split(', ')
            .pop()
            .trim()
            .split(' ')[0];


        this.metascore = $('.score-meta').text().trim() || null;

        this.imdbRating = $('[data-testid="hero-rating-bar__aggregate-rating__score"] > span').first().text().trim();

        this.imdbVotes = $('div[class^="AggregateRatingButton__TotalRatingAmount"]').first().text().replace(' ', ',').trim();

        this.imdbID = $('[property="imdb:pageConst"]').attr('content');
        
        this.type = $('[property="og:type"]').attr('content').replace('video.', '');

        this.tagline = $('[data-testid="storyline-taglines"] div').text().trim();

        this.language = $('[data-testid="title-details-languages"] li').map(function () { return $(this).text().trim()}).toArray();
        
        try {
            this.seasons = $('#browse-episodes-season option')
                .filter(function () { return Number($(this).attr('value') >= 1)})
                .map(function () { return Number($(this).attr('value'))})
                .toArray()
                .filter(x => x)
                .sort();
        } catch (e) {
            this.seasons = 'N/A';
        }
    }

}

module.exports = Title

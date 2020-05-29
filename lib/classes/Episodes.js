class Episodes {

  constructor ($) {
      
    this.season = Number($('select#bySeason option[selected]').first().attr('value'))
    this.maxSeason = Number($('select#bySeason option').last().attr('value'))
    this.episodes = $('.eplist > .list_item').map(function () {
      return {
        image: $(this).find('.image img').first().attr('src'),
        episode: Number($(this).find('[itemprop="episodeNumber"]').attr('content')),
        airDate: new Date($(this).find('.airdate').first().text().trim()),
        name: $(this).find('[itemprop="name"]').first().text().trim(),
        description: $(this).find('[itemprop="description"]').first().text().trim(),
        rating: Number($(this).find('.ipl-rating-star__rating').first().text().trim()),
        votes: Number($(this).find('.ipl-rating-star__total-votes').first().text().trim().replace('(', '').replace(')', '').replace(',', ''))
      }
    }).toArray()

  }

}

module.exports = Episodes

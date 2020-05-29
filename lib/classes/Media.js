class Media {

    constructor (img) {

        this.id = img.id
        this.text = img.altText
        
        this.height = img.h
        this.width = img.w

        this.thumbnail = img.msrc
        this.image = img.src

    }

}

module.exports = Media
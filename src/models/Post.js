export default class Post {
    constructor(title, imj) {
        this.title = title
        this.imj = imj
        this.date = new Date()
    }

    toString() {
        return JSON.stringify({
            title: this.title,
            date: this.date.toJSON(),
            imj: this.imj
        })
    }
}
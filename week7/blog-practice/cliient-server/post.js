class Post {
    constructor(title, text) {
        this.title = title;
        this.text = text;
        this.id = Math.random();
    }
}
module.exports = Post;
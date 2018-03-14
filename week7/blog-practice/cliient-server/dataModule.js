const loremIpsum = require('lorem-ipsum');
const Post = require('./post');
const generateTitle = function () {
    return loremIpsum({
        units: 'words',
        count: 2
    })
}
const generateSentences = function () {
    return loremIpsum({
        units: 'sentences',
        count: 3
    })
}

const generateBlog = function (number) {
    const posts = [];
    for (let i = 0; i < number; i++) {
        const title = generateTitle();
        const text = generateTitle();
        const post = new Post(title, text);
        posts.push(post);
    }
    return posts;
}
module.exports = generateBlog;
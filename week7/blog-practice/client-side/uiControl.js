// const getData=request('./main')
// getData().then((response) => {
//     console.log(response);
// })
const displayBlogs = (blogs) => {
    blogs.forEach(element => {
        var d = $('<div>');
        var h = $('<h5>');
        var p = $('<p>');
        $(h).text(element.title);
        $(p).text(element.text);
        $(d).append(h);
        $(d).append(p);
        $('body').append(d);
    });


}
export {
    displayBlogs
}
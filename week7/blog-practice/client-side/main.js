const url = 'http://127.0.0.1:3003';
import { displayBlogs } from './uiControl.js';

const getData = (url) => {
    return fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            return myJson;
        });
}


getData(url).then(blogs => {
    console.log(blogs)
    displayBlogs(blogs);

})

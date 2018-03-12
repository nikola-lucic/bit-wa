/*
0. Create a sample promise that:
Resolves to current time
Prints received time in console when resolved (in then())
1. Create a console app that:
Creates 100 promises;
Each promise has its own ID (0..99);
Each promise is resolved after a random time interval (up to 500ms);
After being resolved, each promise will log its id in the console.

2. Modify the app so it prints an ID of the promise that is completed first.

3. Modify the app so it prints a message that all promises are completed.

*/
for (var i = 0; i < 99; i++) {
    var time = 500 * Math.random();
    const myPromise = new Promise((resolve, reject) => {
        var j = i;
        setTimeout(() => {
            resolve(j);
        }, time)
    });
    myPromise.then((msg) => {
        console.log(msg)
    });
}
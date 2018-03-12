import {
    Show,
    Season,
    Actor
} from './entities.js';

import {
    selectors,
    generateSingleSearchURL,
    searchByValueURL,
    displayError,
    createHomePage,
    createShowPage,
    createDropDownList,
} from './ui.js';

import {
    createShow,
    fetchShows,
    baseEndpoint,
} from './data.js';

const init = () => {
    fetchShows(baseEndpoint, createHomepageCallback, displayError);

    $(selectors.searchInput).on("keyup", () => {

        let currentValueSearch = searchByValueURL();

        fetchShows(currentValueSearch, createDropdownCallback, displayError);
    })
}


// CALLBACK FUNCTIONS
const createHomepageCallback = (response) => {
    const topShows = response.filter(element => parseFloat(element.rating.average) > 8.3).slice(0, 50);
    createHomePage(topShows);

    $(selectors.card).on("click", function () {
        const singleSearchUrl = generateSingleSearchURL(this.id);

        createShowPageOnSelect(singleSearchUrl);
    });
}

const createDropdownCallback = (response) => {
    createDropDownList(response);

    $(".dropdown li").on("click", function (e) {
        e.stopPropagation();

        const singleSearchUrl = generateSingleSearchURL(this.id);

        createShowPageOnSelect(singleSearchUrl);
    })

    $(selectors.searchInput).on("blur", () => {
        setTimeout(() => {
            $(".dropdown").css("display", "none");
        }, 150);
    })
}

const createShowPageOnSelect = (singleSearchUrl) => {
    fetchShows(singleSearchUrl, pageCreationCallback, displayError);
}

const pageCreationCallback = (({
    id,
    name,
    image,
    _embedded,
    summary
}) => {
    let show = createShow(id, name, image.medium, _embedded.seasons, _embedded.cast, summary);
    
    createShowPage(show);
})

init();
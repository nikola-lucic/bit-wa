import { Season, Actor, Show } from './entities.js';
const baseEndpoint = `http://api.tvmaze.com/shows`;

const fetchShows = (path, successCallback, errorCallback) => {
    $.get(path)
        .done(successCallback)
        .fail(errorCallback);
}

const createShow = (id, name, posterURL, listOfSeasons, listOfActors, details) => {
    let seasonsList = listOfSeasons.map(season => new Season(season.premiereDate, season.endDate));
    let actorsList = listOfActors.map(actor => new Actor(actor.person.name));

    return new Show(id, name, posterURL, seasonsList, actorsList, details);
}

export {
    createShow,
    fetchShows,
    baseEndpoint,
}
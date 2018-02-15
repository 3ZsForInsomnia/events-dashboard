/*
 * These actions are "effects", a term taken from NgRx
 * (the redux inspired state management library for Angular 2+)
 * I like this mental model as redux is similar to a state machine,
 * except in that HTTP calls and the like cause external side effects to the current state
 * Given that asynchronous actions typically involve more logic and perform
 * an inherently different purpose than most actions, I like separating them out
 * with their own file.
 */

import * as atomicActions from './event-dashboard.actions';

export const GetSpecificEventAction = (eventId) => (dispatch) => {
    const url = 'events/' + eventId;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            dispatch(atomicActions.SetCurrentlySelectedEventAction(data));
        })
}

export const GetEventsAction = (page) => (dispatch, getState) => {
    let url = '/events?page=';
    if (page) {
        url += page;
    } else {
        url += getState().eventDashboard.currentPage
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (page === 1) {
                dispatch(atomicActions.SetEventsListAction(data.events));
            } else {
                dispatch(atomicActions.AddMoreEventsAction(data.events));
            }
            // Increment the current page count
            // This way next time we call this, we get the next set of events
            dispatch(atomicActions.IncrementCurrentPageAction());
        });
}

import * as actions from './event-dashboard.actions';

const initialState = {
    currentEvent: null,
    events: [],
    eventsPage: 1,
}

export const eventDashboard = (state = initialState, action) => {
    switch (action.type) {
        case actions.SetEventsList:
            return Object.assign({}, state, {
                events: action.payload.events
            });
        case actions.AddMoreEvents:
            return Object.assign({}, state, {
                events: state.events.concat(action.payload.events)
            });
        case actions.SetCurrentlySelectedEvent:
            return Object.assign({}, state, {
                currentEvent: action.payload.eventId
            });
        case actions.UnsetCurrentlySelectedEvent:
            return Object.assign({}, state, {
                currentEvent: null
            });
        default:
            return state
    }
}

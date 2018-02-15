import * as actions from './event-dashboard.actions';

const initialState = {
    selectedEvent: null,
    events: [],
    currentPage: 1,
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
                selectedEvent: action.payload.event
            });
        case actions.UnsetCurrentlySelectedEvent:
            return Object.assign({}, state, {
                selectedEvent: null
            });
        case actions.IncrementCurrentPage:
            return Object.assign({}, state, {
                currentPage: state.currentPage + 1
            });
        default:
            return state
    }
}

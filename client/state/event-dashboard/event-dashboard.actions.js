/*
 * These are the atomic/trivial actions for the reducer
 * I call them "atomic" because when dispatched, they only cause
 * a single state property for the relevant reducer to change
 *
 * If there are non-atomic actions, they can go here, or in another file
 * Non-atomic actions are thunks (assuming usage of the redux-thunk library)
 * and typically dispatch other actions or only dispatch an action conditionally
 */

export const SetEventsList = '[Event Dashboard] Set Events List';
export const AddMoreEvents = '[Event Dashboard] Add More Events';
export const SetCurrentlySelectedEvent = '[Event Dashboard] Set Currently Selected Event';
export const UnsetCurrentlySelectedEvent = '[Event Dashboard] Unset Currently Selected Event';

// SetEventsList and AddMoreActions could be combined, but they are not
// This optimization is not necessary as there is only ever one list
// However, I figured I would show them split up as it is minimal
//      development overhead, and allows this reducer to handle getting new lists
export const SetEventsListAction = (events) => {
    return {
        type: SetEventsList,
        payload: {
            events
        }
    }
}

export const AddMoreEventsAction = (events) => {
    return {
        type: AddMoreEvents,
        payload: {
            events
        }
    }
}

export const SetCurrentlySelectedEventAction = (eventId) => {
    return {
        type: SetCurrentlySelectedEvent,
        payload: {
            eventId
        }
    }
}

export const UnsetCurrentlySelectedEventAction = () => {
    return {
        type: UnsetCurrentlySelectedEvent,
    }
}


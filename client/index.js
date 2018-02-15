import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import App from './App';
import { eventDashboard } from './state/event-dashboard/event-dashboard.reducer';
import { GetEventsAction } from './state/event-dashboard/event-dashboard.effects';

export const store = createStore(
    combineReducers({eventDashboard}),
    applyMiddleware(thunk)
);

store.dispatch(GetEventsAction(1));

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root-container'));

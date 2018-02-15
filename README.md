# Events Dashboard #

This app displays a set of events pulled from static data, using React and Redux as the primary libraries used, and is built using yarn. To run, simply pull down the code, and run ```yarn install``` and ```yarn start```.

The React part of the app is built using Webpack, exporting to /build/index.js.

## About the app ##

This app is mostly responsive, but does so using the "fr" unit for CSS Grid, and the vw and vh CSS units in most other places.

As mentioned, this app makes extensive use of React and Redux. In particular it uses the Redux-suggested approach of containers that wrap components, where the container provides the data and dispatching functions for the component.

### How I used Redux here (and use it in general) ###

The actions used are divided up in a way that is more inspired by NgRx, the Redux-inspired state management library for Angular 2+. This is largely the same, however the way the action types are defined is somewhat different as it includes a namespace of sorts. It also means that there is a mental-model difference in that there is a separate concept of "effects", which are actions that cause externally-sourced changes to the "state machine" that is the store.

While not present here due to the simplicity of the app, I also separate actions out further typically, having both effects and "atomic" actions, as well as "non-atomic" actions. I generally define an "atomic" action as one that causes a single property of the relevant reducer to change, and "non-atomic" actions as actions that dispatch other actions. These non-atomic actions could dispatch a set of actions, or conditonally dispatch an action.

While this sounds strict and possibly verbose, I find that it allows me to functionally compose actions in extremely simple ways, as well as greatly simplifying my reducers.

### Components ###

For the most part, components in this app are pretty straightforward. In some cases I have larger components when there is not much logic within a given section of the code. However whenever any DOM manipulation is happening within the component's JSX, I tend to create a small component to abstract that out. An example of this is visible in the SelectedEvent component group, with Sessions and VenueInfo being separate components.

### Mobile friendliness ###

The CSS grid displays up to three columns in the largest view, and shrinks to two, then one column as the viewport shrinks in width. Also, the events themselves are displayed according to the width available, and so take up the available size.

Further, the modal displayed when a particular event is selected is based on the CSS units of vw and vh, and also uses media queries to take up more or less space based on the same breakpoints that the column count uses. As such, it will take up more of the screen real estate in smaller views, to help ensure that its contents are reasonably viewable as the viewport changes size.
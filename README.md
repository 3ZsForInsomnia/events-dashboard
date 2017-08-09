# Splash Front-end Challenge

Hello developer,

Great news! You're going to totally rebuild the Splash event dashboard. It's too old, like a crippled dinosaur. Captain Murdock, the product manager for this project, has appointed you as the most excellent developer to start this endeavor from scratch. Congrats!

Thankfully B.A., the best back-end developer, has already set up some endpoints for you.

## Requirements

* Implement a UI that renders the returned events inside the dashboard. Note that the endpoint returns paginated results.
* Upon clicking on an event, a modal should open that shows more event details.
* Bonus: add a [Mapbox.js](https://www.mapbox.com/) map inside the modal showing the event's location.

## Set-up Instructions

* We recommend using [yarn](https://yarnpkg.com/en/), an improved version of npm for front-end dependency management.
* Install dependencies executing `yarn install`
* Kick off the local server executing `yarn run start`

## Endpoints Available

* GET `/events?page=[pageNumber]`. Returns a list of events.
* GET `/events/[id]`. Returns event data with more details, like sessions and a description.

## Implementation Notes

* Use `#root-container` as the container for your JS app.
* The files `build/index.js` and `build/index.css` are loaded in the layout. You can create them directly or make your code compilation process output to those paths.
* You can choose to use any framework, task runner, CSS preprocessor or technology that you'd like. Product manager Captain Murdock trusts you fully to make the right decision!
* This project shouldn't take more than a few hours. Making sacrifices to stay within the time frame is okay as long as you can explain the decisions. The goal is for you to implement a beautiful solution that can be reviewed and discussed with the team. Gotta show all of them how amazing you are.
* Use the [provided designs](designs) for guidance. We'll value that you follow them.

## How to submit?

1. Fork this repo. It will stay private in your account.
2. When you are done implementing, go to Settings > Collaborators & Teams and add as collaborator(s) the Splash developer that gave you the code test. Some of us: @gpuenteallott, @daniellealexis, @MitulP91, @johnnybenson.

We're looking forward to your submission! 🚀

> Note for reviewers: use `git fetch origin pull/[pullRequestId]/head:[newBranchName]` and `git checkout [newBranchName]` to test locally a submitted pull request.

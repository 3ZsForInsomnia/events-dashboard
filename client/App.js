import React, { Component } from 'react';
import EventList from './containers/event-list.container';
import LoadMore from './containers/load-more.container';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <EventList />
                <LoadMore />
            </div>
        );
    }
}

export default App;

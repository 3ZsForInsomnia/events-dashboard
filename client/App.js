import React, { Component } from 'react';
import EventList from './containers/event-list.container';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <EventList />
            </div>
        );
    }
}

export default App;

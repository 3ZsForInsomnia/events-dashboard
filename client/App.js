import React, { Component } from 'react';
import './App.styles.css';
import EventList from './containers/event-list.container';
import LoadMore from './containers/load-more.container';
import Modal from './containers/modal.container';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <EventList />
                <LoadMore />
                <Modal />
            </div>
        );
    }
}

export default App;

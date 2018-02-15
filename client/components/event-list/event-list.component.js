import React from 'react'
import './event-list.styles.css';
import Event from './../../containers/event.container';

export const EventList = (props) => {
    return(
        <div className='event-list'>
            { props.eventList.map((event, index) => {
                return <div key={index} className='event-list__event'>
                    <Event event={event}/>
                </div>
            })}
        </div>
    );
}

export default EventList;
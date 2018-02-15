import React from 'react'
import './event.styles.css';
import EventImage from './../event-image/event-image.component';
import EventInfo from './../event-info/event-info.component';

export const Event = (props) => {
    return(
        <div
            onClick={() => props.selectAnEvent(props.event.id)}
            className='event'
        >
            <EventImage imageUrl={props.event.image_url} />
            <EventInfo event={props.event}/>
        </div>
    );
}

export default Event;
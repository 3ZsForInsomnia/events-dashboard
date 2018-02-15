import React from 'react'
import { days, months } from './../../services/date-utility';
import './event-info.styles.css';

export const EventInfo = (props) => {
    const date = new Date(props.event.event_start);
    const dayOfWeek = days[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    let location = '';
    const venue = props.event.venue;
    if (venue) {
        if (venue.city) {
            location = venue.city + ' ';
        }
        if (venue.country) {
            location += venue.country;
        }
    }
    return(
        <div className='event-info'>
            <h3 className='event-info__title'>{props.event.title}</h3>
            <p className='event-info__details'>{dayOfWeek} {month} {dayOfMonth}
                {(location !== '')
                ? ', ' + location
                : ""}
            </p>
        </div>
    )
}

export default EventInfo;
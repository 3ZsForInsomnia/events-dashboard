import React from 'react'
import './selected-event.styles.css';
import { months, days } from './../../services/date-utility';
import Session from './session.component';
import VenueInfo from './venue-info.component';

export const SelectedEvent = (props) => {
    const date = new Date(props.event.event_start);
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const eventDate = month + ' ' + dayOfMonth + ', ' + year;
    const eventStart = date.toLocaleTimeString('en-US');
    const eventEnd = new Date(props.event.event_end).toLocaleTimeString('en-US');
    const venue = props.event.venue;

    return(
        <div className='selected-event'>
            <div className='selected-event__title'>
                <h3>Fuck off: {props.event.title}</h3>
                <button
                    className='selected-event__deselect'
                    onClick={() => props.deselectCurrentEvent()}
                ><i className="material-icons">&#xE5CD;</i></button>
            </div>
            <div className='selected-event__info'>
                <div className='selected-event__details'>
                    <h3>Event Details</h3>
                    <h5>Date & Time</h5>
                    <p>{eventDate}</p>
                    <p>{eventStart} - {eventEnd}</p>
                    { (venue)
                        ? <VenueInfo venue={venue}/>
                        : ""
                    }
                </div>
                { (props.event.description)
                    ? <div className='selected-event__description'>
                        <h3>Description</h3>
                        <p>{props.event.description}</p>
                    </div>
                    : ""
                }
                { (props.event.sessions)
                    ? <div className='selected-event__sessions'>
                        <h3>Sessions ({props.event.sessions.length})</h3>
                        { (props.event.sessions.map(session => {
                            return <Session key={session.id} session={session} />
                        }))}
                    </div>
                    : ""
                }
            </div>
        </div>
    )
}

export default SelectedEvent;

import React from 'react';

const Session = (props) => {
    const sessionStart = new Date(props.session.event_start).toLocaleTimeString('en-US');
    const sessionEnd = new Date(props.session.event_end).toLocaleTimeString('en-US');
    return(
        <div className='session'>
            <span className='session__title'>{props.session.title}</span>
            <span className='session__time'>{sessionStart} - {sessionEnd}</span>
        </div>
    )
}

export default Session;
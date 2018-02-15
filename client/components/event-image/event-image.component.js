import React from 'react'
import './event-image.styles.css';

export const EventImage = (props) => {
    return(
        <div>
            <img src={props.imageUrl} className='event-image' />
        </div>
    )
}

export default EventImage;
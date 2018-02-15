import React from 'react';

export const VenueInfo = (props) => {
    return(
        <div>
            <h5>Location</h5>
            <p>{props.venue.name}</p>
            <p>{props.venue.address}</p>
            <p>{props.venue.city}, {props.venue.region} {props.venue.postalCode}</p>
        </div>
    )
}

export default VenueInfo;
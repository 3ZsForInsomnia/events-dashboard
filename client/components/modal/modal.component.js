import React from 'react';
import SelectedEvent from './../../containers/selected-event.container';

export const Modal = (props) => {
    return(
        <div>
            { (props.selectedEvent)
                ? <SelectedEvent />
                : ""
            }
        </div>
    )
}

export default Modal;
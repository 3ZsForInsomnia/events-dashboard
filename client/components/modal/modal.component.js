import React, { Component } from 'react';
import './modal.styles.css';
import SelectedEvent from './../../containers/selected-event.container';

export const Modal = (props) => {
    return(
        <div>
            { (props.selectedEvent)
                ? <div className='modal-is-open'>
                    <SelectedEvent />
                </div>
                : ""
            }
        </div>
    )
}

export default Modal;
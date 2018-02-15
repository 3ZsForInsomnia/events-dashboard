import { connect } from 'react-redux'
import SelectedEvent from './../components/selected-event/selected-event.component';
import { UnsetCurrentlySelectedEventAction } from './../state/event-dashboard/event-dashboard.actions';

const mapStateToProps = (state, ownProps) => {
    return {
        event: state.eventDashboard.selectedEvent
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deselectCurrentEvent: () => {
            dispatch(UnsetCurrentlySelectedEventAction());
        }
    }
}


const SelectedEventContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectedEvent);

export default SelectedEventContainer;

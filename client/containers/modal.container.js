import { connect} from 'react-redux';
import { UnsetCurrentlySelectedEventAction } from './../state/event-dashboard/event-dashboard.actions';
import Modal from './../components/modal/modal.component';

const mapStateToProps = state => {
    return {
        selectedEvent: state.eventDashboard.selectedEvent
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const ModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);

export default ModalContainer;
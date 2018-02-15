import { connect} from 'react-redux';
import * as actions from './../state/event-dashboard/event-dashboard.actions';
import { GetSpecificEventAction } from './../state/event-dashboard/event-dashboard.effects';
import Event from './../components/event/event.component';

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        selectAnEvent: eventId => {
            dispatch(GetSpecificEventAction(eventId));
        }
    }
}

const EventContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Event);

export default EventContainer;
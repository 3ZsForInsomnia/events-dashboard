import { connect} from 'react-redux';
import * as actions from './../state/event-dashboard/event-dashboard.actions';
import EventList from './../components/event-list/event-list.component';

const mapStateToProps = state => {
    return {
        eventList: state.eventDashboard.events
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const EventListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventList);

export default EventListContainer;
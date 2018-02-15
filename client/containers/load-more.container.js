import { connect } from 'react-redux'
import LoadMore from './../components/load-more/load-more.component';
import * as effects from './../state/event-dashboard/event-dashboard.effects';

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadMore: () => {
            dispatch(effects.GetEventsAction());
        }
    }
}

const LoadMoreContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoadMore);

export default LoadMoreContainer;
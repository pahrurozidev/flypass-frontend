import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import NotificationPage from '../components/users/notification/Notification';
import { actionType } from '../redux/reducer/globalActionType';

// style homepage
import '../styles/homepage.css'
import '../styles/profil.css'
import '../styles/dashboard.css'

class Notification extends Component {
    render() {
        return (
            <Fragment>
                <NotificationPage showSidebarDispatch={this.props.showSidebarDispatch} />
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        showSidebar: state.showSidebar
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showSidebarDispatch: () => dispatch({
            type: actionType.SHOW_SIDEBAR
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { actionType } from '../redux/reducer/globalActionType';
import Ticket from '../components/users/my-ticket/TicketBooking';

// style homepage
import '../styles/homepage.css'
import '../styles/profil.css'
import '../styles/dashboard.css'

class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <Ticket showSidebarDispatch={this.props.showSidebarDispatch}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
import React, { Component, Fragment } from 'react';
import Ticket from '../components/users/my-ticket/Ticket';
import { connect } from "react-redux";

// style dashboard
import '../styles/dashboard.css';
import '../styles/ticket.css';
import { actionType } from '../redux/reducer/globalActionType';

class MyTicketUser extends Component {
    render() {
        return (
            <Fragment>
                <Ticket showSidebarDispatch={this.props.showSidebarDispatch} />
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

export default connect(mapStateToProps, mapDispatchToProps)(MyTicketUser);

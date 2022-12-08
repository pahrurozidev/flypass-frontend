import React, { Component, Fragment } from 'react';
import Ticket from '../components/users/my-ticket/Ticket';

// style dashboard
import '../styles/dashboard.css';
import '../styles/ticket.css';

class MyTicketUser extends Component {
    render() {
        return (
            <Fragment>
                <Ticket />
            </Fragment>
        )
    }
}

export default MyTicketUser;

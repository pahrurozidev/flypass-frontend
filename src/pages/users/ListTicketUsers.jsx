import React, { Component, Fragment } from 'react';
import MyTicket from '../../components/users/my-tickets/TicketsList';

// style My Ticket - Dashboard Users
import '../../styles/MyTicket.css';

class ListTicketUsers extends Component {
    render() {
        return (
            <Fragment>
                <MyTicket />
            </Fragment>
        )
    }
}

export default ListTicketUsers;

import React, { Component, Fragment } from 'react';
import DetailTicket from '../../components/users/my-tickets/DetailTicket';

// style My Ticket - Dashboard Users
import '../../styles/MyTicket.css';

class DetailTicketUsers extends Component {
    render() {
        return (
            <Fragment>
                <DetailTicket />
            </Fragment>
        )
    }
}

export default DetailTicketUsers;

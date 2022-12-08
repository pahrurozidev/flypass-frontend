import React, { Component, Fragment } from 'react';
import Transaction from '../components/users/transaction/Transaction';

// style dashboard
import '../styles/dashboard.css';
import '../styles/transaction.css';

class TransactionUser extends Component {
    render() {
        return (
            <Fragment>
                <Transaction />
            </Fragment>
        )
    }
}

export default TransactionUser;

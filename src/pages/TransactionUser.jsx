import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Transaction from '../components/users/transaction/Transaction';
import { actionType } from '../redux/reducer/globalActionType';

// style dashboard
import '../styles/dashboard.css';
import '../styles/transaction.css';

class TransactionUser extends Component {
    render() {
        return (
            <Fragment>
                <Transaction showSidebarDispatch={() => this.props.showSidebarDispatch()} />
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

export default connect(mapStateToProps, mapDispatchToProps)(TransactionUser);

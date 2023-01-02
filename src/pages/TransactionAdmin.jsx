import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Transaction from '../components/admin/transaction/Transaction';
import { actionType } from '../redux/reducer/globalActionType';

// style dashboard
import '../styles/dashboard.css';
import '../styles/transaction.css';

class TransactionAdmin extends Component {
    render() {
        return (
            <Fragment>
                <Transaction />
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

export default connect(mapStateToProps, mapDispatchToProps)(TransactionAdmin);

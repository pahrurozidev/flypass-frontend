import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import DashboardPage from '../components/customer/DashboardPage';
import { actionType } from '../redux/reducer/globalActionType';

// style homepage
import '../styles/homepage.css'
import '../styles/login.css'
import '../styles/dashboard.css'

class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <DashboardPage />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        plusCounter: () => dispatch({
            type: actionType.PLUS_COUNTER,
        }),
        minCounter: () => dispatch({
            type: actionType.MIN_COUNTER,
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
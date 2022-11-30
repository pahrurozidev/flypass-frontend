import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Register from "../components/Register/Register";
import Navbar from "../components/navbar/Navbar";
import { actionType } from '../redux/reducer/globalActionType';

class RegisterPage extends Component {
    render() {
        return (
            <Fragment>
                {/* import components here */}
                <Navbar />
                <Register />
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
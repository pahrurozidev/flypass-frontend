import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Navbar from '../components/homepage/navbar/Navbar';
import ResetPasswordPage from '../components/login/ResetPasswordPage';
import Footer from '../components/homepage/footer/Footer';
import { actionType } from '../redux/reducer/globalActionType';

// style homepage
import '../styles/homepage.css'
import '../styles/login.css'

class ResetPassword extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <ResetPasswordPage />
                <Footer />

                {/* example using redux */}
                {/* <h4 className="text-primary fs-5">Tes Counter</h4>
                <div className="counter">
                    <button onClick={this.props.plusCounter}>+</button>
                    <h3>{this.props.counter}</h3>
                    <button onClick={this.props.minCounter}>-</button>
                </div> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { actionType } from '../redux/reducer/globalActionType';
import Wishlist from '../components/users/wishlist/Wishlist';

// style homepage
import '../styles/dashboard.css'
import '../styles/ticket.css';

class Wishlists extends Component {
    render() {
        return (
            <Fragment>
                <Wishlist />
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

export default connect(mapStateToProps, mapDispatchToProps)(Wishlists);
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import WishlistPage from '../components/customer/WishlistPage';
import { actionType } from '../redux/reducer/globalActionType';
import Ticket from '../components/users/my-ticket/TicketWish';

// style homepage
import '../styles/dashboard.css'
import '../styles/ticket.css';

class Wishlist extends Component {
    render() {
        return (
            <Fragment>
                <Ticket />
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

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
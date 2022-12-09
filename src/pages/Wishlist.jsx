import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import WishlistPage from '../components/customer/WishlistPage';
import { actionType } from '../redux/reducer/globalActionType';

// style homepage
import '../styles/homepage.css'
import '../styles/profil.css'
import '../styles/dashboard.css'

class Wishlist extends Component {
    render() {
        return (
            <Fragment>
                <WishlistPage />
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
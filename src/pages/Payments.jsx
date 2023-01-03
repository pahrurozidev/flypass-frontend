import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Payment from "../components/homepage/payment/Payment";
import { actionType } from "../redux/reducer/globalActionType";

class Payments extends Component {
    render() {
        return (
            <Fragment>
                <Payment />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notifCount: state.notifCount,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        notifCountDispatch: () => dispatch({
            type: actionType.NOTIF_COUNT,
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Payments);
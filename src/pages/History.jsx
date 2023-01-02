import React, { Component } from "react";
import { connect } from "react-redux";
import Transaction from "../components/users/transaction/Transaction";
import { actionType } from "../redux/reducer/globalActionType";

class History extends Component {
    render() {
        return (
            <Transaction showSidebarDispatch={this.props.showSidebarDispatch} />
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

export default connect(mapStateToProps, mapDispatchToProps)(History);

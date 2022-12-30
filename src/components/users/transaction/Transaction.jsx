import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from '../../admin/layouts/sidebar/sidebaruser'
import Navbar from '../layouts/navbar/Navbar'
import { actionType } from '../../../redux/reducer/globalActionType';
import TransactionList from './TransactionList';

class Transaction extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <div>
                    <Navbar showSidebarDispatch={this.props.showSidebarDispatch} />
                    <div className='main-container'>
                        <TransactionList />
                    </div>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);

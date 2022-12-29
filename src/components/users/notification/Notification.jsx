import React, { Component } from 'react'
import Sidebar from '../../admin/layouts/sidebar/sidebaruser'
import Navbar from '../layouts/navbar/Navbar'
import { connect } from "react-redux";
import NotificationItem from './NotificationItem'
import { actionType } from '../../../redux/reducer/globalActionType';

class Notification extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <div>
                    <Navbar showSidebarDispatch={this.props.showSidebarDispatch} />
                    <div className='main-container'>
                        <NotificationItem />
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

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
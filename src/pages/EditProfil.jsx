import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Navbar from '../components/admin/layouts/navbar/navbar';
import Sidebar from '../components/customer/dashboard/sidebar/Sidebar';
import EditProfilPage from '../components/customer/EditProfilPage';
import { actionType } from '../redux/reducer/globalActionType';

// style homepage
import '../styles/homepage.css'
import '../styles/profil.css'
import '../styles/dashboard.css'

class EditProfil extends Component {
    render() {
        return (
            <Fragment>
                <div className='d-flex'>
                    <Sidebar />
                        <div id='content-wrapper' className='d-flex flex-column'>
                            <div id="content">
                                <Navbar />
                                <EditProfilPage />
                            </div>
                        </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditProfil);
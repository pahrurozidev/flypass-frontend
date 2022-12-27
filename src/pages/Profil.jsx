import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Navbar from '../components/users/layouts/navbar/Navbar';
import Sidebar from '../components/users/layouts/sidebar/Sidebar';
import ProfilPage from '../components/customer/ProfilPage';
import { actionType } from '../redux/reducer/globalActionType';

// style homepage
import '../styles/homepage.css'
import '../styles/profil.css'
import '../styles/dashboard.css'

class Profil extends Component {
    render() {
        return (
            <Fragment>
                {/* <div className='d-flex'>
                    <Sidebar />
                    <div id='content-wrapper' className='d-flex flex-column'>
                        <div id="content">
                            <Navbar />
                            <ProfilPage />
                        </div>
                    </div>
                </div> */}
                <div>
                    <Sidebar />
                    <div>
                        <Navbar />
                        <div className="main-container">
                            <ProfilPage />
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

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
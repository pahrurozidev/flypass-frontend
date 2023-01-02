import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Navbar from '../components/users/layouts/navbar/Navbar';
import Sidebar from '../components/users/layouts/sidebar/Sidebar';
import EditProfilPage from '../components/users/profil/EditProfilPage';
import { actionType } from '../redux/reducer/globalActionType';

// style homepage
import '../styles/homepage.css'
import '../styles/profil.css'
import '../styles/dashboard.css'

class EditProfil extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <Sidebar />
                    <div>
                        <Navbar />
                        <div className="main-container">
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
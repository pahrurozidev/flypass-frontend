import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Menu } from "react-feather";
import Profile from '../../../../assets/dasboard-admin/profile.svg';
import { actionType } from '../../../../redux/reducer/globalActionType';


class navbaruser extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand topbar static-top card fixed-top border-end-0'>
                <ul className='navbar-nav profile-dropdown ms-auto'>
                    <li className='nav-item sidebar-toggle'>
                        <Menu
                            size={38}
                            onClick={this.props.showSidebarDispatch}
                            className="bg-light px-2 rounded-circle shadow border text-secondary" />
                    </li>
                    <li className="nav-item dropdown user-profile">
                        <a href="#" className='nav-link dropdown-toggle link-profile' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img className='img-profile rounded-circle' src={Profile} alt="" />
                            <span className='d-none d-lg-inline text-name'>Hi, Pahrurozi</span>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link to={'/'} className="dropdown-item">Beranda</Link>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Logout</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(navbaruser);
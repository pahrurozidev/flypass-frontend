import React from 'react';
import NavItem from './NavItem';
import Profile from '../../../assets/dasboard-admin/profile.svg';

export default function NavList() {
    return (
        <>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={Profile} alt="" className="flypass-logo" />
                </a>
                <button type="button" className="navbar-toggler">
                    <span className="navbar-toggler-icon" />
                </button>
            </div>
            <NavItem />
        </>
    );
}

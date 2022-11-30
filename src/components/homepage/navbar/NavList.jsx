import React from 'react';
import NavItem from './NavItem';
import FlyPass from '../../../assets/homepage/FlyPass.png';

export default function NavList() {
    return (
        <>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={FlyPass} alt="" className="flypass-logo" />
                </a>
                <button type="button" className="navbar-toggler">
                    <span className="navbar-toggler-icon" />
                </button>
            </div>
            <NavItem />
        </>
    );
}

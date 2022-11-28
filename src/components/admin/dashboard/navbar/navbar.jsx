import React from 'react'
import { Menu, Search } from "react-feather"
import Profile from '../../../../assets/dasboard-admin/profile.svg'

export default function navbar() {
    return (
        <nav className='navbar navbar-expand topbar static-top shadow'>
            <button id='sidebarToggleTop' className='btn btn-link d-md-none rounded-circle mr-3' ><Menu /></button>
            <form className='d-none d-sm-inline-block form-inline ml-md-3 my-2 my-md-0 mw-100 navbar-search'>
                <div className='search-form'>
                    <input type="text" className='input-search' placeholder='Search...' aria-label='Search' aria-describedby='basic-add-on2' />
                    <button className='btn btn-search p-0' type='button'><Search /></button>
                </div>
            </form>
            {/* <div className="dropdown navbar-nav ms-auto">
                <a href="#" className='nav-link'>
                    <img className='img-profile rounded-circle' src={Profile} alt="" />
                    <span className='d-none d-lg-inline text-name'>Hi, Admin</span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div> */}
            <ul className='navbar-nav ms-auto'>
                <li className="nav-item dropdown">
                    <a href="#" className='nav-link dropdown-toggle' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img className='img-profile rounded-circle' src={Profile} alt="" />
                        <span className='d-none d-lg-inline text-name'>Hi, Admin</span>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Customers</a></li>
                        <li><a className="dropdown-item" href="#">Tickets</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

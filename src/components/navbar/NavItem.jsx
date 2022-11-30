import React from 'react'

export default function NavItem() {
  return (
    <>
    <nav id='nav' className='d-flex flex-wrap justify-content-md-between py-3 mb-4 border-bottom'>
      <a id='logo'>logo</a>
      <ul className="navbar-nav" id='nav1'>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">My Booking</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Offers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Contact Us</a>
        </li>
      </ul>
      <img src="/user-circle.png" alt="" id='nav2' />
      <a href="/login" id='nav3'>Login / Register</a>
    </nav>
    </>
  )
}

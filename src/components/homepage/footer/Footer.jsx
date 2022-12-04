import React from 'react';
import Logo from '../../../assets/dasboard-admin/Logo.svg';

export default function Footer() {
    return (

        <footer>
            <div className="container footer">
                <div>
                    <img src={Logo} alt="" className="flypass-logo-small" />
                    <span href="">Copyright © 2022</span>
                    <span href="">All Rights Reserved</span>
                </div>
                <div>
                    <h6>Page Menus</h6>
                    <a href="">Home</a>
                    <a href="">About Us</a>
                    <a href="">Contact Us</a>
                    <a href="">My Account</a>
                </div>
                <div>
                    <h6>Our Product</h6>
                    <a href="">Booking Flight</a>
                    <a href="">Offer</a>
                </div>
                <div>
                    <h6>Social Media</h6>
                    <a href="">Instagram</a>
                    <a href="">Facebook</a>
                    <a href="">Twitter</a>
                </div>
                <div>
                    <div>
                        <img src={Logo} alt="" className="flypass-logo-large" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

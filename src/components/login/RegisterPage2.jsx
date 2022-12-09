import React from 'react';

export default function RegisterPage2() {
    return (
        <section className="container personal-container">
            <div className='personal_header'>
                <h1>Personal Information</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <form action="">
                <ul className='personal-left'>
                    <li>
                        <label htmlFor="f_name">First Name</label>
                        <input type="text" />
                    </li>
                    <li>
                        <label htmlFor="f_name">Birthday</label>
                        <input type="text" />
                    </li>
                    <li>
                        <label htmlFor="f_name">Email</label>
                        <input type="text" />
                    </li>
                    <li>
                        <label htmlFor="f_name">City</label>
                        <input type="text" />
                    </li>
                    <li>
                        <label htmlFor="f_name">Pos Code</label>
                        <input type="text" />
                    </li>
                </ul>
                <ul className='personal-right'>
                    <li>
                        <label htmlFor="f_name">Last Name</label>
                        <input type="text" />
                    </li>
                    <li>
                        <label htmlFor="f_name">Phone</label>
                        <input type="text" />
                    </li>
                    <li>
                        <label htmlFor="f_name">Gender</label>
                        <input type="text" />
                    </li>
                    <li>
                        <label htmlFor="f_name">Address</label>
                        <input type="text" />
                    </li>
                    <li>
                        <label htmlFor="f_name">Country</label>
                        <input type="text" />
                    </li>
                </ul>
                <ul className='personal-bottom'>
                    <li>
                        <input type="button" value='Save' />
                    </li>
                </ul>
            </form>
        </section>
    );
}
import React from 'react';
import Fligh from '../../assets/homepage/flight.webp';

export default function LoginPage() {

    return (
        <section className="container login-container">
            <section>
                <div>
                    <div className='login-header'>
                        <h1>Login</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <form action="">
                        <ul>
                            <li>
                                <label htmlFor="email">Email</label>
                                <input type="email" />
                            </li>
                            <li>
                                <label htmlFor="password">Password</label>
                                <input type="password" />
                            </li>
                            <li>
                                <input type="button" value='Login' />
                            </li>
                        </ul>
                    </form>
                </div>
                <img src={Fligh} alt="" />
            </section>
        </section>
    );
}

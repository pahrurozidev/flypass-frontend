import React from 'react';
import { Link } from 'react-router-dom';
import Fligh from '../../assets/homepage/flight.webp';

export default function LoginPage() {

    return (
        <section className="container login-container">
            <section>
                <div className='login-form'>
                    <div className='login-header'>
                        <h1>Login</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <form action="">
                        <ul className='p-0'>
                            <li>
                                <label htmlFor="email">Email</label>
                                <input type="email" />
                            </li>
                            <li>
                                <label htmlFor="password">Password</label>
                                <input type="password" />
                            </li>
                            <li>
                                <input type="button" value='Login' className='shadow' />
                                <div className="pt-3 text-center">
                                    Not already have account?
                                    <Link to={'/register'}>
                                        <span> Register</span>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
                <img src={Fligh} alt="" />
            </section>
        </section>
    );
}

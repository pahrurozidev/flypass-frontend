import React from 'react';
import { Link, redirect } from 'react-router-dom';
import Fligh from '../../assets/homepage/flight.webp';

export default function RegisterPage() {

    const redirectToPersonalInfo = () => {
        alert('redirect to personal information')
        return redirect("/register2")
    }

    return (
        <section className="container login-container">
            <section>
                <div className='register-form'>
                    <div className='login-header'>
                        <h1>Sign Up</h1>
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
                                <label htmlFor="confirmasi_password">Confirmation</label>
                                <input type="password" />
                            </li>
                            <li>
                                <Link to={'/register/personal'}>
                                    <input type="button" value='Continue' className='shadow' />
                                </Link>
                                <div className="pt-3 text-center">
                                    Already have account?
                                    <Link to={'/login'}>
                                        <span> Login</span>
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
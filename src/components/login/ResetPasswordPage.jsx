import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Fligh from '../../assets/homepage/flight.webp';
import axios from 'axios';
import { useHistory } from 'react-router-use-history'

export default function ResetPasswordPage() {

    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.post(`${import.meta.env.VITE_BASE_URL}/v1/resetpassword`, {
                email: email,
            });
            alert("Email kamu sudah terdaftar, silahkan check inbox!!");
            console.log(data);
            history.push('/resetpasswordconfirm');
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data);
            }
        }
    }

    return (
        <section className="container login-container">
            <section>
                <div className='login-form'>
                    <div className='login-header'>
                        <h1>Reset Password</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <form onSubmit={Auth}>
                        <ul className='p-0'>
                            <li>
                                <label htmlFor="email">Email</label>
                                <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </li>
                            <li>
                                <input type="submit" name='submit' value='Next' className='shadow text-white mt-4' style={{ backgroundColor: "blue" }} />
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

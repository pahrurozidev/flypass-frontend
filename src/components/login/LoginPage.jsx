import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Fligh from '../../assets/homepage/flight.webp';
import axios from 'axios';
import { useHistory } from 'react-router-use-history'
import swal from 'sweetalert';

export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.post(`${import.meta.env.VITE_BASE_URL}/v1/login`, {
                email: email,
                password: password,
            });

            localStorage.setItem("token", data.data.user.accesstToken)
            localStorage.setItem("id", data.data.user.id)
            history.push('/');
            // window.location.reload();

            swal({
                title: "Login Success",
                text: "",
                icon: "success",
                button: "Ok!",
            });
        } catch (error) {
            if (error.response.status == 401) {
                swal({
                    title: "Account Not Found!",
                    text: "",
                    icon: "warning",
                    button: "Ok!",
                });
            }
            if (error.response) {
                setMsg(error.response);
            }
        }
    }

    return (
        <section className="container login-container mt-5">
            <section>
                <div className='login-form'>
                    <div className='login-header'>
                        <h1>Sign In</h1>
                        {/* <p>Selamat Datang, Please login this here!</p> */}
                    </div>
                    <form onSubmit={Auth}>
                        <ul className='p-0'>
                            <li>
                                <label htmlFor="email">Email</label>
                                <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </li>
                            <li>
                                <label htmlFor="password">Password</label>
                                <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                <Link to={'/resetpassword'}>
                                    <span style={{ textDecoration: "none" }}>Forgot Password?</span>
                                </Link>
                            </li>
                            <li>
                                <input type="submit" name='submit' value='Login' className='shadow text-white mt-4' style={{ backgroundColor: "blue" }} />
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

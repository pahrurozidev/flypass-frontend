import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Fligh from '../../assets/homepage/flight.webp';
import axios from 'axios';
import { useHistory } from 'react-router-use-history'

export default function ResetPasswordConfirmPage() {

    const [token, setToken] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.post(`${import.meta.env.VITE_BASE_URL}/v1/resetpassword/confirm`, {
                token: token,
                newPassword: newPassword,
            });
            alert("Password kamu berhasil di reset silahkan login!!");
            console.log(data);
            history.push('/login');
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
                        <h1>Reset Password Confirm</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <form onSubmit={Auth}>
                        <ul className='p-0'>
                            <li>
                                <label htmlFor="token">Token</label>
                                <input type="text" name='token' value={token} onChange={(e) => setToken(e.target.value)} />
                            </li>
                            <li>
                                <label htmlFor="newPassword">New Password</label>
                                <input type="password" name='newPassword' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                            </li>
                            <li>
                                <input type="submit" name='submit' value='Reset Password' className='shadow text-white mt-4' style={{ backgroundColor: "blue" }} />
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

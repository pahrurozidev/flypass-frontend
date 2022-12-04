import React from 'react';
import Fligh from '../../assets/homepage/flight.webp';

export default function LoginPage() {
    return (
        <section className="container login">
            <div className="login-detail">
                <form action="">
                    <h3>Login</h3>
                    <p className='mb-3'>Email</p>
                    <input type="text" />
                    <p className='mb-3'>Password</p>
                    <input type="text" /><br />
                    <a href="" className='forget_pass'>Forget Password?</a>
                    <button type="button" className="btn btn-primary">Login</button>
                </form>
                <div className="rref">
                    <p className="p1">Don't Have Any Account?</p>
                    <a href="/register" style={{textDecoration:"none"}}>Register Now</a>
                </div>
            </div>
            <img src={Fligh} alt="" className="fligh" />
        </section>
    );
}

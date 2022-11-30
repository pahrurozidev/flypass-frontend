import React from 'react';
import Fligh from '../../assets/homepage/flight.webp';

export default function LoginPage() {
    return (
        <section className="container login">
            <div className="login-detail">
                <form action="">
                    <h3>Login</h3>
                    <p>Email</p>
                    <input type="text" />
                    <p>Password</p>
                    <input type="text" />
                    <a href="">Forget Password?</a>
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

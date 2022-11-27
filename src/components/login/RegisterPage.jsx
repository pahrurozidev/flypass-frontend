import React from 'react';
import Fligh from '../../assets/homepage/flight.webp';

export default function RegisterPage() {
    return (
        <section className="container login">
            <div className="login-detail2">
                <form action="">
                    <h3>Register</h3>
                    <div className='name'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label htmlFor="" className='mb-2'>First Name</label>
                            </div>
                            <div className='col-md-6'>
                                <input type="text" className='mb-3'/>
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor="" className='mb-2'>Last Name</label>
                            </div>
                            <div className='col-md-6'>
                                <input type="text" className='mb-3' />
                            </div>
                        </div>
                    </div>
                    <div className='name'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label htmlFor="" className='mb-2'>Email</label>
                            </div>
                            <div className='col-md-6'>
                                <input type="text" className='mb-3' />
                            </div>
                        </div>
                    </div>
                    <div className='name'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label htmlFor="" className='mb-2'>Password</label>
                            </div>
                            <div className='col-md-6'>
                                <input type="text" className='mb-3' />
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor="" className='mb-2'>Password Confirm</label>
                            </div>
                            <div className='col-md-6'>
                                <input type="text" className='mb-3' />
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary">Create Your Account</button>
                </form>
            </div>
            <img src={Fligh} alt="" className="fligh" />
        </section>
    );
}

import React from 'react';
import Fligh from '../../assets/homepage/flight.webp';

export default function RegisterPage2() {
    return (
        <section className="container login">
            <div className="login-detail2">
                <form action="">
                    <div className='name'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label htmlFor="" className='mb-3'>Pos Code</label>
                            </div>
                            <div className='col-md-6'>
                                <input type="text" className='mb-3'/>
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor="" className='mb-3'>City</label>
                            </div>
                            <div className='poto col-md-6'>
                                <input type="text" className='mb-3' />
                            </div>
                        </div>
                    </div>
                    <div className='name'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label htmlFor="" className='mb-3'>Address</label>
                            </div>
                            <div className='col-md-6'>
                                <input type="text" className='mb-3' />
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor="" className='mb-3'>Gender</label>
                            </div>
                            <div className='col-md-6'>
                                <input type="text" className='mb-3' />
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor="" className='mb-3'>Birthday</label>
                            </div>
                            <div className='col-md-6'>
                                <input type="date" className='mb-3' />
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor="" className='mb-3'>Password</label>
                            </div>
                            <div className='col-md-6'>
                                <input type="text" className='mb-3' />
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor="" className='mb-3'>Password Confirm</label>
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
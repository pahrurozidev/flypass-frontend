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
                                <label htmlFor="" className='mb-3'>First Name</label>
                            </div>
                            <div className='col-md-6'>
                                <input type="text" className='mb-3' />
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor="" className='mb-3'>Last Name</label>
                            </div>
                            <div className='col-md-6'>
                                <input type="text" className='mb-3' />
                            </div>
                        </div>
                    </div>
                    <div className='name'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label htmlFor="" className='mb-3'>Email</label>
                            </div>
                            <div className='col-md-6'>
                                <input type="text" className='mb-3' />
                            </div>
                        </div>
                    </div>
                    <div className='name'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label htmlFor="" className='mb-3'>No Hp</label>
                            </div>
                            <div className='col-md-6'>
                                <input type="text" className='mb-3' />
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor="" className='mb-3'>Photo</label>
                            </div>
                            <div className='col-md-6'>
                                <input type="file" className='mb-3 bg-white' />
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor="" className='mb-3'>Country</label>
                            </div>
                            <div className='col-md-6'>
                                <input type="text" className='mb-3' />
                            </div>
                        </div>
                    </div>
                    <a href="/register2"><button type="button" className="btn btn-primary">Next</button></a>
                </form>
            </div>
            <img src={Fligh} alt="" className="fligh" />
        </section>
    );
}
import React from 'react'
import { Link } from 'react-router-dom';
import { ArrowCircleLeft2, SaveAdd } from 'iconsax-react';
import { Save } from 'react-feather';

export default function CreateFlight() {
    return (
        <div className='container-fluid pb-5'>

            <div className='admin-content px-lg-2'>
                {/* header label */}
                <div className='border rounded p-4 pt-3 pb-3 pb-md-1'>
                    <h2 className='fs-4'>Update Flight</h2>
                    <p className='header-text fw-light col-12 col-lg-9'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias est vel explicabo. Nostrum alias explicabo aliquam veritatis sunt quasi hic repellendus ut error, non temporibus iste est quod facilis. Unde.</p>
                </div>

                {/* broadcrumb */}
                <div className="border rounded py-2 px-3 d-flex justify-content-between mt-3 admin-flight-broadcrumb">
                    <Link to={'/flight'} className="text-decoration-none text-dark d-flex btn gap-2 ps-0">
                        <ArrowCircleLeft2 size={20} />
                        <div className='label'>Flight lists / update flight</div>
                    </Link>
                </div>

                {/* add flight */}
                <div className='card mt-3 p-3 pt-0 pb-3 admin-add-flight'>
                    <form className="d-md-flex gap-md-5">
                        <div className='col'>
                            <div class="mb-0">
                                <label for="exampleFormControlInput1" class="form-label">Departure</label>
                                <select class="form-select form-select-lg" aria-label=".form-select-lg example">
                                    <option selected>Departure</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="mb-0">
                                <label for="exampleFormControlInput1" class="form-label">Departure Date</label>
                                <input type="date" class="form-control mt-0" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="mb-0">
                                <label for="exampleFormControlInput1" class="form-label">Departure Time</label>
                                <input type="text" class="form-control mt-0" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="mb-0">
                                <label for="exampleFormControlInput1" class="form-label">Flight Type</label>
                                <select class="form-select form-select-lg" aria-label=".form-select-lg example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="mb-0">
                                <label for="exampleFormControlInput1" class="form-label">Airplane</label>
                                <select class="form-select form-select-lg" aria-label=".form-select-lg example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="mb-0">
                                <label for="exampleFormControlInput1" class="form-label">Capacity</label>
                                <input type="text" class="form-control mt-0" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                        </div>
                        <div className='col'>
                            <div class="mb-0">
                                <label for="exampleFormControlInput1" class="form-label">Arrival</label>
                                <select class="form-select form-select-lg" aria-label=".form-select-lg example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="mb-0">
                                <label for="exampleFormControlInput1" class="form-label">Arrival Date</label>
                                <input type="date" class="form-control mt-0" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="mb-0">
                                <label for="exampleFormControlInput1" class="form-label">Arrival Time</label>
                                <input type="text" class="form-control mt-0" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="mb-0">
                                <label for="exampleFormControlInput1" class="form-label">Airline</label>
                                <select class="form-select form-select-lg" aria-label=".form-select-lg example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="mb-0">
                                <label for="exampleFormControlInput1" class="form-label">Price</label>
                                <input type="number" class="form-control mt-0" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>

                            <div className='mb-0 d-md-flex justify-content-end mt-4 mt-md-5'>
                                <div className='btn btn-primary crud-flight-btn d-flex gap-1 justify-content-center shadow'>
                                    <Save size={20} />
                                    <span>Save</span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

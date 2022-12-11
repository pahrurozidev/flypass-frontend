import React from 'react'
import { ArrowCircleLeft2, AddSquare } from 'iconsax-react';
import { Link } from 'react-router-dom';
import Garuda from '../../../assets/dasboard-admin/garuda.svg';
import { AlertCircle, PlusSquare } from 'react-feather';

export default function FlightList() {
    return (
        <div className='container-fluid'>

            <div className='admin-content px-lg-2 pb-5'>

                {/* header label */}
                <div className='border rounded p-4 pt-3 pb-3 pb-md-1'>
                    <h2 className='fs-4'>Flight</h2>
                    <p className='header-text fw-light col-12 col-lg-9'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias est vel explicabo. Nostrum alias explicabo aliquam veritatis sunt quasi hic repellendus ut error, non temporibus iste est quod facilis. Unde.</p>
                </div>

                {/* broadcrumb */}
                <div className="border rounded py-2 px-3 d-flex justify-content-between mt-3 admin-flight-broadcrumb">
                    <Link to={'/flight'} className="text-decoration-none text-dark d-flex btn gap-2 ps-0">
                        <ArrowCircleLeft2 size={20} />
                        <div className='label'>Flight lists</div>
                    </Link>

                    <Link to={'/flight/create'}>
                        <div className='btn btn-primary shadow cursor-pointer'>
                            <PlusSquare size={20} />
                        </div>
                    </Link>
                </div>

                {/* flight list */}
                <div className="mt-3 border p-2 p-lg-3 rounded d-flex flex-column gap-2 gap-lg-3">
                    {/* flight item */}
                    <div className='flgiht flight-list card rounded'>
                        {/* duration */}
                        <div className='flight-item'>
                            <div className='d-flex flex-column gap-1'>
                                <p className='time'>17:30</p>
                                <span className='tag'>YIA</span>
                            </div>
                            <div className='d-flex flex-column departure gap-1'>
                                <span>1h 0m</span>
                                <span className='ring'></span>
                                <span>Direct</span>
                            </div>
                            <div className='d-flex flex-column gap-1'>
                                <p className='time text-end'>18:30</p>
                                <span className='tag'>CGK</span>
                            </div>
                        </div>
                        {/* airplane */}
                        <div className='flight-item mt-2'>
                            <div><img src={Garuda} alt="" /></div>
                            <p>Garuda Indonesia</p>
                        </div>
                        {/* price */}
                        <div className='flight-item d-flex flex-column gap-3 mt-4'>
                            <h5>Economy</h5>
                            <p>Rp. 475.00<span className='fs-6'>/pax</span></p>
                        </div>
                        {/* detail */}
                        <div className='flight-item mt-2'>
                            <Link to={'/flight/1'} className="d-flex gap-1 items-center btn shadow">
                                <AlertCircle size={20} />
                                <div>Detail</div>
                            </Link>
                        </div>
                    </div>
                    {/* flight item */}
                    <div className='flgiht flight-list card rounded'>
                        {/* duration */}
                        <div className='flight-item'>
                            <div className='d-flex flex-column gap-1'>
                                <p className='time'>17:30</p>
                                <span className='tag'>YIA</span>
                            </div>
                            <div className='d-flex flex-column departure gap-1'>
                                <span>1h 0m</span>
                                <span className='ring'></span>
                                <span>Direct</span>
                            </div>
                            <div className='d-flex flex-column gap-1'>
                                <p className='time text-end'>18:30</p>
                                <span className='tag'>CGK</span>
                            </div>
                        </div>
                        {/* airplane */}
                        <div className='flight-item mt-2'>
                            <div><img src={Garuda} alt="" /></div>
                            <p>Garuda Indonesia</p>
                        </div>
                        {/* price */}
                        <div className='flight-item d-flex flex-column gap-3 mt-4'>
                            <h5>Economy</h5>
                            <p>Rp. 475.00<span className='fs-6'>/pax</span></p>
                        </div>
                        {/* detail */}
                        <div className='flight-item mt-2'>
                            <Link to={'/flight/1'} className="d-flex gap-1 items-center btn shadow">
                                <AlertCircle size={20} />
                                <div>Detail</div>
                            </Link>
                        </div>
                    </div>
                    {/* flight item */}
                    <div className='flgiht flight-list card rounded'>
                        {/* duration */}
                        <div className='flight-item'>
                            <div className='d-flex flex-column gap-1'>
                                <p className='time'>17:30</p>
                                <span className='tag'>YIA</span>
                            </div>
                            <div className='d-flex flex-column departure gap-1'>
                                <span>1h 0m</span>
                                <span className='ring'></span>
                                <span>Direct</span>
                            </div>
                            <div className='d-flex flex-column gap-1'>
                                <p className='time text-end'>18:30</p>
                                <span className='tag'>CGK</span>
                            </div>
                        </div>
                        {/* airplane */}
                        <div className='flight-item mt-2'>
                            <div><img src={Garuda} alt="" /></div>
                            <p>Garuda Indonesia</p>
                        </div>
                        {/* price */}
                        <div className='flight-item d-flex flex-column gap-3 mt-4'>
                            <h5>Economy</h5>
                            <p>Rp. 475.00<span className='fs-6'>/pax</span></p>
                        </div>
                        {/* detail */}
                        <div className='flight-item mt-2'>
                            <Link to={'/flight/1'} className="d-flex gap-1 items-center btn shadow">
                                <AlertCircle size={20} />
                                <div>Detail</div>
                            </Link>
                        </div>
                    </div>
                    {/* flight item */}
                    <div className='flgiht flight-list card rounded'>
                        {/* duration */}
                        <div className='flight-item'>
                            <div className='d-flex flex-column gap-1'>
                                <p className='time'>17:30</p>
                                <span className='tag'>YIA</span>
                            </div>
                            <div className='d-flex flex-column departure gap-1'>
                                <span>1h 0m</span>
                                <span className='ring'></span>
                                <span>Direct</span>
                            </div>
                            <div className='d-flex flex-column gap-1'>
                                <p className='time text-end'>18:30</p>
                                <span className='tag'>CGK</span>
                            </div>
                        </div>
                        {/* airplane */}
                        <div className='flight-item mt-2'>
                            <div><img src={Garuda} alt="" /></div>
                            <p>Garuda Indonesia</p>
                        </div>
                        {/* price */}
                        <div className='flight-item d-flex flex-column gap-3 mt-4'>
                            <h5>Economy</h5>
                            <p>Rp. 475.00<span className='fs-6'>/pax</span></p>
                        </div>
                        {/* detail */}
                        <div className='flight-item mt-2'>
                            <Link to={'/flight/1'} className="d-flex gap-1 items-center btn shadow">
                                <AlertCircle size={20} />
                                <div>Detail</div>
                            </Link>
                        </div>
                    </div>
                </div>





            </div>
        </div>
    )
}

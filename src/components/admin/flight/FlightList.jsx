import React from 'react'
import { Airplane, ArrowCircleLeft2, Warning2, AddSquare } from 'iconsax-react';
import { Link } from 'react-router-dom';
import Garuda from '../../../assets/dasboard-admin/garuda.svg';

export default function FlightList() {
    return (
        <div className='container-fluid mt-5 pb-5'>
            <div className='container all-booking p-0 ms-0 flight-header'>
                <div className='d-flex'>
                    <Airplane size={35} style={{
                        marginRight: '10px',
                        transform: 'rotate(45deg)'
                    }} />
                    <h2 className=''>Flight</h2>
                </div>
            </div>
            <div className="container all-booking p-0 ms-0 mt-4 broadcrumb">
                <div className='flight-list'>
                    <Link to={'/flight'} className="text-decoration-none fs-6 text-dark d-flex gap-2">
                        <ArrowCircleLeft2 size={30} />
                        <div className='pt-1'>Flight Lists</div>
                    </Link>
                </div>
                <Link to={'/flight/create'}>
                    <div className='add-flight fs-6 d-flex gap-2'>
                        <AddSquare/>
                        <div>Add Flight</div>
                    </div>
                </Link>
            </div>
            <div className="container all-booking p-0 ms-0 mt-5">
                <div className='flgiht flight-list card'>
                    <div className='flight-item'>
                        <div className='d-flex flex-column'>
                            <p className='time'>17:30</p>
                            <span className='tag'>YIA</span>
                        </div>
                        <div className='d-flex flex-column departure'>
                            <span>1h 0m</span>
                            <span className='ring'></span>
                            <span>Direct</span>
                        </div>
                        <div className='d-flex flex-column'>
                            <p className='time text-end'>18:30</p>
                            <span className='tag'>CGK</span>
                        </div>
                    </div>
                    <div className='flight-item'>
                        <div><img src={Garuda} alt="" /></div>
                        <p>Garuda Indonesia</p>
                    </div>
                    <div className='flight-item'>
                        <h5>Economy</h5>
                        <p>Rp. 475.00<span>/pax</span></p>
                    </div>
                    <div className='flight-item'>
                        <Link to={'/flight/1'} className="d-flex gap-1">
                            <Warning2 size={20}/>
                            <div>Detail</div>
                        </Link>
                    </div>
                </div>
                <div className='flgiht flight-list card'>
                    <div className='flight-item'>
                        <div className='d-flex flex-column'>
                            <p className='time'>17:30</p>
                            <span className='tag'>YIA</span>
                        </div>
                        <div className='d-flex flex-column departure'>
                            <span>1h 0m</span>
                            <span className='ring'></span>
                            <span>Direct</span>
                        </div>
                        <div className='d-flex flex-column'>
                            <p className='time text-end'>18:30</p>
                            <span className='tag'>CGK</span>
                        </div>
                    </div>
                    <div className='flight-item'>
                        <div><img src={Garuda} alt="" /></div>
                        <p>Garuda Indonesia</p>
                    </div>
                    <div className='flight-item'>
                        <h5>Economy</h5>
                        <p>Rp. 475.00<span>/pax</span></p>
                    </div>
                    <div className='flight-item'>
                        <Link to={'/flight/1'} className="d-flex gap-1">
                            <Warning2 size={20}/>
                            <div>Detail</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

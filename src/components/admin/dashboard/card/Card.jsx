import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ListBooking from '../listBooking/ListBooking';
import BookingDetail from '../../customers/CustomerDetail';

export default function Card() {
    const location = useLocation().pathname;
    const { id } = useParams();

    return (
        <>
            {/* header label */}
            <div className='border rounded p-3 pb-md-1'>
                <h2 className='fs-4'>Selamat Datang, Admin</h2>
                <p className='header-text fw-light col-12 col-lg-9'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias est vel explicabo. Nostrum alias explicabo aliquam veritatis sunt quasi hic repellendus ut error, non temporibus iste est quod facilis. Unde.</p>
            </div>

            <div className="card p-3 mt-3">
                {(location === `/dashboard/detail/${id}`) && <BookingDetail />}
                {(location === '/dashboard') && <ListBooking />}
            </div>
        </>
    )
}
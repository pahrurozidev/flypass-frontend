import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Sidebar from '../layouts/sidebar/Sidebar'
import Navbar from '../layouts/navbar/navbar'
import ListBooking from './listBooking/ListBooking'
import BookingDetail from './listBooking/BookingDetail'

function dashboard() {
    const location = useLocation().pathname;
    const { id } = useParams();

    return (
        <div>
            <Sidebar />
            <div>
                <Navbar />
                <div className='main-container'>
                    <div className='container-fluid pb-5'>
                        <div className='admin-content px-lg-2'>
                            {(location === `/dashboard/detail/${id}`) && <BookingDetail />}
                            {(location === '/dashboard') && <ListBooking />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default dashboard;
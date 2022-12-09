import React from 'react'
import { useLocation } from 'react-router-dom';
import FlightDetail from './FlightDetail';
import PaymentList from './PaymentList';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

import '../../../styles/payment.css';
import BookingBar from './BookingBar';

export default function Payment() {

    const location = useLocation().pathname;

    return (
        <React.Fragment>
            <Navbar />

            <main className='container'>
                <BookingBar />
                {(location === '/search/flight/detail') && <FlightDetail />}
                {(location === '/search/flight/payment') && <PaymentList />}
            </main>

            <Footer />
        </React.Fragment>
    )
}

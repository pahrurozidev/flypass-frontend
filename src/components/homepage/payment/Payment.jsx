import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import FlightDetail from './FlightDetail';
import PaymentList from './PaymentList';
import PaymentCompleted from './PaymentCompleted';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

import '../../../styles/payment.css';
import BookingBar from './BookingBar';

export default function Payment() {

    const location = useLocation().pathname;
    const { id } = useParams();

    const [book, setBook] = useState({});

    return (
        <React.Fragment>
            <Navbar />

            <main className='container payment-container'>
                <BookingBar />
                {(location === `/search/flight/${id}`) && <FlightDetail
                    bookings={(booking) => setBook(booking)} />}
                {(location === `/search/flight/payment/${id}`) && <PaymentList book={book} />}
                {(location === '/search/flight/payment/completed') && <PaymentCompleted />}
            </main>

            <Footer />
        </React.Fragment>
    )
}

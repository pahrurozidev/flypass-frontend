import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import FlightDetail from './FlightDetail';
import PaymentList from './PaymentList';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

import '../../../styles/payment.css';
import BookingBar from './BookingBar';

export default function Payment() {

    const location = useLocation().pathname;
    const { id } = useParams();

    return (
        <React.Fragment>
            <Navbar />

            <main className='container'>
                <BookingBar />
                {(location === `/search/flight/${id}`) && <FlightDetail />}
                {(location === '/search/flight/payment') && <PaymentList />}
            </main>

            <Footer />
        </React.Fragment>
    )
}

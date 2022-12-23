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

    const [totalPrice, setTotalPrice] = useState(0);

    return (
        <React.Fragment>
            <Navbar />

            <main className='container'>
                <BookingBar />
                {(location === `/search/flight/${id}`) && <FlightDetail priceTotal={(price) => setTotalPrice(price)} />}
                {(location === `/search/flight/payment/${id}`) && <PaymentList price={totalPrice} />}
                {(location === '/search/flight/payment/completed') && <PaymentCompleted />}
            </main>

            <Footer />
        </React.Fragment>
    )
}

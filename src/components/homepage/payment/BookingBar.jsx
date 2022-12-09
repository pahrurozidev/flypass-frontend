import React from 'react'
import { useLocation } from 'react-router-dom';
import Plane90PSecondary from '../../../assets/homepage/plane90.svg';
import Plane90Primary from '../../../assets/homepage/plane90.png';

export default function BookingBar() {

    const location = useLocation().pathname;

    return (
        <div className="card order_status-header p-3 col-lg-8 m-auto">
            <div class="order_status">

                <div class="status_label">
                    <div className={`number ${(location === '/search/flight/detail') ? 'bg-primary' : 'bg-secondary'}`}>1</div>
                    <div className={`${(location === '/search/flight/detail') ? 'text-primary' : 'text-secondary'}`}>Booking</div>
                </div>
                <div><img src={(location === '/search/flight/detail') ? Plane90Primary : Plane90PSecondary} alt="" /></div>

                <div class="status_label">
                    <div className={`number ${(location === '/search/flight/payment') ? 'bg-primary' : 'bg-secondary'}`}>2</div>
                    <div className={`${(location === '/search/flight/payment') ? 'text-primary' : 'text-secondary'}`}>Payment</div>
                </div>
                <div><img src={(location === '/search/flight/payment') ? Plane90Primary : Plane90PSecondary} alt="" /></div>

                <div class="status_label">
                    <div class="number bg-secondary">3</div>
                    <div>Complete</div>
                </div>
            </div>
        </div>
    )
}

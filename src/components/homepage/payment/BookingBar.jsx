import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Plane90PSecondary from '../../../assets/homepage/plane90.svg';
import Plane90Primary from '../../../assets/homepage/plane90.png';

export default function BookingBar() {

    const location = useLocation().pathname;
    const { id } = useParams();

    return (
        <div className="card order_status-header p-3 col-lg-8 m-auto">
            <div className="order_status">

                {/* 1 */}
                <div className="status_label">
                    <div className={`number ${(location === `/search/flight/${id}`) ? 'bg-primary' : 'bg-secondary'}`}>1</div>
                    <div className={`${(location === `/search/flight/${id}`) ? 'text-primary' : 'text-secondary'}`}>Booking</div>
                </div>
                <div><img src={(location === `/search/flight/${id}`) ? Plane90Primary : Plane90PSecondary} alt="" /></div>

                {/* 2 */}
                <div className="status_label">
                    <div className={`number ${(location === `/search/flight/payment/${id}`) ? 'bg-primary' : 'bg-secondary'}`}>2</div>
                    <div className={`${(location === `/search/flight/payment/${id}`) ? 'text-primary' : 'text-secondary'}`}>Payment</div>
                </div>
                <div><img src={(location === '/search/flight/payment') ? Plane90Primary : Plane90PSecondary} alt="" /></div>

                {/* 3 */}
                <div className="status_label">
                    <div className={`number ${(location === '/search/flight/payment/completed') ? 'bg-primary' : 'bg-secondary'}`}>3</div>
                    <div className={`${(location === '/search/flight/payment/completed') ? 'text-primary' : 'text-secondary'}`}>Completed</div>
                </div>
            </div>
        </div>
    )
}

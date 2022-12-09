import React from 'react';
import Weather from '../../../assets/homepage/weather.png';
import Place from '../../../assets/homepage/place.png';
import Flight from '../../../assets/homepage/flight.png';
import EasyClick from '../../../assets/homepage/easy-click.png';


export default function ServiceItem() {
    return (
        <>
            <div className="main-service">
                <div>
                    <h5>Our Service</h5>
                    <h1 className='d-flex flex-column gap-1 mt-2'>
                        <span>We Offer</span>
                        <span>Best Service</span>
                    </h1>
                </div>
            </div>
            <div className="d-flex service-item">
                <div>
                    <img src={Weather} alt="" />
                </div>
                <div>
                    <h3>Calculated Weather</h3>
                    <p>A new way to travel by air the easy and fast way.</p>
                </div>
            </div>
            <div className="d-flex service-item">
                <div>
                    <img src={Place} alt="" />
                </div>
                <div>
                    <h3>Best Place to Stay</h3>
                    <p>A new way to travel by air the easy and fast way.</p>
                </div>
            </div>
            <div className="d-flex service-item">
                <div>
                    <img src={Flight} alt="" />
                </div>
                <div>
                    <h3>Best Experience Flight</h3>
                    <p>A new way to travel by air the easy and fast way.</p>
                </div>
            </div>
            <div className="d-flex service-item">
                <div>
                    <img src={EasyClick} alt="" />
                </div>
                <div>
                    <h3>Easy-To-Use</h3>
                    <p>A new way to travel by air the easy and fast way.</p>
                </div>
            </div>
        </>
    );
}

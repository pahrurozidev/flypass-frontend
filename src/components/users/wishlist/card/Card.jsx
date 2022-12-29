import React from 'react'
import ListBooking from '../listBooking/ListBooking'

export default function Card() {
    return (
        <div className='container-fluid'>
            <h1 className='title-dashboard'>Dashboard</h1>
            <div className="card welcome-card">
                <div className="card-body">
                    <h4 className='card-title'>Selamat Datang, Jhon</h4>
                    <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et doloremagna
                        aliqua. ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
            <div className="container all-booking p-0 ms-0">
                <ListBooking />
            </div>
        </div>
    )
}
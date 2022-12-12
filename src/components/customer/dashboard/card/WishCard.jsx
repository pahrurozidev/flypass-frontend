import React from 'react'
import ListBooking from '../listBooking/WishlistTicket'

export default function Card() {
    return (
        <div className='container-fluid'>
            <h1 className='title-dashboard'>Wishlist</h1>
            <div className="container all-booking p-0 ms-0">
                <ListBooking />
            </div>
        </div>
    )
}
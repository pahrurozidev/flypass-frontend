import React from 'react'
import { Link } from 'react-router-dom'
import { Verify } from 'iconsax-react'

export default function PaymentCompleted() {
    return (
        <div className='container m-auto text-center mt-5'>
            <Verify size={100} className="text-primary" />

            <p className='fs-4 mt-2'>Payment Successfully!</p>

            <Link to={'/user/dashboard/ticket'}>
                <div className='btn btn-primary mt-5'>See Ticket</div>
            </Link>
        </div>
    )
}

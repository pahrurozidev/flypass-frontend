import React from 'react'

export default function NotFound({ departureAlert, returnAlert }) {
    return (
        <div className='container alert-danger not-found border rounded d-flex items-center justify-content-center'>
            <div className='text-dark'>{departureAlert && 'Departure '} {returnAlert && 'Return '}Flight Not found!</div>
        </div>
    )
}
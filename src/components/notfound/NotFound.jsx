import React from 'react'

export default function NotFound({alert}) {
  return (
    <div className='card p-3 text-center mt-3 alert-danger text-dark'> {alert} Not Found!</div>
  )
}

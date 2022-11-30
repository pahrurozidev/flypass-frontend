import React from 'react'

export default function RegItem() {
    return (
      <header>
        <img src="/flight1.png" alt="" id='gambar1'/>
        <p id='p1'>Fly With FlyPass</p>
        <p id='p2'>Nikmati Holidaymu Bersama Dengan FlyPass</p>
        <div id='flogin'>
          <form action="">
          <p id='register1'>Register</p>
            <p id='fname'>First Name</p>
            <input type="text" id='fname1' />
            <p id='lname'>Last Name</p>
            <input type="text" id='lname1' />
            <p id='emaila'>Email Address</p>
            <input type="text" id='emaila1' />
            <p id='ps'>Password</p>
            <input type="text" id='ps1' />
            <p id='pc'>Password Confirmation</p>
            <input type="text" id='pc1' />
            <div id='login7'><a href='' id='login6'>Create Your Account</a></div>
          </form>
        </div>
      </header>
    )
  }
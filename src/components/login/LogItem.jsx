import React from 'react'

export default function LogItem() {
    return (
      <header>
        <img src="/flight1.png" alt="" id='gambar1'/>
        <p id='p1'>Fly With FlyPass</p>
        <p id='p2'>Nikmati Holidaymu Bersama Dengan FlyPass</p>
        <div id='flogin'>
          <form action="">
          <p id='login1'>Login</p>
            <p id='email'>Email</p>
            <input type="text" id='email1' />
            <p id='password'>Password</p>
            <input type="text" id='password1' />
            <div id='login2'><a href='' id='login5'>Login</a></div>
          </form>
          <p id='login3'>Don't have any account?</p>
          <a href="/register" id='login4'>Register Now</a>
        </div>
      </header>
    )
  }
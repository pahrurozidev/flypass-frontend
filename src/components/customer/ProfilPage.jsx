import React from 'react';
import UserCircle from '../../assets/homepage/user-circle.png';
import ArrowLeft from '../../assets/homepage/arrow-left.png';

export default function ProfilPage() {
    return (
        <>
        <img src={ArrowLeft} className="arrowleft" alt="" />
        <h3 className='profil'>Your Profil</h3>
        <section className="container login ">
            <div className="login-detail">
            <img src={UserCircle} class="nav-link user-image" alt="" />
            <hr />
                <h6>Name :</h6>
                <p>Kelompok C3</p>
                <hr />
                <h6>Email :</h6>
                <p>Kelompokc3@gmail.com</p>
                <hr />
                <h6>No Hp :</h6>
                <p>123456</p>
                <hr />
                <h6>Date Of Birth :</h6>
                <p>16 Oktober 2002</p>
                <hr />
                <h6>Address :</h6>
                <p>Padang</p>
                <hr />
                <a href="/editprofil"><button type="button" className="btn btn-primary">Edit Profil</button></a>
            </div>
        </section>
        </>
        
    );
}

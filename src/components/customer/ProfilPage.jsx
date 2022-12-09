import React from 'react';
import UserCircle from '../../assets/homepage/user-circle.png';
import ArrowLeft from '../../assets/homepage/arrow-left.png';

export default function ProfilPage() {
    return (
        <>
        <img src={ArrowLeft} className="arrowleft" alt="" />
        <h2 className='profil1'>Your Profil</h2>
        <section className="container login ">
            <div className="login-detail">
            <img src={UserCircle} class="nav-link user-image" alt="" />
            <hr />
                <h6>First Name :</h6>
                <p>Joko</p>
                <hr />
                <h6>Last Name :</h6>
                <p>Widodo</p>
                <hr />
                <h6>Date Of Birth :</h6>
                <p>16 Oktober 2002</p>
                <hr />
                <h6>Email :</h6>
                <p>jokowidodo16@gmail.com</p>
                <hr />
                <h6>City :</h6>
                <p>Jawa</p>
                <hr />
                <h6>Pos Code :</h6>
                <p>25522</p>
                <hr />
                <h6>No Hp :</h6>
                <p>123456</p>
                <hr />
                <h6>Gender :</h6>
                <p>Male</p>
                <hr />
                <h6>Country :</h6>
                <p>Thailand</p>
                <hr />
                <h6>Address :</h6>
                <p>Indonesia Utara</p>
                <hr />
                <a href="/#/editprofil"><button type="button" className="btn btn-primary">Edit Profil</button></a>
            </div>
        </section>
        </>
        
    );
}

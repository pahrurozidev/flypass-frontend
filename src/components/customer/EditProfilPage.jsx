import React from 'react';
import ArrowLeft from '../../assets/homepage/arrow-left.png';

export default function EditProfilPage() {
    return (
        <>
        <a href="/#/user/dashboard/profile"><img src={ArrowLeft} className="arrowleft" alt="" /></a>
        <h2 className='profil1'>Edit Profil</h2>
        <section className="container login">
            <div className="login-detail">
                <form action="">
                <h5>First Name</h5>
                <input type="text" />
                <h5>Last Name</h5>
                <input type="text" />
                <h5>Date Of Birth</h5>
                <input type="date" />
                <h5>Email</h5>
                <input type="text" />
                <h5>City</h5>
                <input type="text" />
                <h5>Pos Code</h5>
                <input type="text" />
                <h5>No Hp</h5>
                <input type="text" />
                <h5>Gender</h5>
                <input type="text" placeholder='Male/Female' />
                <h5>Country</h5>
                <input type="text" />
                <h5>Address</h5>
                <input type="text" />
                <h5>Photo Profil</h5>
                <input type="file" />
                <a href="#"><button type="button" className="btn btn-primary">Simpan</button></a>
                </form>
            </div>
        </section>
        </>
    );
}

import React from 'react';
import ArrowLeft from '../../assets/homepage/arrow-left.png';

export default function EditProfilPage() {
    return (
        <>
        <a href="/profil"><img src={ArrowLeft} className="arrowleft" alt="" /></a>
        <h3 className='profil'>Edit Profil</h3>
        <section className="container login">
            <div className="login-detail">
                <h2>Edit Your Profil</h2>
                <form action="">
                <h5>Name</h5>
                <input type="text" />
                <h5>Email</h5>
                <input type="text" />
                <h5>No Hp</h5>
                <input type="text" />
                <h5>Date Of Birth</h5>
                <input type="date" />
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

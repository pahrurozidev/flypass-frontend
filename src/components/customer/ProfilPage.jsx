import React, { Component, Fragment, useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-use-history';
import { Link, Navigate } from 'react-router-dom';
import UserCircle from '../../assets/homepage/user-circle.png';
import ArrowLeft from '../../assets/homepage/arrow-left.png';
import { ArrowCircleLeft2 } from 'iconsax-react';

export default function ProfilPage() {
  const [name, setUsername] = useState('');
  const [image, setImage] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`https://flypass-api.up.railway.app/v1/whoami`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsername(data.name);
        setImage(data.image);
        setBirthDate(data.birthDate);
        setEmail(data.email);
        setGender(data.gender);
        setPhone(data.phone);
      });
  }, []);


  return (

    <div>
      <div className='container-fluid pb-5'>
        <div className='admin-content px-lg-2'>

          {/* header label */}
          <div className='border rounded px-2 pt-md-3 px-md-3 pb-1 pt-3'>
            <h2 className='fs-4'>Your Profile, {name}</h2>
            <p className='header-text fw-light col-12 col-lg-9'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias est vel explicabo. Nostrum alias explicabo aliquam veritatis sunt quasi hic repellendus ut error, non temporibus iste est quod facilis. Unde.</p>
          </div>

          {/* broadcrumb */}
          <div className="border rounded py-2 px-2 px-md-3 d-flex justify-content-between mt-3 admin-flight-broadcrumb">
            <Link to={'/user/dashboard/dashboarduser'} className="text-decoration-none text-dark d-flex btn gap-1 gap-md-2 ps-0 flex-wrap">
              <ArrowCircleLeft2 size={20} />
              <div className='label'>Profile</div>
            </Link>
          </div>
          <section className="container login ">
            <div className="login-detail">
              <img src={image} class="nav-link user-image" alt="UserCircle" />
              <h6>User Name :</h6>
              <p>{name}</p>
              <h6>Date Of Birth :</h6>
              <p>{birthDate}</p>
              <h6>Email :</h6>
              <p>{email}</p>
              <h6>No Hp :</h6>
              <p>{phone}</p>
              <h6>Gender :</h6>
              <p>{gender}</p>
              <a href="/#/user/dashboard/editprofile"><button type="button" className="btn btn-primary">Edit Profile</button></a>
            </div>
          </section>
        </div>
      </div>
    </div>
    // <>
    //     <a href="/#/user/dashboard/dashboarduser">
    //         <img src={ArrowLeft} className="arrowleft" alt="" />
    //     </a>
    //     <h2 className='profil1'>Your Profil</h2>
    //     <section className="container login ">
    //             <div className="login-detail">
    //                 <img src={image} class="nav-link user-image" alt="" />
    //                 <h6>User Name :</h6>
    //                 <p>{name}</p>
    //                 <h6>Date Of Birth :</h6>
    //                 <p>{birthDate}</p>
    //                 <h6>Email :</h6>
    //                 <p>{email}</p>
    //                 <h6>No Hp :</h6>
    //                 <p>{phone}</p>
    //                 <h6>Gender :</h6>
    //                 <p>{gender}</p>
    //                 <a href="/#/user/dashboard/editprofile"><button type="button" className="btn btn-primary">Edit Profil</button></a>
    //             </div>
    //     </section>
    // </>

  );
}

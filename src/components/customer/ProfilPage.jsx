import React, { Component, Fragment, useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-use-history';
import { Link, Navigate } from 'react-router-dom';
import Profile from '../../assets/dasboard-admin/profile.svg';
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
    fetch(`http://localhost:8080/v1/whoami`, {
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
          {/* <section className="container login ">
            <div className="login-detail">
              <img src={UserCircle} class="nav-link user-image" />
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
          </section> */}
          <div className="card mt-3 p-2">
                        <div className="admin-customer-detail d-flex flex-column gap-2">
                            <section className='card p-3'>
                                <h5 className='border-bottom pb-2'>Personal</h5>
                                <img src={Profile} alt="" className='mt-3 mb-4' width={70} />
                                <div className='data-list'>
                                    <div className='col-12 d-flex flex-column gap-3 gap-md-0'>
                                        <div className='data-item'>
                                            <p className='data-item__name'>First Name</p>
                                            <p className='data-item__value'>: {name}</p>
                                        </div>
                                        <div className='data-item d-md-none'>
                                            <p className='data-item__name'>Last Name</p>
                                            <p className='data-item__value'>: {name}</p>
                                        </div>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Date of Birth</p>
                                            <p className='data-item__value'>: {birthDate}</p>
                                        </div>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Date of Birth</p>
                                            <p className='data-item__value'>: {birthDate}</p>
                                        </div>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Phone</p>
                                            <p className='data-item__value'>: +6285xxxxxx</p>
                                        </div>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Pos Code</p>
                                            <p className='data-item__value'>: {phone}</p>
                                        </div>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Address</p>
                                            <p className='data-item__value'>: Jln xxx perigi city space</p>
                                        </div>
                                    </div>
                                    <div className='col-12 d-flex flex-column gap-3 gap-md-0'>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Last Name</p>
                                            <p className='data-item__value'>: {name}</p>
                                        </div>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Gender</p>
                                            <p className='data-item__value'>: {gender}</p>
                                        </div>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Email</p>
                                            <p className='data-item__value'>: {email}</p>
                                        </div>
                                        <div className='data-item'>
                                            <p className='data-item__name'>City</p>
                                            <p className='data-item__value'>: Mataram</p>
                                        </div>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Nationality</p>
                                            <p className='data-item__value'>: Indonesia</p>
                                        </div>
                                        <div className='data-item'>
                                          <a href="/#/user/dashboard/editprofile">
                                            <div className='btn btn-primary crud-flight-btn d-flex gap-1 justify-content-center shadow' style={{width:"100px", marginLeft:"-2px"}}>
                                              <span>Edit Data</span>
                                            </div>
                                          </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
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

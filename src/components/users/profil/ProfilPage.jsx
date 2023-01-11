import React, { Component, Fragment, useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-use-history';
import { Link, Navigate } from 'react-router-dom';
import Profile from '../../../assets/dasboard-admin/profile.svg';
import ArrowLeft from '../../../assets/homepage/arrow-left.png';
import { ArrowCircleLeft2, Edit } from 'iconsax-react';
import { API } from '../../../services';

export default function ProfilPage() {
  const [user, setUser] = useState('');

  useEffect(() => {
    API.getProfiles().then((user) => {
      setUser(user);
    })
  }, []);

  return (
    <div>
      <div className='container-fluid pb-5'>
        <div className='admin-content px-lg-2'>

          {/* header label */}
          <div className='border rounded px-2 pt-md-3 px-md-3 pb-1 pt-3'>
            <h2 className='fs-4'>Your Profile, {user.name}</h2>
            <p className='header-text fw-light col-12 col-lg-9 p-0'>Halaman ini menampilkan data diri anda, jika belum lengkap silahkan perbaharui dan lengkapi.</p>
          </div>

          {/* broadcrumb */}
          <div className="border rounded py-2 px-2 px-md-3 d-flex justify-content-between mt-3 admin-flight-broadcrumb">
            <Link to={'/user/dashboard/dashboarduser'} className="text-decoration-none text-dark d-flex btn gap-1 gap-md-2 ps-0 flex-wrap">
              <ArrowCircleLeft2 size={20} />
              <div className='label'>Profile</div>
            </Link>
          </div>
          {/* profile */}
          <div className="card mt-3 p-2">
            <div className="admin-customer-detail d-flex flex-column gap-2">
              <section className='card p-3'>
                <h5 className='border-bottom pb-2'>Personal</h5>
                <img src={JSON.stringify(user.image) !== 'null' ? user.image : Profile} alt="" className='mt-3 mb-4 rounded-circle' width={70} />
                <div className='data-list'>
                  <div className='col-12 d-flex flex-column gap-3 gap-md-0'>
                    <div className='data-item'>
                      <p className='data-item__name'>Name</p>
                      <p className='data-item__value'>: {user.name}</p>
                    </div>
                    <div className='data-item'>
                      <p className='data-item__name'>Date of Birth</p>
                      <p className='data-item__value'>: {user.birthDate}</p>
                    </div>
                    <div className='data-item'>
                      <p className='data-item__name'>Phone</p>
                      <p className='data-item__value'>: {user.phone}</p>
                    </div>
                  </div>
                  <div className='col-12 d-flex flex-column gap-3 gap-md-0'>
                    <div className='data-item'>
                      <p className='data-item__name'>Gender</p>
                      <p className='data-item__value'>: {user.gender}</p>
                    </div>
                    <div className='data-item'>
                      <p className='data-item__name'>Email</p>
                      <p className='data-item__value'>: {user.email}</p>
                    </div>
                    <div className='data-item float-right d-flex justify-content-end'>
                      <Link to={`/user/dashboard/changepassword`}>
                        <div className='btn btn-primary crud-flight-btn d-flex gap-1 justify-content-center shadow' style={{ width: "150px", height: "43px" }}>
                          <span>Change Password</span>
                        </div>
                      </Link>
                      <Link to={`/user/dashboard/editprofile`}>
                        <div className='btn btn-primary crud-flight-btn d-flex gap-1 justify-content-center shadow' style={{ width: "50px", height: "43px", marginLeft: "20px" }}>
                          <span><Edit size={20} /></span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

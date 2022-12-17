import React, { Component, Fragment, useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-use-history';
import { Link, Navigate } from 'react-router-dom';
import UserCircle from '../../assets/homepage/user-circle.png';
import ArrowLeft from '../../assets/homepage/arrow-left.png';

export default function ProfilPage() {
    const [name, setUsername] = useState('');
    const [image, setImage] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [token, setToken] = useState('');
    // const [user, setUser] = useState('');

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
            // setUser(data.data.user);
            setUsername(data.name);
            setImage(data.image);
            setBirthDate(data.birthDate);
            setEmail(data.email);
            setGender(data.gender);
            setPhone(data.phone);
          });
        // setIsLoggedIn(!!token);
      }, []);


    return (
        <>
            <a href="/#/user/dashboard/dashboarduser">
                <img src={ArrowLeft} className="arrowleft" alt="" />
            </a>
            <h2 className='profil1'>Your Profil</h2>
            <section className="container login ">
                    <div className="login-detail">
                        <img src={image} class="nav-link user-image" alt="" />
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
                        <a href="/#/user/dashboard/editprofile"><button type="button" className="btn btn-primary">Edit Profil</button></a>
                    </div>
            </section>
        </>

    );
}

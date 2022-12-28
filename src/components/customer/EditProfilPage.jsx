import React, { Component, Fragment, useState, useEffect } from "react";
import ArrowLeft from '../../assets/homepage/arrow-left.png';
import axios from 'axios';
import { useHistory } from 'react-router-use-history'
import { Link } from 'react-router-dom';
import { ArrowCircleLeft2 } from 'iconsax-react';

export default function EditProfilPage() {

    // const [name, setUsername] = useState('');
    // const [image, setImage] = useState('');
    // const [birthDate, setBirthDate] = useState('');
    // const [email, setEmail] = useState('');
    // const [gender, setGender] = useState('');
    // const [phone, setPhone] = useState('');

    // useEffect(() => {
    //   const token = localStorage.getItem("token");
    //   fetch(`http://localhost:8080/v1/whoami`, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       setUsername(data.name);
    //       setImage(data.image);
    //       setBirthDate(data.birthDate);
    //       setEmail(data.email);
    //       setGender(data.gender);
    //       setPhone(data.phone);
    //     });
    // }, []);

    const history = useHistory();

    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        image:"",
        gender: "",
        birthDate: "",
    })

    function submit(e){
        e.preventDefault();
        const token = localStorage.getItem("token");
      axios.put('http://localhost:8080/v1/user', data,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(res=>{
            console.log(res.data)
            alert("Data kamu berhasil diedit");
            history.push('/user/dashboard/profile');
        })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }

    return (

        <div>
      <div className='container-fluid pb-5'>
        <div className='admin-content px-lg-2'>

          {/* header label */}
          <div className='border rounded px-2 pt-md-3 px-md-3 pb-1 pt-3'>
            <h2 className='fs-4'>Edit Profile</h2>
            <p className='header-text fw-light col-12 col-lg-9'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias est vel explicabo. Nostrum alias explicabo aliquam veritatis sunt quasi hic repellendus ut error, non temporibus iste est quod facilis. Unde.</p>
          </div>

          {/* broadcrumb */}
          <div className="border rounded py-2 px-2 px-md-3 d-flex justify-content-between mt-3 admin-flight-broadcrumb">
            <Link to={'/user/dashboard/profile'} className="text-decoration-none text-dark d-flex btn gap-1 gap-md-2 ps-0 flex-wrap">
              <ArrowCircleLeft2 size={20} />
              <div className='label'>Profile / Edit Profile</div>
            </Link>
          </div>

          <section className="container login">
            <div className="login-detail">
                <form onSubmit={(e)=> submit(e)} action="">
                <h5>Name</h5>
                <input onChange={(e)=>handle(e)} id="name" value={data.name} type="text" />
                <h5>Date Of Birth</h5>
                <input onChange={(e)=>handle(e)} id="birthDate" value={data.birthDate} type="date" />
                <h5>Email</h5>
                <input onChange={(e)=>handle(e)} id="email" value={data.email} type="text" />
                <h5>No Hp</h5>
                <input onChange={(e)=>handle(e)} id="phone" value={data.phone} type="text" />
                <h5>Gender</h5>
                <select onChange={(e)=>handle(e)} id="gender" value={data.gender} style={{width:"350px", height:"45px", marginLeft:"40px"}}>
                    <option value="">Male / Female</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <h5>Photo Profil</h5>
                <input onChange={(e)=>handle(e)} id="image" value={data.image} type="file" />
                <input type="submit" name='submit' value='Simpan' className='shadow mt-5' style={{backgroundColor:"blue"}}/>   
                </form>
            </div>
        </section>
        </div>
      </div>
    </div>
        // <>
        // <a href="/#/user/dashboard/profile"><img src={ArrowLeft} className="arrowleft" alt="" /></a>
        // <h2 className='profil1'>Edit Profil</h2>
        // <section className="container login">
        //     <div className="login-detail">
        //         <form onSubmit={(e)=> submit(e)} action="">
        //         <h5>Name</h5>
        //         <input onChange={(e)=>handle(e)} id="name" value={data.name} type="text" />
        //         <h5>Date Of Birth</h5>
        //         <input onChange={(e)=>handle(e)} id="birthDate" value={data.birthDate} type="date" />
        //         <h5>Email</h5>
        //         <input onChange={(e)=>handle(e)} id="email" value={data.email} type="text" />
        //         <h5>No Hp</h5>
        //         <input onChange={(e)=>handle(e)} id="phone" value={data.phone} type="text" />
        //         <h5>Gender</h5>
        //         <input onChange={(e)=>handle(e)} id="gender" value={data.gender} type="text" placeholder='Male/Female' />
        //         <h5>Photo Profil</h5>
        //         <input onChange={(e)=>handle(e)} id="image" value={data.image} type="file" />
        //         <input type="submit" name='submit' value='Simpan' className='shadow mt-5' style={{backgroundColor:"blue"}}/>   
        //         </form>
        //     </div>
        // </section>
        // </>
    );
}

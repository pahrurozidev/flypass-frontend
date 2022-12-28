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
    //   fetch(`https://flypass-api.up.railway.app/v1/whoami`, {
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
        axios.put('https://flypass-api.up.railway.app/v1/user', data,{
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
        console.log(newdata)
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

          {/* <section className="container login">
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
        </section> */}
        <div className='card mt-3 p-3 pt-0 pb-3 admin-add-flight'>
                    <form onSubmit={(e)=> submit(e)} className="d-md-flex gap-md-5">
                        <div className='col'>
                            <div class="mb-0">
                                <label for="exampleFormControlInput1" class="form-label">User Name</label>
                                <input onChange={(e)=>handle(e)} value={data.name} type="text" class="form-control mt-0" id="name" placeholder="your name" />
                            </div>
                            <div class="mb-0">
                                <label for="exampleFormControlInput1" class="form-label">Email</label>
                                <input onChange={(e)=>handle(e)} value={data.email} type="email" class="form-control mt-0" id="email" placeholder="name@example.com" />
                            </div>
                            <div class="mb-0">
                                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                <input onChange={(e)=>handle(e)} value={data.phone} type="text" class="form-control mt-0" id="phone" placeholder="0812345667" />
                            </div>
                        </div>
                        <div className='col'>
                            <div class="mb-0">
                                <label for="exampleFormControlInput1" class="form-label">Gender</label>
                                <select onChange={(e)=>handle(e)} id="gender" value={data.gender} class="form-select form-select-lg" aria-label=".form-select-lg example">
                                    <option selected>Open this select menu</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div class="mb-0">
                                <label for="exampleFormControlInput1" class="form-label">Birth Date</label>
                                <input onChange={(e)=>handle(e)} value={data.birthDate}type="date" class="form-control mt-0" id="birthDate" placeholder="xx-xx-xxxx" />
                            </div>
                            <div class="mb-0">
                                <label for="exampleFormControlInput1" class="form-label">Photo</label>
                                <input onChange={(e)=>handle(e)} value={data.image} type="file" class="form-control mt-0" id="image" placeholder="name@example.com" />
                            </div>
                            <div className='mb-0 d-md-flex justify-content-end mt-4 mt-md-5'>
                                <div className='btn btn-primary crud-flight-btn d-flex gap-1 justify-content-center shadow'>
                                    <button type="submit" name='submit' className="btn btn-primary" style={{width:"80px"}}>Save</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
        </div>
      </div>
    </div>
    );
}
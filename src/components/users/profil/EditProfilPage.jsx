import React, { Component, Fragment, useState, useEffect } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-use-history'
import { Link, useParams } from 'react-router-dom';
import { ArrowCircleLeft2 } from 'iconsax-react';
import { API } from '../../../services';

export default function EditProfilPage() {

    const history = useHistory();
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        gender: "",
        birthDate: "",
        image: "",
    })
    const [imageAttr, setImageAttr] = useState({
        image: '',
    });
    const [image, setImage] = useState('');
    const [user, setUser] = useState('');

    useEffect(() => {
        API.getProfiles().then((user) => {
            // setUser(user);
            setData(user)
        })

    }, []);

    function submit(e) {
        e.preventDefault();

        data.image = image.image;
        const token = localStorage.getItem("token");

        console.log(data);

        axios.put(
            `${import.meta.env.VITE_BASE_URL}/v1/user`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            }).then(res => {
                console.log(res.data)
                alert("Data kamu berhasil diedit");
                history.push('/user/dashboard/profile');
            }).catch(err => console.log(err));
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)

        const img = { ...imageAttr };
        img[e.target.id] = e.target.files[0];
        setImage(img);
    }

    return (

        <div>
            <div className='container-fluid pb-5'>
                <div className='admin-content px-lg-2'>

                    {/* header label */}
                    <div className='border rounded px-2 pt-md-3 px-md-3 pb-1 pt-3'>
                        <h2 className='fs-4'>Edit Profile</h2>
                        <p className='header-text fw-light col-12 col-lg-9'>Silahkan lengkapi data diri anda jika belum lengkap.</p>
                    </div>

                    {/* broadcrumb */}
                    <div className="border rounded py-2 px-2 px-md-3 d-flex justify-content-between mt-3 admin-flight-broadcrumb">
                        <Link to={'/user/dashboard/profile'} className="text-decoration-none text-dark d-flex btn gap-1 gap-md-2 ps-0 flex-wrap">
                            <ArrowCircleLeft2 size={20} />
                            <div className='label'>Profile / Edit Profile</div>
                        </Link>
                    </div>
                    <div className='card mt-3 p-3 pt-0 pb-3 admin-add-flight'>
                        <form onSubmit={(e) => submit(e)} className="d-md-flex gap-md-5">
                            <div className='col'>
                                <div class="mb-0">
                                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                                    <input onChange={(e) => handle(e)} value={data.name} type="text" class="form-control mt-0" id="name" placeholder="your name" />
                                </div>
                                <div class="mb-0">
                                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                                    <input onChange={(e) => handle(e)} value={data.email} type="email" class="form-control mt-0" id="email" placeholder="name@example.com" />
                                </div>
                                <div class="mb-0">
                                    <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                    <input onChange={(e) => handle(e)} value={data.phone} type="text" class="form-control mt-0" id="phone" placeholder="0812345667" />
                                </div>
                                <div class="mb-0">
                                    <label for="exampleFormControlInput1" class="form-label">Gender</label>
                                    <select onChange={(e) => handle(e)} id="gender" value={data.gender} class="form-select form-select-lg" aria-label=".form-select-lg example">
                                        {data.gender == 'Male' ?
                                            <>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </> :
                                            <>
                                                <option value="Female">Female</option>
                                                <option value="Male">Male</option>
                                            </>}
                                    </select>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="mb-0">
                                    <label for="exampleFormControlInput1" class="form-label">Birth Date</label>
                                    <input onChange={(e) => handle(e)} value={data.birthDate} type="date" class="form-control mt-0" id="birthDate" placeholder="xx-xx-xxxx" />
                                </div>
                                <div>
                                    <img src={image.image || data.image} className="mt-4 rounded-circle" alt="" width={100} />
                                </div>
                                <div class="mb-0">
                                    <label for="exampleFormControlInput1" class="form-label">Photo</label>
                                    <input onChange={(e) => handle(e)} type="file" class="form-control mt-0" id="image" placeholder="name@example.com" />
                                </div>
                                <div className='mb-0 d-md-flex justify-content-end mt-4 mt-md-5'>
                                    <div className='btn btn-primary d-flex gap-1 justify-content-center shadow p-0'>
                                        <button type="submit" name='submit' className="btn btn-primary" style={{ width: "70px", height: "35px" }}>Save</button>
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
import React, { Component, Fragment, useState, useEffect } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-use-history'
import { Link, useParams } from 'react-router-dom';
import { ArrowCircleLeft2 } from 'iconsax-react';
import { API } from '../../../services';

export default function ChangePasswordPage() {

    const history = useHistory();
    const [data, setData] = useState({
        olddpassword: "",
        newpassword: "",
        Newconfirmpassword: "",
    })

    function submit(e) {
        e.preventDefault();

        const token = localStorage.getItem("token");

        console.log(data);

        axios.put(
            `${import.meta.env.VITE_BASE_URL}/v1/changepassword`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then(res => {
                console.log(res.data)
                alert("Password kamu berhasil diubah");
                history.push('/user/dashboard/profile');
            }).catch(err => console.log(err));
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }

    return (

        <div>
            <div className='container-fluid pb-5'>
                <div className='admin-content px-lg-2'>

                    {/* header label */}
                    <div className='border rounded px-2 pt-md-3 px-md-3 pb-1 pt-3'>
                        <h2 className='fs-4'>Change Password</h2>
                        <p className='header-text fw-light col-12 col-lg-9'>Pada halaman ini, anda dapat melakukan perubahan pada password anda.</p>
                    </div>

                    {/* broadcrumb */}
                    <div className="border rounded py-2 px-2 px-md-3 d-flex justify-content-between mt-3 admin-flight-broadcrumb">
                        <Link to={'/user/dashboard/profile'} className="text-decoration-none text-dark d-flex btn gap-1 gap-md-2 ps-0 flex-wrap">
                            <ArrowCircleLeft2 size={20} />
                            <div className='label'>Profile / Change Password</div>
                        </Link>
                    </div>
                    <div className='card mt-3 p-3 pt-0 pb-3 admin-add-flight'>
                        <form onSubmit={(e) => submit(e)} className="d-md-flex gap-md-5">
                            <div className='col'>
                                <div class="mb-0">
                                    <label for="exampleFormControlInput1" class="form-label">Old Password</label>
                                    <input onChange={(e) => handle(e)} value={data.olddpassword} type="password" class="form-control mt-0" id="olddpassword" placeholder="old password" />
                                </div>
                            </div>
                            <div className='col'>
                                <div class="mb-0">
                                    <label for="exampleFormControlInput1" class="form-label">New Password</label>
                                    <input onChange={(e) => handle(e)} value={data.newpassword} type="password" class="form-control mt-0" id="newpassword" placeholder="new password" />
                                </div>
                            </div>
                            <div className='col'>
                                <div class="mb-0">
                                    <label for="exampleFormControlInput1" class="form-label">New Confirmation Password</label>
                                    <input onChange={(e) => handle(e)} value={data.Newconfirmpassword} type="password" class="form-control mt-0" id="Newconfirmpassword" placeholder="new confirm password" />
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
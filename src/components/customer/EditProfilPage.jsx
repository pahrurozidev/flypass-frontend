import React,{useState} from 'react';
import ArrowLeft from '../../assets/homepage/arrow-left.png';
import axios from 'axios';
import { useHistory } from 'react-router-use-history'

export default function EditProfilPage() {

    const history = useHistory();

    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        image: "",
        gender: "",
        birthDate: "",
    })

    function submit(e){
        e.preventDefault();
        console.log(data.image)
        const token = localStorage.getItem("token");
        axios.put('https://flypass-api.up.railway.app/v1/user', data,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(res=>{
            // console.log(res.data)
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
        <>
        <a href="/#/user/dashboard/profile"><img src={ArrowLeft} className="arrowleft" alt="" /></a>
        <h2 className='profil1'>Edit Profil</h2>
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
                <input onChange={(e)=>handle(e)} id="gender" value={data.gender} type="text" placeholder='Male/Female' />
                <h5>Photo Profil</h5>
                <input onChange={(e)=>handle(e)} id="image" value={data.image} type="file" />
                <input type="submit" name='submit' value='Simpan' className='shadow mt-5' style={{backgroundColor:"blue"}}/>   
                </form>
            </div>
        </section>
        </>
    );
}

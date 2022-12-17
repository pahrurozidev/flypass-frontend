import React,{useEffect,useState} from 'react';
import { Link,Navigate } from 'react-router-dom';
import Fligh from '../../assets/homepage/flight.webp';
import axios from 'axios';
import { useHistory } from 'react-router-use-history'

export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.post('https://flypass-api.up.railway.app/v1/login',{
                email: email,
                password: password,
            });
            alert("Kamu Berhasil Login");
            console.log(data);
            localStorage.setItem("token", data.data.user.accesstToken)
            localStorage.setItem("id", data.data.user.id)
            history.push('/user/dashboard/dashboarduser');
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data);
            }
        }
    }

    return (
        <section className="container login-container">
            <section>
                <div className='login-form'>
                    <div className='login-header'>
                        <h1>Login</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <form onSubmit={ Auth }>
                        <ul className='p-0'>
                            <li>
                                <label htmlFor="email">Email</label>
                                <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </li>
                            <li>
                                <label htmlFor="password">Password</label>
                                <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </li>
                            <li>
                            <input type="submit" name='submit' value='Login' className='shadow' style={{backgroundColor:"blue"}} /> 
                                <div className="pt-3 text-center">
                                    Not already have account?
                                    <Link to={'/register'}>
                                        <span> Register</span>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
                <img src={Fligh} alt="" />
            </section>
        </section>
    );
}

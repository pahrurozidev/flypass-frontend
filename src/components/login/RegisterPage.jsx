import React,{useState} from 'react';
import { Link, redirect } from 'react-router-dom';
import Fligh from '../../assets/homepage/flight.webp';
import axios from 'axios';
import { useHistory } from 'react-router-use-history';

export default function RegisterPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmationPassword, setConfirmationPassword] = useState('');
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [msg, setMsg] = useState('');
    const [phone, setPhone] = useState('');
    const history = useHistory();

    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://flypass-api.up.railway.app/v1/register',{
                email: email,
                password: password,
                confirmationPassword: confirmationPassword,
                name: name,
                birthDate: birthDate,
                gender: gender,
                phone: phone
            });
            alert("Kamu Berhasil Register Silahkan Login");
            history.push('/login');
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data);
            }
        }
    }


    return (
        <section className="container login-container">
            <section>
                <div>
                    <div className='login-header'>
                        <h1>Sign Up</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <p className='text-center'>{msg}</p>
                    <form onSubmit={ Register } className='px-5 pb-4'>
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
                                <label htmlFor="confirmasi_password">Password Confirmation</label>
                                <input type="password" name='confirmationPassword' value={confirmationPassword} onChange={(e) => setConfirmationPassword(e.target.value)} />
                            </li>
                            <li>
                                <label htmlFor="name">Name</label>
                                <input type="name" name='name' value={name} onChange={(e) => setName(e.target.value)} />
                            </li>
                            <li>
                                <label htmlFor="date">Date Of Birth</label>
                                <input type="date" name='birthDate' value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
                            </li>
                            <li>
                                <label htmlFor="gender">Gender</label>
                                <select type="gender" name='gender' value={gender} onChange={(e) => setGender(e.target.value)} style={{width:"460px", height:"45px"}}>
                                    <option value="">Male / Female</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </li>
                            <li>
                                <label htmlFor="phone">Phone</label>
                                <input type="phone" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </li>
                            <li>
                                <input type="submit" name='submit' value='Register' className='shadow' style={{backgroundColor:"blue"}}/>                                   
                                <div className="pt-3 text-center">
                                    Already have account?
                                    <Link to={'/login'}>
                                        <span> Login</span>
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
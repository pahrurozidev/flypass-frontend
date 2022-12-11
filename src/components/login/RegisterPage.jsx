import React,{useState} from 'react';
import { Link, redirect } from 'react-router-dom';
import Fligh from '../../assets/homepage/flight.webp';

export default function RegisterPage() {
    const [field, setField] = useState({});
   
    const [err, setErr] = useState("");

    // const redirectToPersonalInfo = () => {
    //     alert('redirect to personal information')
    //     return redirect("/register2")
    // }


    function setValue(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        console.log({ name, value });

        setField({
            ...field,
            [name]: value
        });
    }

    async function doRegister(e) {
        e.preventDefault();


        const req = await fetch('https://flypass-api.up.railway.app/v1/register/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(field)
            }).catch((err) => {
                throw err;
            });

        const data = await req.json();
        if (data.status === "OK") {
            alert("Congratulation!! , Your accounnt has been Registered")
            return redirect("/register/personal")
            

        } else {
            const errStatus = data.status;
            const errMessage = data.message;
            setErr(`${errStatus} ${errMessage}`);
        };

        console.log(data.data, "data here");

        setField({});
        e.target.reset();

        console.log(data)

    }


    return (
        <section className="container login-container">
            <section>
                <div>
                    <div className='login-header'>
                        <h1>Sign Up</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <form onSubmit={doRegister} className='px-5 pb-4'>
                        <ul className='p-0'>
                            <li>
                                <label htmlFor="email">Email</label>
                                <input type="email" name='email' onChange={setValue}/>
                            </li>
                            <li>
                                <label htmlFor="password">Password</label>
                                <input type="password" name='password' onChange={setValue}/>
                            </li>
                            <li>
                                <label htmlFor="confirmasi_password">Confirmation</label>
                                <input type="password" name='confirmationPassword'onChange={setValue}/>
                            </li>
                            <li>
                                <label htmlFor="name">Name</label>
                                <input type="name" name='name' onChange={setValue}/>
                            </li>
                            <li>
                                <label htmlFor="date">Date Of Birth</label>
                                <input type="date" name='birthDate' onChange={setValue}/>
                            </li>
                            <li>
                                <label htmlFor="gender">Gender</label>
                                <input type="gender" name='gender'onChange={setValue}/>
                            </li>
                            <li>
                                <label htmlFor="phone">Phone</label>
                                <input type="phone" name='phone'onChange={setValue}/>
                            </li>
                            <li>
                                <input type="submit" name='submit' value='Continue' className='shadow' />                                   
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
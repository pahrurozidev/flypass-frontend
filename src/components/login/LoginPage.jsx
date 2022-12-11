import React,{useEffect,useState} from 'react';
import { Link,Navigate } from 'react-router-dom';
import Fligh from '../../assets/homepage/flight.webp';

export default function LoginPage() {
    const [field, setField] = useState({});
    const [err, setErr] = useState("");
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const [user, setUser] = useState({})
    

    useEffect(() =>{
        const accesstToken = localStorage.getItem('accesstToken');
        setIsLoggedIn(!!accesstToken);
    },[]);

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

    async function doLogin(e) {
        e.preventDefault();


        const response = await fetch('https://flypass-api.up.railway.app/v1/login', {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(field)
    });

    const data = await response.json();
    if (data.status === "OK") {
      localStorage.setItem("accesstToken", data.data.token);
      setIsLoggedIn(true);
      alert("Kamu Berhasil Login");

      return <Navigate to="/" replace={true}/>
    } else {
      const errStatus = data.status;
      const errMessage = data.message;
      setErr(`${errStatus} ${errMessage}`);
    }

    console.log(data.data, "data here");

    const userdata = data.data;
    setUser(userdata);
    console.log(data)

    setField({});
    e.target.reset();

    
  }


    return (
        <section className="container login-container">
            <section>
                <div className='login-form'>
                    <div className='login-header'>
                        <h1>Login</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <form onSubmit={doLogin}>
                        <ul className='p-0'>
                            <li>
                                <label htmlFor="email">Email</label>
                                <input type="email" name='email' onChange={setValue} />
                            </li>
                            <li>
                                <label htmlFor="password">Password</label>
                                <input type="password" name='password' onChange={setValue}/>
                            </li>
                            <li>
                            <input type="submit" name='submit' value='Login' className='shadow' /> 
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

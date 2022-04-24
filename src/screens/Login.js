import React ,{useState} from "react";
import loginPhoto from '/home/omarmohamed/icu-web/src/Imgs/login-photo.jpg';
import { Link ,useNavigate } from "react-router-dom";
import { ToastContainer ,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const loginHandler = () => {
        if(email.length === 0 || password.length === 0){
            // alert('Invalid Inputs', 'Please enter valid inputs');
            
            toast.error('Invalid Inputs', {
                position: "top-center",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,});
        }
        else if(email === 'doctor@gmail.com' && password === '123'){
            // alert('Login Successful', 'Welcome Doctor');
            toast.success('Login Successful', {
                position: "top-center",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            navigate('/allRooms')
        }
        else{
            // alert('Invalid Inputs', 'Please enter valid inputs', [{text: 'Okay'}]);
            toast.error('Invalid Inputs', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }


    return(
        <>
            <div className="loginContainer" >
                <form onSubmit={loginHandler} className="login-form">
                    <h1 className="text" >Welcome to your ICU monitor</h1>
                    <input type="text" placeholder="Email" className="inputField" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" className="inputField" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="login-btn" type="submit"><span  style={{color:"white"}} >Login</span></button>
                    <Link to="/Configuration" style={{color:"#3902b0",textDecoration:"none",marginTop:"10px"}}  >Add Configuration</Link>
                </form>
                <div className="loginImgContainer" >
                    <img width='100%'   height='90%' src={loginPhoto} alt="login" className="login-photo" />
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Login;

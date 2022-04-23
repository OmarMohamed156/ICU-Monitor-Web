import React ,{useState} from "react";
import loginPhoto from '/home/omarmohamed/icu-web/src/Imgs/login-photo.jpg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = () => {
        if(email.length === 0 || password.length === 0){
            alert('Invalid Inputs', 'Please enter valid inputs');
        }
        else if(email === 'doctor@gmail.com' && password === '123'){
            alert('Login Successful', 'Welcome Doctor');
        }
        else{
            alert('Invalid Inputs', 'Please enter valid inputs', [{text: 'Okay'}]);
        }
    }


    return(
        <div className="loginContainer" >
            <div className="login-form">
                <h1 className="text" >Welcome to your ICU monitor</h1>
                <input type="text" placeholder="Email" className="inputField" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" className="inputField" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="login-btn" onClick={loginHandler}><span  style={{color:"white"}} >Login</span></button>
            </div>
            <div className="loginImgContainer" >
                <img width='100%'   height='90%' src={loginPhoto} alt="login" className="login-photo" />
            </div>
        </div>
    )
}

export default Login;

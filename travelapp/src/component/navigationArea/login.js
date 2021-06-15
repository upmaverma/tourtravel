import React, { useContext, useState } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './login.css';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../routing';

const Login = () => {
    const { dispatch } = useContext(UserContext);
    const history = useHistory();

    const [userLoginInfo, setUseLoginInfo] = useState({
        email: '',
        password: ''
    })

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setUseLoginInfo({ ...userLoginInfo, [name]: value });
    }

    const loginUser = async (e) => {
        e.preventDefault();

        const { email, password } = userLoginInfo;
        console.log(userLoginInfo.email);
        sessionStorage.setItem('useremail', userLoginInfo.email)

        const res = await fetch('/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });

        const data = res.json();
        if (res.status === 400 || !data) {
            window.alert("Invalid Credentials")
        } else {
            dispatch({ type: "USER", payload: true })
            window.alert("Login Succesfully");
            history.push("/");
        }

    }
    return (
        <>
            <div className="container-fluid loginContainer">
                <div className="loginForm">
                    <form method="POST" >
                        <h1 className="loginHeading">Login Here</h1>
                        <div className="row">
                            <div className="col-lg-12 loginBox">

                                <div className="form-group">
                                    <label htmlFor="email" >
                                        <FontAwesomeIcon icon={['fas', 'envelope']} />
                                        <input type="text" placeholder="Enter your Email" name="email" className="inputLoginBox" id="email" autoComplete="off" value={userLoginInfo.email} onChange={handleInputs} />
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">
                                        <FontAwesomeIcon icon={['fas', 'lock']} />
                                        <input type="password" placeholder="Enter your Password" name="password" className="inputLoginBox" id="password" autoComplete="off" value={userLoginInfo.password} onChange={handleInputs} />
                                    </label>
                                </div>
                                <button className="btn btn-info loginBtn" value="Log In" onClick={loginUser} >Login</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="loginImage">
                                <img src="https://theuniqueacademy.co.in/assets/images/test.png" alt="Login" />
                            </div>

                        </div>
                    </form>
                </div>

            </div>
            
        </>
    )
}
export default Login;
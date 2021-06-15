import React from 'react'
import './signup.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import validate from './validateInfo';
import useForm from './useForm';


const Signup = () => {


    const { handleInputs, user, handleSubmit, errors } = useForm(validate);

    return (
        <>
            <div className="container-fluid signupBox">
                <div className="registerForm">
                    <form method="POST" onSubmit={handleSubmit}>
                        <h1 className="signupHeading">SignUp Here</h1>
                        <p className="signupPara">To create a new Account</p>
                        <div className="row">
                            <div className="col-lg-8 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="name" >
                                        <FontAwesomeIcon icon={['fas', 'user']} />
                                        <input type="text" placeholder="Enter your Name" className="inputBox" name="name" id="name" autoComplete="off" value={user.name} onChange={handleInputs} />
                                    </label>
                                    {errors.name && <p className="errorDisplay">{errors.name}</p>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone" >
                                        <FontAwesomeIcon icon={['fas', 'phone-alt']} />
                                        <input type="text" placeholder="Enter your Phone" className="inputBox" name="phone" id="phone" autoComplete="off" value={user.phone} onChange={handleInputs} />
                                    </label>
                                    {errors.phone && <p className="errorDisplay">{errors.phone}</p>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" >
                                        <FontAwesomeIcon icon={['fas', 'envelope']} />
                                        <input type="text" placeholder="Enter your Email" className="inputBox" name="email" id="email" autoComplete="off" value={user.email} onChange={handleInputs} />
                                    </label>
                                    {errors.email && <p className="errorDisplay">{errors.email}</p>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">
                                        <FontAwesomeIcon icon={['fas', 'lock']} />
                                        <input type="password" placeholder="Enter your Password" className="inputBox" name="password" id="password" autoComplete="off" value={user.password} onChange={handleInputs} />
                                    </label>
                                    {errors.password && <p className="errorDisplay">{errors.password}</p>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmpassword">
                                        <span><FontAwesomeIcon icon={['fas', 'lock']} /></span>
                                        <input type="password" placeholder="Confirm your Password" className="inputBox" name="cpassword" id="confirmpassword" autoComplete="off" value={user.cpassword} onChange={handleInputs} />
                                    </label>
                                    {errors.cpassword && <p className="errorDisplay">{errors.cpassword}</p>}
                                </div>
                                <button className="btn btn-info signupBtn" type="submit" onClick={handleSubmit} >Sign up</button>
                            </div>
                            <div className="col-lg-4">
                                <img src="https://www.wrightlife.co/media/animated/signup.png" alt="Signup" className="img-responsive signupImage" />
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
export default Signup;
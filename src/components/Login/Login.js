import React, { useContext, useState } from 'react';
import logo from '../../images/logo.png';
import './Login.css'
import googleLogo from '../../images/google.png'
import { handleGoogleSignIn, initializeLoginFramework } from './LoginManager';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',

    })
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    initializeLoginFramework()

    const googleSignIn = () => {
        handleGoogleSignIn()
        .then(res =>{
            setUser(res)
            setLoggedInUser(res)
            history.replace(from)
        })
    }

    // const handleResponse = (res, redirect) =>{
    //     setUser(res);
    //     setLoggedInUser(res);
    //     if(redirect){
    //         history.replace(from);
    //     }
    //   }


    return (
        <div>
            <div className="text-center image-area mb-5">
                <img src={logo} className="img-fluid" alt="" />
            </div>
            <div className="">
                <div className="row w-100">
                    <div className="col-md-4 offset-md-4">
                        <div className="login-area ">
                            <h3 className="mb-5">Login With</h3>
                            <button onClick={googleSignIn}
                                className='btn btn-light third-party-login-btn px-5'
                            >
                                <img src={googleLogo} alt="" className="img-fluid mr-3" />
                                Continue with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <h3> {user.name} </h3>
        </div>
    );
};

export default Login;
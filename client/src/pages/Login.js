import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import '../components/login.css'

const Login = () => {
  const navigate = useNavigate()
  const clientId = '304039575923-obgs1220fde6a1vrgkcfp8c1lmocrfnr.apps.googleusercontent.com';

  const onSuccess = (res) => {
    navigate(`/`);
}

const onFailure = (res) => {
    console.log('[Login failed] res:', res);
}

return (
  <>
  <div className='img-container'>
    <img src={"/images/logo.png"} className='logo' alt='logo'/>
  </div>
  <div className='window'>
  <h1>Login with your Google Account</h1>
    <GoogleLogin
      clientId={clientId}
      buttonText='Login'
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
      className='btn'
    />
  </div>
  </>
  );
};

export default Login;


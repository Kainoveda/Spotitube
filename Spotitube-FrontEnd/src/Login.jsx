import React from 'react'
import { Link } from 'react-router-dom';
import './assets/css/custom.css';
import SocialMediaButton from './Components/SocialMediaButton';
import googleLogo from '../src/assets/img/google-logo.png';
import facebookLogo from '../src/assets/img/facebook-logo.png';
import twtLogo from '../src/assets/img/Logo_of_Twitter.svg.png';
import websiteLogo from '../src/assets/img/LogoMid.png'
import topLogo  from '../src/assets/img/SpotitubeLogo.png';
import NameLogo from './Components/NameLogo';

function Login() {
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center vh-100 vw-100 bg-black'>
        <img src={topLogo} alt="Top Logo" className="top-logo position-absolute top-0 start-0" style={{ width: '150px', height: 'auto' }} />
      <div className='py-4 px-3 rounded bg-black text-white w-35 d-flex flex-column align-items-center position-relative'>
        <img src={websiteLogo} alt="Website Logo" className="logo-image" style={{ width: '200px', height: 'auto' }} />
        <form className='w-75'>
          <div className='w-100 d-flex flex-column align-items-start justify-content-center gap-1'>
            <label htmlFor="email" className='label-font' style={{ fontSize: '1.1rem' }}>Username or Email</label>
            <input type="email" placeholder='Example@gmail.com' className='form-control rounded-custom fs-6 border-0 bg-transparent border-bottom border-white text-white' />
          </div>
          <div className='mb-3'>
            <label htmlFor="password" className='label-font' style={{ fontSize: '1.1rem' }}>Password</label>
            <input type="password" placeholder='Enter Password' className='form-control fs-6 rounded-custom border-0 bg-transparent border-bottom border-white text-white' />
          </div>
          <div className='fs-custom text-center'>
            <p className="text-white">Not Registered? <u className="link-light"><Link to="/register" className="text-white">Sign up</Link>.</u></p>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button type="submit" className="btn btn-custom w-50 p-2 rounded-3 text-white fw-bold">LOGIN</button>
          </div>
          <div className='mt-2 fs-custom text-center'>
            <p className='cursor-pointer'><u>Forgot your Password?</u></p>
          </div>
        </form>
        <div className='d-flex w-100 align-items-center justify-content-center gap-3'>
          <p className='mt-3'> Login using:</p>
        </div>
        <div className='w-30 d-flex flex-row gap-1 mt-4'>
          <SocialMediaButton logo={googleLogo} />
          <SocialMediaButton logo={facebookLogo} />
          <SocialMediaButton logo={twtLogo}  />
          <div className='fs-custom text-center mt-4'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;

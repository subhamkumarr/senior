import React from 'react';
import './home.css'
import logo from '../../assets/logo.png';
// import background from '../../assets/background.png';


const Home = () => {
    return (
        <div className="landing-page">
          <div className="overlay"></div>
          <img className="logo" src={logo} alt="Logo" />
          <h1 className="welcome-text">Welcome</h1>
          <h2 className="sub-text">~Finding forever families for children~</h2>
          <div className="buttons-container">
            <button className="signin-button">Sign In</button>
            <button className="signup-button">Sign Up</button>
          </div>
        </div>
      );
    };
  
  export default Home;

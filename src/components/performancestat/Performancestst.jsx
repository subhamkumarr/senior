import React from 'react';
import './performancestat.css'
import logo from '../../assets/logo.png';
import image1 from '../../assets/image1.png';

const Performancestat = () => {
  return (
    
    <div>
      <nav className="navbar">
        <div className="logo-container">
          <img className="logo" src={logo} alt="Logo" />
        </div>
      </nav>

      <div className="content-container">
      <div className="hello-box">
        <p>Case Allotment</p>
      </div>

    <div className="containerr">
      <div className="card">
      <img className="image1" src={image1} alt="Card 1" />
      <div className="card-text">
          <h2>PENDING CASES</h2>
          <h1>802</h1>
          <h3>-30%</h3>
        </div>

      </div>
      <div className="card">
      <img className="image1" src={image1} alt="Card 2" />
      <div className="card-text">
          <h2>COMPLETED CASES</h2>
          <h1>2208</h1>
          <h3>+70%</h3>
        </div>
      </div>
      <div className="form">
        <label htmlFor="dropdown"> <h3>View Cases</h3></label>
        <select id="dropdown">
          <option value="" disabled selected>Select Type</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <button type="submit">ALLOT NEW CASE</button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Performancestat;
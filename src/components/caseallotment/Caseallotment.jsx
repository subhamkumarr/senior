import React, { useState } from "react";
import './caseallotment.css'
import logo from '../../assets/logo.png';
import { FcAddImage} from 'react-icons/fc'



const Caseallotment = () => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState(null);
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [place, setPlace] = useState('');
  const [classification, setClassification] = useState('');
  const [reasonForAdmission, setReasonForAdmission] = useState('');
  const [lastVisitDate, setLastVisitDate] = useState('');
  const [familyDetails, setFamilyDetails] = useState('');
  const [shelterHomeSinceDate, setShelterHomeSinceDate] = useState('');
  const [shelterHomeName, setShelterHomeName] = useState('');
  const [caseDetails, setCaseDetails] = useState('');
  const [assignedTo, setAssignedTo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // You can access form data using the state variables
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
  };

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

    <form className="registration-form" onSubmit={handleSubmit}>
      <label className="form-label">
        NAME
        <input className="form-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label className="file-label">
        UPLOAD PHOTO
            <div className="file-input-container">
              <div className="logo-container">
                {/* <img className="logo" src={logo} alt="Logo" /> */}
                <FcAddImage className="logoo" />
              </div>
              <input
                type="file"
                className="file-input"
                onChange={handlePhotoChange}
              />
              <div className="browse-button">Browse</div>
            </div>
          </label>
      <br />
      <label className="form-label">
        GENDER
        <div className="radio-group">
          <label className="radio-label">
            <input type="radio" value="Male" checked={gender === 'Male'} onChange={() => setGender('Male')} />
            <small className="gender">Male</small>
          </label>
          <label className="radio-label">
            <input type="radio" value="Female" checked={gender === 'Female'} onChange={() => setGender('Female')} />
            <small className="gender">Female</small>
          </label>
        </div>
      </label>
      <br />
      <label className="form-label">
        DATE OF BIRTH
        <input className="form-input" type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
      </label>
      <br />
      <label className="form-label">
        PLACE
        <input className="form-input" type="text" value={place} onChange={(e) => setPlace(e.target.value)} />
      </label>
      <br />
      <label className="form-label">
        CLASSIFICATION
        <select className="form-select" value={classification} onChange={(e) => setClassification(e.target.value)}>
          <option value="">Select Classification</option>
          <option value="Option 1">Abandoned</option>
          <option value="Option 2">Surrendered</option>
          <option value="Option 3">Admitted</option>
        </select>
      </label>
      <br />
      <label className="form-label">
        REASON FOR ADMISSION
        <textarea className="form-textarea" value={reasonForAdmission} onChange={(e) => setReasonForAdmission(e.target.value)} />
      </label>
      <br />
      <label className="form-label">
        LAST VISIT/CALL
        <input className="form-input" type="date" value={lastVisitDate} onChange={(e) => setLastVisitDate(e.target.value)} />
      </label>
      <br />
      <label className="form-label">
        FAMILY DETAILS
        <textarea className="form-textarea" value={familyDetails} onChange={(e) => setFamilyDetails(e.target.value)} />
      </label>
      <br />
      <label className="form-label">
        SHELTER HOME SINCE
        <input className="form-input" type="date" value={shelterHomeSinceDate} onChange={(e) => setShelterHomeSinceDate(e.target.value)} />
      </label>
      <br />
      <label className="form-label">
        SHELTER HOME NAME
        <input className="form-input" type="text" value={shelterHomeName} onChange={(e) => setShelterHomeName(e.target.value)} />
      </label>
      <br />
      <label className="form-label">
        CASE DETAILS (if any)
        <textarea className="form-textarea" value={caseDetails} onChange={(e) => setCaseDetails(e.target.value)} />
      </label>
      <br />
      <label className="form-label">
        ASSIGNED TO
        <select className="form-select" value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)}>
          <option value="">Select Assigned To</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
      </label>
      <br />
      <div className="submit-container">
      <button className="submit-button" type="submit">Submit</button>
    </div>
    </form>
    </div>
    </div>
  );
};

export default Caseallotment;


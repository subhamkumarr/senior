import React, { useState } from 'react';
import './viewcasepending.css'
import logo from '../../assets/logo.png';
import { BiSearch} from 'react-icons/bi'
// import image1 from '../../assets/image1.png';


const Viewcasepending = () => {
    // Sample data for the table
    const tableData = [
        { caseId: 1, childName: 'John Doe', category: 'Category 1', pendingStep: 'Step 1' },
        { caseId: 2, childName: 'Jane Smith', category: 'Category 2', pendingStep: 'Step 2' },
        { caseId: 3, childName: 'Jane Smith', category: 'Category 3', pendingStep: 'Step 3' },
        { caseId: 3, childName: 'Jane Smith', category: 'Category 3', pendingStep: 'Step 3' },
        { caseId: 3, childName: 'Jane Smith', category: 'Category 3', pendingStep: 'Step 3' },
        { caseId: 3, childName: 'Jane Smith', category: 'Category 3', pendingStep: 'Step 3' },
        { caseId: 3, childName: 'Jane Smith', category: 'Category 3', pendingStep: 'Step 3' },
        { caseId: 3, childName: 'Jane Smith', category: 'Category 3', pendingStep: 'Step 3' },


        // Add more data objects as needed
      ];


    const [selectedOption, setSelectedOption] = useState('');

    // Sample data for the dropdown menu
    const dropdownOptions = [
      'Option 1',
      'Option 2',
      'Option 3',
      // Add more options as needed
    ];
  
    return (
      <div>
      <nav className="navbar">
        <div className="logo-container">
          <img className="logo" src={logo} alt="Logo" />
        </div>
      </nav>
  
      <div className="container">
        <div className="view-case">
          <span>View Case:</span>
          <select
            id="dropdown"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="">Pending</option>
            {dropdownOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
  
          <div className="search-bar">
            <input type="text" placeholder="Search by Child Name" />
            {/* <img src={searchIcon} alt="Search" className="search-icon" /> */}
            <BiSearch className="search-icon" />
          </div>
  
          <table className="table">
            <thead>
              <tr>
                <th>Case ID</th>
                <th>Child Name</th>
                <th>Category</th>
                <th>Pending Step</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.caseId}</td>
                  <td>{row.childName}</td>
                  <td>{row.category}</td>
                  <td>{row.pendingStep}</td>
                </tr>
              ))}
            </tbody>
          </table>
  
          <div className="buttons">
            <button>Back</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    );
  };
  

export default Viewcasepending;
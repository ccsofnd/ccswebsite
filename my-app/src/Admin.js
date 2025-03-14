import './Admin.css';
import React, { useState } from 'react';

const Admin = () => {
  
  // State to manage password input and authentication status
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);   // change to false for password functionality

  // Password to access the admin page (this is hardcoded, you can use an environment variable or backend logic)
  const correctPassword = 'asdf';

  // Function to handle password submission
  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div className="admin">
      { isAuthenticated ? (
        <div>
          <h2>Admin Stuff</h2>
          <d1>The designers of this website</d1>
          <div class="image-container">
            <img src="/ron.jpg" alt="A cute cat" width="300" height="200"></img>
            <img src="/cody.jpg" alt="A cute cat" width="200" height="250"></img>
            <img src="/cute-dragon-omocat.gif" alt="A cute charmander" width="300" height="300"></img>
          </div>
          <d1>Important Stuff for Board Members:</d1>
          <li><a href="https://docs.google.com/spreadsheets/d/1Lry2lYUy9xDSLo9XxeeCrsQGXDA6Ze4-8SRGluJSngE/edit?gid=1413208263#gid=1413208263">LINK FOR TREASURER</a></li>
          <a href="mailto:dshi2@nd.edu,eguo2@nd.edu,ccs@nd.edu?subject=Reimbursement%20Request&body=NETID:%0D%0ANDID:%0D%0AEVENT:%0D%0A">REQUEST REIMBUREMENT FOR OTHER BOARD MEMBERS</a>
        </div>
      ) : ( 
        <><form onSubmit={handlePasswordSubmit}>
        <input
          type="password" // This makes the input field a password field
          placeholder="Password" // Placeholder text to prompt the user
          value={password} // Binds the input value to the password state
          onChange={(e) => setPassword(e.target.value)} // Updates state when user types
          required // Ensures the field is not left empty
        />
        <button type="submit">Submit</button>
        </form></>
      )}
      </div>
      
  );
};

export default Admin;
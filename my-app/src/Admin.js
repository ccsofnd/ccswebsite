import './Admin.css';
import React from 'react';

const Admin = () => {
  return (
    <div className="admin">
      <h2>Admin Stuff</h2>
      <d1>The designers of this website</d1>
      <img src="/ron.jpg" alt="A cute cat" width="300" height="200"></img>
      <img src="/cute-dragon-omocat.gif" alt="A cute charmander" width="300" height="300"></img>
      <d1>Important Stuff for Board Members</d1>
      <li><a href="https://nd.qualtrics.com/jfe/form/SV_9SRtKEKlqbzrInc">REIMBURSEMENT REQUEST</a></li>
    </div>
  );
};

export default Admin;
import React from 'react';
import './Links.css'
import CCSLogo from './svg-logos/CCSLogo.js';
import Payment from './svg-logos/Payment.js';
import Calendar from './svg-logos/Calendar.js';
const Links = () => {
  const logosize = '100px'
  return (
    <div className="text-center">
      <h2>Home Page</h2>
      <p >Welcome to the home page! Here are some useful links:</p>
      <ul>
        <li><Payment width={logosize} height={logosize} /><a href="https://shop.nd.edu/C21688_ustores/web/product_detail.jsp?PRODUCTID=12029&SINGLESTORE=true" target="_blank" rel="noopener noreferrer">PAY DUES</a></li>
        <li><Calendar width={logosize} height={logosize} /><a href="https://calendar.google.com/calendar/u/0?cid=Y18yMzk4ZGQ2NmY2MDE0NWZjYzg4NmI5MWI4MzkxNzIyMGEwOTkyMTcyMWE1Zjg2ZGU3OTkyZGQ1ODczYjYyYTA3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20" target="_blank" rel="noopener noreferrer">EVENT CALENDAR</a></li>
        <li><img src='/Group.JPG' alt='' width={logosize} height={logosize} /><a href="https://groupme.com/join_group/102941123/BXXcsjml" target="_blank" rel="noopener noreferrer">GROUPME</a></li>
        <li><CCSLogo width={logosize} height={logosize} /><a href="https://www.example4.com" target="_blank" rel="noopener noreferrer">Example Link 4</a></li>
      </ul>
      <p>
        Contact Information: ccs@nd.edu
      </p>
    </div>
  );
};

export default Links;
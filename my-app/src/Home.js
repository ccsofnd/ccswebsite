import React from 'react';
import './Home.css'
// import CCSLogo from './svg-logos/CCSLogo.js';
import Payment from './svg-logos/Payment.js';
import Calendar from './svg-logos/Calendar.js';
import Instagram from './svg-logos/Instagram.js';
const Links = () => {
  const logosize = '100px'
  return (
    <div className="text-center">
      <h2>CHINESE CULTURAL SOCIETY</h2>
      <p className="home-page-text">Welcome to the home page for the Chinese Culture Society at Notre Dame,
        a student ran organization that promotes Chinese culture specifically
        through the lens of Chinese-Americans.<br /><br />We host numerous
        events throughout the year including mahjong game nights, hot pot dinners, and dumpling making</p>

      <p>Here are some useful links:</p>
      <ul>
        <li>
          <a
            href="https://shop.nd.edu/C21688_ustores/web/product_detail.jsp?PRODUCTID=12029&SINGLESTORE=true" 
            target="_blank" 
            rel="noopener noreferrer">
            <div>
              <Payment width={logosize} height={logosize} />
              <span style={{ display: 'block', marginTop: '8px' }}>PAY DUES</span>
            </div>
          </a>
        </li>

        <li>
          <a 
            href="https://calendar.google.com/calendar/u/0?cid=Y18yMzk4ZGQ2NmY2MDE0NWZjYzg4NmI5MWI4MzkxNzIyMGEwOTkyMTcyMWE1Zjg2ZGU3OTkyZGQ1ODczYjYyYTA3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20" 
            target="_blank" 
            rel="noopener noreferrer">
            <div>
              <Calendar width={logosize} height={logosize} />
              <span style={{ display: 'block', marginTop: '8px' }}>EVENT CALENDAR</span>
            </div>
          </a>
        </li>

        <li>
          <a 
            href="https://groupme.com/join_group/102941123/BXXcsjml" 
            target="_blank" 
            rel="noopener noreferrer">
            <div>
              <img src='/Group.JPG' alt='' width={logosize} height={logosize} />
                <span style={{ display: 'block', marginTop: '8px' }}>GROUPME</span>
            </div>
          </a>
        </li>

        {/* <li><CCSLogo width={logosize} height={logosize} /><a href="https://www.example4.com" target="_blank" rel="noopener noreferrer">Example Link 4</a></li> */}

        <li>
          <a 
            href="https://www.instagram.com/ccsofnd/" 
            target="_blank" 
            rel="noopener noreferrer">
            <div>
              <Instagram width={logosize} height={logosize} />
              <span style={{ display: 'block', marginTop: '8px' }}>INSTAGRAM</span>
            </div>
          </a>
        </li>
      </ul>
      <h1>CCS SHOWCASE 2025</h1>
      <div className="zodiacts">
        <img src="/Zodiacts.jpg" id="zodiacts-img" />
      </div>
    </div>
  );
};

export default Links;
import React from 'react';
import './Links.css'
const Links = () => {
  return (
    <div className="text-center">
      <h2>Home Page</h2>
      <p >Welcome to the home page! Here are some useful links:</p>
      <ul>
        <li><a href="https://shop.nd.edu/C21688_ustores/web/product_detail.jsp?PRODUCTID=12029&SINGLESTORE=true" target="_blank" rel="noopener noreferrer">PAY DUES HERE</a></li>
        <li><a href="https://calendar.google.com/calendar/u/0?cid=Y18yMzk4ZGQ2NmY2MDE0NWZjYzg4NmI5MWI4MzkxNzIyMGEwOTkyMTcyMWE1Zjg2ZGU3OTkyZGQ1ODczYjYyYTA3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20" target="_blank" rel="noopener noreferrer">GET EVENT CALENDAR HERE</a></li>
        <li><a href="https://groupme.com/join_group/102941123/BXXcsjml" target="_blank" rel="noopener noreferrer">JOIN GROUPME HERE</a></li>
        <li><a href="https://www.example4.com" target="_blank" rel="noopener noreferrer">Example Link 4</a></li>
      </ul>
    </div>
  );
};

export default Links;
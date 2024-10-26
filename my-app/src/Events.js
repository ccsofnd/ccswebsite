import React from 'react';

const Events = () => {
  return (
    <div>
        <h2>
            Maybe we can have an embedded google calendar api but as of now...
        </h2>
        <img src="/ron.jpg" alt="A cute cat" width="300" height="200"></img>
        {/* Embed Google Calendar */}
        <iframe src="https://calendar.google.com/calendar/embed?src=c_2398dd66f60145fcc886b91b83917220a09921721a5f86de7992dd5873b62a07%40group.calendar.google.com&ctz=America%2FLos_Angeles" 
        style="border: 0" width="800" height="600" frameborder="0">
          
        </iframe>
    </div>

  );
};

export default Events;
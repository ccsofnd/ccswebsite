import React from 'react';
import './Events.css'
const Events = () => {
  return (
    <div className="text-center">
        <h2>
            Calendar of events
        </h2>
        
        {/* Embed Google Calendar */}
        <iframe src="https://calendar.google.com/calendar/embed?src=c_2398dd66f60145fcc886b91b83917220a09921721a5f86de7992dd5873b62a07%40group.calendar.google.com&ctz=America%2FLos_Angeles" 
        style={{ border: '0', width: '800px', height: '600px', overflow: 'auto' }} 
        
        title="Google Calendar">

          
        </iframe>
    </div>

  );
};

export default Events;
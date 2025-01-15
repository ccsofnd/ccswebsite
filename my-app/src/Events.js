import React from 'react';
import './Events.css'
const Events = () => {
  return (
    <div className="text-center">
      <h2>
        Calendar of events
      </h2>
      <div className="calendar-container">
        {/* Embed Google Calendar */}
        <iframe src="https://calendar.google.com/calendar/embed?src=c_2398dd66f60145fcc886b91b83917220a09921721a5f86de7992dd5873b62a07%40group.calendar.google.com&ctz=America/New_York"
          style={{ border: '0', overflow: 'auto', maxWidth: '800px' }}

          title="Google Calendar">


        </iframe>
      </div>
    </div>

  );
};

export default Events;
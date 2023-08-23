import React from "react";
import ReactDOM from "react-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment);
const bookings = [
  {
    start: new Date(),
    end: new Date(),
    title: `Ola Stay (Human:)`
  }
];

const MyBookingCalendar = () => (
  <div>
    <Calendar
      onSelectEvent={(e) => {
        console.log(e);
      }}
      onSelecting={() => alert(312321)}
      localizer={localizer}
      events={bookings}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);

ReactDOM.render(<MyBookingCalendar />, document.getElementById("app"));

jsx:-
import React, { useState } from "react";

const events = [
  { id: 1, title: "Tech Conference", date: "Dec 10", description: "Emerging technologies." },
  { id: 2, title: "Music Festival", date: "Dec 15", description: "Live performances." }
];

const EventModal = ({ event, onClose }) => {
  if (!event) return null;
  return (
    <div>
      <h3>{event.title}</h3>
      <p>{event.date}</p>
      <p>{event.description}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default function EventPortal() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div>
      {events.map(e => (
        <div key={e.id} onClick={() => setSelectedEvent(e)}>
          <h4>{e.title}</h4>
          <p>{e.date}</p>
        </div>-
      ))}
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
}

import { useState, useEffect } from "react";
import axios from "axios";

function MyScheduleTrips({ userId }) {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    // fetch the user's trips on component mount
    async function fetchTrips() {
      try {
        const response = await axios.get(`/api/trips?userId=${userId}`);
        setTrips(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchTrips();
  }, [userId]);

  return (
    <div>
      <h1>My Scheduled Trips</h1>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            <h2>{trip.title}</h2>
            <p>Location: {trip.location}</p>
            <p>Start Date: {trip.startDate}</p>
            <p>End Date: {trip.endDate}</p>
            <p>Budget: {trip.budget}</p>
            <p>Notes: {trip.notes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyScheduleTrips;

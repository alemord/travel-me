import { useState, useEffect } from "react";
import axios from "axios";

function MyScheduleTrips({ userId }) {
  const [trips, setTrips] = useState([]);
  const [editingTrip, setEditingTrip] = useState(null);

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

  async function handleDeleteTrip(tripId) {
    try {
      await axios.delete(`/api/trips/${tripId}`);
      setTrips(trips.filter((trip) => trip._id !== tripId));
    } catch (error) {
      console.error(error);
    }
  }

  function handleEditTrip(trip) {
    setEditingTrip(trip);
  }

  async function handleUpdateTrip(e) {
    e.preventDefault();

    try {
      const response = await axios.put(`/api/trips/${editingTrip._id}`, {
        title: editingTrip.title,
        location: editingTrip.location,
        startDate: editingTrip.startDate,
        endDate: editingTrip.endDate,
        budget: editingTrip.budget,
        notes: editingTrip.notes,
      });

      setTrips(
        trips.map((trip) =>
          trip._id === response.data._id ? response.data : trip
        )
      );
      setEditingTrip(null);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>My Scheduled Trips</h1>
      <ul>
        {trips.map((trip) => (
          <li key={trip._id}>
            <h2>{trip.title}</h2>
            <p>Location: {trip.location}</p>
            <p>Start Date: {trip.startDate}</p>
            <p>End Date: {trip.endDate}</p>
            <p>Budget: {trip.budget}</p>
            <p>Notes: {trip.notes}</p>
            <button onClick={() => handleDeleteTrip(trip._id)}>Delete</button>
            <button onClick={() => handleEditTrip(trip)}>Edit</button>
          </li>
        ))}
      </ul>
      {editingTrip && (
        <form onSubmit={handleUpdateTrip}>
          <input
            type="text"
            value={editingTrip.title}
            onChange={(e) =>
              setEditingTrip({ ...editingTrip, title: e.target.value })
            }
          />
          <input
            type="text"
            value={editingTrip.location}
            onChange={(e) =>
              setEditingTrip({ ...editingTrip, location: e.target.value })
            }
          />
          <input
            type="date"
            value={editingTrip.startDate}
            onChange={(e) =>
              setEditingTrip({ ...editingTrip, startDate: e.target.value })
            }
          />
          <input
            type="date"
            value={editingTrip.endDate}
            onChange={(e) =>
              setEditingTrip({ ...editingTrip, endDate: e.target.value })
            }
          />
          
          <input
            type="number"
            value={editingTrip.budget}
            onChange={(e) =>
              setEditingTrip({ ...editingTrip, budget: e.target.value })
            }
            />
          
          <button type="submit">Update Trip</button>
        </form>
      )}
    </div>
  );
}

export default MyScheduleTrips;

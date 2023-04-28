import { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function NewTripPage() {
  const [budget, setBudget] = useState("");
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [userId, setUserId] = useState("");  
  const [formErrors, setFormErrors] = useState({});
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    // fetch the list of trips on component mount
    async function fetchTrips() {
      try {
        const response = await axios.get("/orders/new");
        setTrips(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchTrips();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // validate the form data
    const errors = {};
  
    if (!location) {
      errors.location = "Location is required";
    }
  
    if (!startDate) {
      errors.startDate = "Start date is required";
    }
  
    if (!endDate) {
      errors.endDate = "End date is required";
    }
  
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
  
    try {
      const response = await axios.post("/api/trips", {
        budget,
        location,
        title,
        startDate,
        endDate,
        notes,
        userId,
      });
  
      console.log(response.data); // log the newly created trip object
      setTrips([...trips, response.data]); // add the new trip to the array
  
      // clear the form data
      setBudget("");
      setLocation("");
      setTitle("");
      setStartDate(new Date());
      setEndDate(new Date());
      setNotes("");
      setFormErrors({});
    } catch (error) {
      console.error(error);
    }
  };
  



  return (
<div className="container">
        <h1>Add & Schedule Your Trip</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Trip Details</legend>
          <div>
            <label htmlFor="budget">Budget:</label>
            <input
              type="text"
              id="budget"
              value={budget}
              onChange={(event) => setBudget(event.target.value)}
            />
            {formErrors.budget && (
              <div className="error">{formErrors.budget}</div>
            )}
          </div>
          <div>
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
            {formErrors.location && (
              <div className="error">{formErrors.location}</div>
            )}
          </div>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            {formErrors.title &&
(
  <div className="error">{formErrors.title}</div>
  )}
  </div>
  <div>
  <label htmlFor="startDate">Start Date:</label>
  <DatePicker
  id="startDate"
  selected={startDate}
  onChange={(date) => setStartDate(date)}
  dateFormat="dd/MM/yyyy"
  />
  {formErrors.startDate && (
  <div className="error">{formErrors.startDate}</div>
  )}
  </div>
  <div>
  <label htmlFor="endDate">End Date:</label>
  <DatePicker
  id="endDate"
  selected={endDate}
  onChange={(date) => setEndDate(date)}
  dateFormat="dd/MM/yyyy"
  />
  {formErrors.endDate && (
  <div className="error">{formErrors.endDate}</div>
  )}
  </div>
  <div>
  <label htmlFor="notes">Notes:</label>
  <textarea
  id="notes"
  value={notes}
  onChange={(event) => setNotes(event.target.value)}
  />
  </div>
  <div>
  <input type="submit" value="Add Trip" />
  </div>
  </fieldset>
  </form>
  </div>
  );
  }
  
  export default NewTripPage;
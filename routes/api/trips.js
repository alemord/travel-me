const express = require("express");
const router = express.Router();

// import the Trip model
const Trip = require("../../models/Trip");

// route to create a new trip
router.post("/", async (req, res) => {
  try {
    const { budget, location, title, startDate, endDate, notes } = req.body;
    const newTrip = new Trip({ budget, location, title, startDate, endDate, notes });
    await newTrip.save();
    res.status(201).json(newTrip);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// route to get all trips
router.get("/", async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//  get a specific trip by ID
router.get("/:id", async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);
    if (!trip) {
      return res.status(404).json({ msg: "Trip not found" });
    }
    res.json(trip);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Trip not found" });
    }
    res.status(500).send("Server Error");
  }
});

// update a trip by ID
router.put("/:id", async (req, res) => {
  try {
    const trip = await Trip.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!trip) {
      return res.status(404).json({ msg: "Trip not found" });
    }
    res.json(trip);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Trip not found" });
    }
    res.status(500).send("Server Error");
  }
});

// delete a trip by ID
router.delete("/:id", async (req, res) => {
  try {
    const trip = await Trip.findByIdAndDelete(req.params.id);
    if (!trip) {
      return res.status(404).json({ msg: "Trip not found" });
    }
    res.json({ msg: "Trip deleted" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Trip not found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;

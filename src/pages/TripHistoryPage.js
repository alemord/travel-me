import { useState } from "react";
import "./TripHistoryPage.css";


function TripHistoryPage() {
  const [city, setCity] = useState("");

  const cities = [
    {
      name: "Paris",
      image: "https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075__340.jpg",
      description: "The City of Light",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Paris",
    },
    {
      name: "Tokyo",
      image: "https://t4.ftcdn.net/jpg/02/51/12/11/360_F_251121174_5xQyUCqSrkswyLHbM9Ne8DQ8Qb0o1HGw.jpg",
      description: "The Land of the Rising Sun",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Tokyo",
    },
    {
      name: "New York",
      image: "https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?cs=srgb&dl=pexels-roberto-vivancos-2190283.jpg&fm=jpg",
      description: "The City That Never Sleeps",
      wikipediaUrl: "https://en.wikipedia.org/wiki/New_York_City",
    },
    {
      name: "London",
      image: "https://media.istockphoto.com/id/1265900812/photo/aerial-view-of-london-and-the-tower-bridge.jpg?s=612x612&w=0&k=20&c=-2j6QgZyeveMcGzuWmgLYqC7zXTkcSBnayuZsDqs5KQ=",
      description: "The Foggy Capital",
      wikipediaUrl: "https://en.wikipedia.org/wiki/London",
    },
    {
      name: "Barcelona",
      image: "https://www.fodors.com/wp-content/uploads/2022/03/Hero-UPDATEBarcelona-iStock-1320014700-1.jpg",
      description: "The City of Gaudi",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Barcelona",
    },
    {
      name: "Rome",
      image: "https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs=",
      description: "The Eternal City",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Rome",
    },
    {
      name: "Dubai",
      image: "https://media.istockphoto.com/id/467829216/photo/dubai-marina.jpg?s=612x612&w=0&k=20&c=5KNh7wGSoP9i-UJzT-LtUfXgLHKKoBlPAK67R0LHRQY=",
      description: "The City of Gold",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Dubai",
    },
    {
      name: "Singapore",
      image: "https://media.istockphoto.com/id/491056644/photo/singapore-skyline-cityscape-at-night.jpg?s=612x612&w=0&k=20&c=kdXYIXNV-8WM3ZOeBCS2JLgrqbTbV6YUWDFIHFThwwk=",
      description: "The Lion City",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Singapore",
    },
    {
      name: "Sydney",
      image: "https://www.orangesmile.com/common/img_cities_original/sydney--1603135-1.jpg",
      description: "The Harbour City",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Sydney",
    },
    {
      name: "Rio de Janeiro",
      image: "https://media.istockphoto.com/id/534215078/photo/rio-de-janeiro-aerial.jpg?s=612x612&w=0&k=20&c=thNSIlO9vpW63UD8nunQYC2wia3nnwEPlW7fXlTmlJo=",
      description: "The Marvelous City",
      wikipediaUrl: "https://en.wikipedia.org/wiki/RiodeJaneiro",
    },
    {
      name: "Florence",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzcMo539-tFqKT_0Ohd-MUP_uWEjqrisxv2QQH9EvRFw&s",
      description: "The Birthplace of the Renaissance",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Florence",
      },
      {
      name: "Lima",
      image: "https://lp-cms-production.imgix.net/features/2018/04/Lima_coast_peru-c38ff3c151fb.jpg",
      description: "The City of Kings",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Lima",
      },
  ];

  return (
    <div className="trip-history-container">
      <h1 className="title">Explore Destinations</h1>
      <form
  onSubmit={(e) => {
    e.preventDefault();
    window.open(`https://www.google.com/search?q=${city}`, "_blank");
  }}
>
  <input
    type="text"
    value={city}
    onChange={(e) => setCity(e.target.value)}
    placeholder="Search City/Country"
  />
  <button type="submit">Search</button>
</form>
      <div className="city-container">
        {cities.map((city, index) => (
          <div className="city-card" key={index}>
            <img className="city-image" src={city.image} alt={city.name} />
            <div className="city-info">
              <h2>{city.name}</h2>
              <p>{city.description}</p>
              <a href={city.wikipediaUrl} target="_blank" rel="noopener noreferrer">Learn more...</a>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default TripHistoryPage;

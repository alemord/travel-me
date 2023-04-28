import { Link } from "react-router-dom";
import { logOut } from "../utilities/users-service";
import './NavBar.css';

function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  return (
    <nav className="navbar">
      <img src="https://www.eu-startups.com/wp-content/uploads/2014/08/tripme-logo.jpg" alt="Logo" />
            <span></span>

      <Link to="/orders" className="navbar__link">
        Explore Destinations
      </Link>
      <span>|</span>

      <Link to="/orders/new" className="navbar__link">
     Plan Your Travels
      </Link>{" "}
      <span>|</span>
      <Link to="/orders/saved" className="navbar__link">
     My Scheduled Trips
      </Link>{" "}
      <span>|</span>
      <span className="navbar__greeting">Ciao and Welcome, {user.name}</span>{" "}
      <Link to="" onClick={handleLogOut} className="navbar__link">
        Logout
      </Link>
    </nav>
  );
}

export default NavBar;

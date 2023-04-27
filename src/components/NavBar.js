import { Link } from "react-router-dom";
import { logOut } from "../utilities/users-service";

function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  return (
    <nav>
      <Link to="/orders">Explore</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">My Future Trips</Link> <span>Ciao and Welcome, {user.name}</span>!{" "}
      <Link to="" onClick={handleLogOut}>
        Logout
      </Link>
    </nav>
  );
}

export default NavBar;

import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Recipe Book</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/add-recipe">Add Recipe</Link>
        <button className="btn btn-outline-info me-5" onClick={onLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;


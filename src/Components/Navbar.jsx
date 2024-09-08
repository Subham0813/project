import PropTypes from "prop-types";
import './Navbar.css'


const Navbar = ({ image }) => {
  return (
    <>
    <nav className="navbar">
    <div className="container">
      
     <img src={image} alt="" className="navbar-brand"/>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Collections</a></li>
        <li><a href="#">Stories</a></li>
        <li><a href="#">Contact us</a></li>
      </ul>
      
    </div>
  </nav>
    </>
  );
}

Navbar.propTypes = {
    image: PropTypes.any,
}

export default Navbar;

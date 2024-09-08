import PropTypes from "prop-types";
import "./Navbar.css";

const Navbar = ({ image }) => {
  return (
    <>
      <nav className="container">
        <img src={image} alt="" className="navbar-brand" />
        <ul className="nav-menu">
          <li id="wrapper">
            <a href="#">Home</a>
          </li>
          <li id="wrapper">
            <a href="#">Collections</a>
          </li>
          <li id="wrapper">
            <a href="#">Stories</a>
          </li>
          <li id="wrapper">
            <a href="#">Contact us</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  image: PropTypes.any,
};

export default Navbar;

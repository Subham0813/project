import "./Footer.css";

function Footer() {
  return (
    <footer>
        <div className="col-md-4">
          <h5>Contact Hub</h5>
          <ul className="content">
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Book an appointment</a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Navigation</h5>
          <ul className="content">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Collection</a>
            </li>
            <li>
              <a href="#">Article</a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>About devs.</h5>
          <ul className="content">
            <li>
              <a href="#">dev1</a>
            </li>
            <li>
              <a href="#">dev2</a>
            </li>
          </ul>
        </div>
        
      <div className="row">
        <div className="col-md-12">
          <ul className="social-media">
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

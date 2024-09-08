
function Footer() {
  return (
    <footer>
      <div className="foot">
        <div className="row">
          <div className="col-md-4">
            <h3>Contact Hub</h3>
            <ul>
              <li>Contact us</li>
              <li>Book an appointment</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Navigation</h3>
            <ul>
              <li>Home</li>
              <li>Collection</li>
              <li>Article</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>About devs.</h3>
            <ul>
              <li>dev1</li>
              <li>dev2</li>
            </ul>
          </div>
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
      </div>
    </footer>
  );
}

export default Footer;
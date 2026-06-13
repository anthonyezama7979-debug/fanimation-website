import "../App.css";

function Footer() {
  return (
    <footer className="footer" id="support">
      <div className="footer-container">

        <div className="footer-left">
          <h2>Fanimation</h2>

          <p>10983 Bennett Parkway</p>
          <p>Zionsville, IN 46077</p>
          <p>Phone: 888.567.2055</p>
          <p>Fax: 866.482.5215</p>

          <p className="footer-text">
            Enter your email address below to receive periodic
            communication from Fanimation.
          </p>
        </div>

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">2026 Catalog</a>
          <a href="#">Smart Controls</a>
          <a href="#">Choosing a Fan</a>
          <a href="#">Blog</a>
          <a href="#">Antique Fan Museum</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-links">
          <a href="#">Product Support</a>
          <a href="#">Product Registration</a>
          <a href="#">Find an Authorized Dealer</a>
          <a href="#">Sales Agent Locator</a>
          <a href="#">Dealer Portal</a>
          <a href="#">Sales Agency Portal</a>
          <a href="#">Warranty</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">Careers</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
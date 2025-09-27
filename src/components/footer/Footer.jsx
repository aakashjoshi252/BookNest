import { NavLink } from "react-router-dom";
import { 
  FaFacebook, FaInstagram, FaTwitter, FaPinterest, 
  FaLinkedin, FaYoutube, FaGithub, FaWhatsapp 
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row">
          {/* About */}
          <div className="col-md-3 mb-4">
            <h5>About Us</h5>
            <p>
              RESTRO has been serving book lovers since 1995. 
              We're passionate about connecting readers with great books.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><NavLink to="/" className="text-light text-decoration-none">Home</NavLink></li>
              <li><NavLink to="/books" className="text-light text-decoration-none">Books</NavLink></li>
              <li><NavLink to="/about" className="text-light text-decoration-none">About</NavLink></li>
              <li><NavLink to="/contact" className="text-light text-decoration-none">Contact</NavLink></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-md-3 mb-4">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li><NavLink to="/faq" className="text-light text-decoration-none">FAQs</NavLink></li>
              <li><NavLink to="/policy" className="text-light text-decoration-none">Shipping Policy</NavLink></li>
              <li><NavLink to="/policy" className="text-light text-decoration-none">Returns</NavLink></li>
              <li><NavLink to="/policy" className="text-light text-decoration-none">Privacy Policy</NavLink></li>
              <li><NavLink to="/blog" className="text-light text-decoration-none">Blog</NavLink></li>
            </ul>
          </div>

          {/* Social + Contact */}
          <div className="col-md-3 mb-4">
            <h5>Connect With Us</h5>
            <div className="d-flex gap-3 fs-4 mb-3">
              <a href="#" aria-label="Facebook" className="text-light"><FaFacebook /></a>
              <a href="#" aria-label="Instagram" className="text-light"><FaInstagram /></a>
              <a href="#" aria-label="Twitter" className="text-light"><FaTwitter /></a>
              <a href="#" aria-label="Pinterest" className="text-light"><FaPinterest /></a>
              <a href="#" aria-label="LinkedIn" className="text-light"><FaLinkedin /></a>
              <a href="#" aria-label="YouTube" className="text-light"><FaYoutube /></a>
              <a href="#" aria-label="GitHub" className="text-light"><FaGithub /></a>
              <a href="#" aria-label="WhatsApp" className="text-light"><FaWhatsapp /></a>
            </div>
            <p className="mb-0">
              123 Book Street <br />
              Literary City, LC 12345 <br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>

        <hr className="border-light" />
        <div className="text-center" style={{ height: "0.5px" }}>
          © {new Date().getFullYear()} RESTRO Bookstore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

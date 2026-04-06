import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer_simple">
      <div className="footer_links">
        <Link to="#">Terms</Link>
        <Link to="#">Privacy</Link>
        <Link to="#">Help</Link>
        <Link to="#">Cookies</Link>
      </div>
      <div className="footer_bottom">
        <p>&copy; 2026 ClickCart. All rights reserved.</p>
        <p>
          Built by{" "}
          <Link
            to="https://portfolio-nebiyu.vercel.app/"
            target="_blank"
            className="footer_author_link"
          >
            Nebiyu T Nadew
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

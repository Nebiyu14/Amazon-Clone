import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer__page__container">
        <div className="footer__page__shortcuts__links">
          <div className="footer__page__box">
            <strong>Get To Know Us</strong>
            <ul>
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Careers</Link>
              </li>
              <li>
                <Link to="#">Press Releases</Link>
              </li>
              <li>
                <Link to="#">Amazon Science</Link>
              </li>
            </ul>
          </div>

          <div className="footer__page__box">
            <strong>Connect With Us</strong>
            <ul>
              <li>
                <Link to="#">Facebook</Link>
              </li>
              <li>
                <Link to="#">X</Link>
              </li>
              <li>
                <Link to="#">Instagram</Link>
              </li>
            </ul>
          </div>

          <div className="footer__page__box">
            <strong>Make Money With Us</strong>
            <ul>
              <li>
                <Link to="#">Sell On Amazon</Link>
              </li>
              <li>
                <Link to="#">Affiliate Program</Link>
              </li>
              <li>
                <Link to="#">Advertise</Link>
              </li>
              <li>
                <Link to="#">Self-Publish</Link>
              </li>
            </ul>
          </div>

          <div className="footer__page__box">
            <strong>Let Us Help You</strong>
            <ul>
              <li>
                <Link to="#">Your Account</Link>
              </li>
              <li>
                <Link to="#">Shipping Rates</Link>
              </li>
              <li>
                <Link to="#">Returns Centre</Link>
              </li>
              <li>
                <Link to="#">Help</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__page__bottom__container">
        <div className="footer__page__botton__part">
          <div className="footer__page__terms__conditions">
            <p>Condition of Use</p>
            <p>Privacy Notice</p>
            <p>Consumer Health Data Privacy Disclosure</p>
            <p>Your Ads Privacy Choices</p>
          </div>
          <div className="footer__page__company">
            <p>&copy;1996-2026, Amazon.com, Inc - Clone</p>
          </div>
          <div className="footer__page__author">
            <p>
              Built By{" "}
              <Link to="https://github.com/Nebiyu14/" target="_blank">
                Nebiyu Tesfaye Nadew
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

import React from "react";
import "./subHeader.css";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Subheader() {
  return (
    <div>
      {" "}
      <div className="sub__header__container">
        <div className="sub__header__leftside">
          <GiHamburgerMenu />
          <p>
            <strong>All</strong>
          </p>
        </div>
        <div className="sub__header__rightside">
          <ul>
            <li>Today's Deals</li>
            <li>Customer Services</li>
            <li>Registery</li>
            <li>Gift Cards</li>
            <li>Prime Video</li>
            <li>Sell</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

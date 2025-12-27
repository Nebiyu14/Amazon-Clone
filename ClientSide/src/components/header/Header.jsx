import "./header.css";
import React from "react";
import logo from "../../assets/Images/logo_amazon.png";
import { CiLocationOn } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { MdSearch } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Subheader from "./Subheader";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header__container">
        <div className="header__leftside">
          <GiHamburgerMenu className="header__hamburger" />
          <Link to="/">
            <img src={logo} alt="Amazon_Logo" className="header__logo" />
          </Link>
          <div className="header__delivery">
            <CiLocationOn size={24} />
            <small>
              Deliver to <br className="delivery__break" />
              <strong>Poland</strong>
            </small>
          </div>
        </div>
        <div className="header__searchBox">
          <div className="searchBox__category">
            <select name="" id="">
              <option value="">All</option>
            </select>
          </div>
          <div className="header__inputField">
            <input type="text" placeholder="Search Amazon" />
          </div>
          <div className="header__searchIcon">
            <MdSearch size={24} className="searchIcon" />
          </div>
        </div>
        <div className="header__rightside">
          <div className="header__language">
            <img src="https://flagcdn.com/w20/us.png" alt="English" />
            <span>EN</span>
            <MdOutlineArrowDropDown />
          </div>
          <Link to="/signin">
            <div className="header__account">
              <p>
                Hello, sign in <br />
                <strong>Account & Lists</strong>
              </p>
              <MdOutlineArrowDropDown />
            </div>
          </Link>
          <Link to={"/orders"}>
            <div className="header__return__orders">
              <p>
                Returns <br />
                <strong>& Orders</strong>
              </p>
            </div>
          </Link>
          <Link to={"/cart"}>
            <div className="header__cart">
              <FiShoppingCart size={24} className="cartIcon" />
              <p>Cart</p>
              <strong>0</strong>
            </div>
          </Link>
        </div>
      </div>
      <Subheader />
    </>
  );
}

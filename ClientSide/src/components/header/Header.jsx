import "./header.css";
import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { MdSearch } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Subheader from "./Subheader";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";

export default function Header() {
  const { cartItemCount } = useCart();
  const { user, signout, isLoading } = useAuth();
  const currentUserNameEmail = user?.email;

  return (
    <div className="header_sticky">
      <div className="header__container">
        <div className="header__leftside">
          <GiHamburgerMenu className="header__hamburger" />
          <Link to="/">
            <div className="header__logo">
              <span className="logo__click">Click</span>
              <span className="logo__cart">Cart</span>
            </div>
          </Link>
        </div>
        <div className="header__searchBox">
          <div className="header__inputField">
            <input type="text" placeholder="Search ClickCart" />
          </div>
          <div className="header__searchIcon">
            <MdSearch size={24} className="searchIcon" />
          </div>
        </div>
        <div className="header__rightside">
          <Link to={!user && "/signin"}>
            <div className="header__account">
              <p>
                Welcome, <span>{user ? currentUserNameEmail : "Guest"}</span>
                <br />
                <strong>My Account</strong>
              </p>
              <MdOutlineArrowDropDown />
              {user && (
                <strong className="header__logout" onClick={signout}>
                  Sign Out
                </strong>
              )}
            </div>
          </Link>
          <Link to={"/orders"}>
            <div className="header__orders">
              <p>
                My <br />
                <strong>Orders</strong>
              </p>
            </div>
          </Link>
          <Link to={"/cart"}>
            <div className="header__cart">
              <FiShoppingCart size={24} className="cartIcon" />
              <p>Cart</p>
              <strong className="header__cart__count">{cartItemCount}</strong>
            </div>
          </Link>
        </div>
      </div>
      <Subheader />
    </div>
  );
}

import React from "react";
import "./subHeader.css";
import useAuth from "../../hooks/useAuth";

export default function Subheader() {
  const { user } = useAuth();
  const firstName = user?.email?.split("@")[0];

  const contentsDisplay = user
    ? [
        `👋 Welcome back, ${firstName}!`,
        "Track your orders anytime from My Orders",
        "Your payments are 100% secure with Stripe",
        "Add items, adjust quantities, remove anytime - full cart control",
        "Real-time order history, always up to date",
        "Multiple payment methods supported at checkout",
        "Full order summary with subtotal, tax & shipping before you pay",
        "A lots of products, one destination - ClickCart",
      ]
    : [
        "Welcome to ClickCart, Shop Smarter",
        "Sign in to unlock your personalized experience",
        "Secure sign up & login",
        "Forgot your password? Reset it in seconds",
        "Checkout is protected, registered users only",
        "Powered by Stripe - multiple payment methods supported",
        "Real-time order history after every purchase",
        "Easy cart management - add, adjust, remove anytime",
        "A lots of products, one destination - ClickCart",
      ];

  const repeated = [...contentsDisplay, ...contentsDisplay]; // Repeat the array to create marquee effect

  return (
    <div className="sub__header__container">
      <div className="marquee__wrapper">
        <div className="marquee__track">
          {repeated.map((item, index) => (
            <span key={index} className="marquee__item">
              {item}
              <span className="marquee__divider">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

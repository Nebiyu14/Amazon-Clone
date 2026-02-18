import React from "react";
import "./backToTop.css";

function BackToTop() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="back__to__top">
      <button onClick={handleClick}>Back to top</button>
    </div>
  );
}

export default BackToTop;

import React from "react";
import "./pageNotFound.css";

export default function PageNotFound({ homeHref = "/" }) {
  return (
    <div className="nf-root">
      <span className="nf-code">404</span>
      <p className="nf-title">Page not found</p>
      <p className="nf-message">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a href={homeHref} className="nf-btn">
        ← Back to home
      </a>
    </div>
  );
}

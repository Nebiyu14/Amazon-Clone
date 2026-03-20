import { useEffect, useState } from "react";
import "./loading.css";

export default function Loading({ message = "Please wait...", countdown = null }) {
  const [timeLeft, setTimeLeft] = useState(countdown);

  useEffect(() => {
    if (countdown === null) return;
    setTimeLeft(countdown);

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) return countdown; // restart
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <div className="spinner-overlay">
      <div className="spinner-container">
        <div className="spinner-ring">
          <div className="spinner-ring__arc" />
        </div>
        <div className="spinner-dots">
          <span />
          <span />
          <span />
        </div>
        {timeLeft !== null && (
          <div className="spinner-countdown">{timeLeft}</div>
        )}
        {message && <p className="spinner-message">{message}</p>}
      </div>
    </div>
  );
}

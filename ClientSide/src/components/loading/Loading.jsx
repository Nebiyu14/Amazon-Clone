import "./loading.css";

export default function Loading({ message = "Loading..." }) {
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
        {message && <p className="spinner-message">{message}</p>}
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

import "./Error.css";

const Error = ({ message, onRetry, fullPage = false }) => {
  return (
    <div className={`error ${fullPage ? "error_full_page" : ""}`}>
      <div className="error_card">
        <div className="error_icon" aria-hidden="true">
          !
        </div>

        <h2 className="error_title">Something went wrong</h2>
        <p className="error_message">{message}</p>

        <div className="error_actions">
          {onRetry && (
            <button
              type="button"
              className="error_button error_button_primary"
              onClick={onRetry}
            >
              Retry
            </button>
          )}

          <Link to="/" className="error_button error_button_secondary">
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;

import "./Error.css";

const Error = ({ message, onRetry }) => {
  return (
    <div className="error">
      <p className="error_message">{message}</p>

      <button
        className="error_button"
        onClick={onRetry}
      >
        Retry
      </button>
    </div>
  );
};

export default Error;
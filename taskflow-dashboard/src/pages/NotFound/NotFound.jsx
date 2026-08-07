import { Link } from "react-router-dom";

import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="not_found">
      <div className="not_found_card">
        <p className="not_found_code">404</p>
        <h1 className="not_found_title">Page Not Found</h1>
        <p className="not_found_message">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link to="/" className="not_found_button">
          Go to Dashboard
        </Link>
      </div>
    </section>
  );
};

export default NotFound;

import { useNavigate, useParams } from "react-router-dom";

import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

import useTask from "../../hooks/useTask";

import "./TaskDetails.css";

const TaskDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    task,
    loading,
    error,
    retry,
  } = useTask(id);

  if (loading) return <Loader />;

  if (error)
    return (
      <Error
        message={error}
        onRetry={retry}
      />
    );

  return (
    <div className="details">

      <div className="details_container">

        <button
          className="back_button"
          onClick={() => navigate("/")}
        >
          ← Back
        </button>

        <h1 className="details_heading">
          Task Details
        </h1>

        <div className="details_card">

          <div className="details_row">
            <strong>Task ID</strong>
            <span>{task.id}</span>
          </div>

          <div className="details_row">
            <strong>User ID</strong>
            <span>{task.userId}</span>
          </div>

          <div className="details_row">
            <strong>Title</strong>
            <span>{task.title}</span>
          </div>

          <div className="details_row">
            <strong>Status</strong>

            <span>
              {task.completed
                ? "Completed"
                : "Pending"}
            </span>
          </div>

          <div className="details_description">
            <strong>Description</strong>

            <p>
              This is a placeholder description
              because JSONPlaceholder doesn't
              provide one.
            </p>

          </div>

          <button className="delete_button">
            Delete Task
          </button>

        </div>

      </div>

    </div>
  );
};

export default TaskDetails;
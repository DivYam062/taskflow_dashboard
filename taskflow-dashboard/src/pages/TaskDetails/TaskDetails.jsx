import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useTask from "../../hooks/useTask";
import useTaskContext from "../../context/useTaskContext";

import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

import "./TaskDetails.css";

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { deleteTask } = useTaskContext();

  const [deleting, setDeleting] = useState(false);

  const { task, loading, error, retry } = useTask(id);

  const handleDelete = () => {
    try {
      setDeleting(true);

      deleteTask(id);
      navigate("/", { replace: true });
    } catch (err) {
      console.error(err);
      alert("Failed to delete task.");
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error || !task) {
    return (
      <Error
        message={error || "Task not found."}
        onRetry={retry}
        fullPage
      />
    );
  }

  return (
    <section className="details">
      <div className="details_container">
        <div className="details_topbar">
          <button
            type="button"
            className="details_back"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>

          <span className="details_label">Task Details</span>
        </div>

        <div className="details_card">
          <div className="details_header">
            <h1 className="details_heading">Task #{task.id}</h1>

            <span
              className={`details_badge ${
                task.completed ? "status_completed" : "status_pending"
              }`}
            >
              {task.completed ? "Completed" : "Pending"}
            </span>
          </div>

          <div className="details_body">
            <div className="details_title_block">
              <span>Title</span>
              <strong>{task.title}</strong>
            </div>

            <div className="details_info_grid">
              <div className="details_info">
                <span>Task ID</span>
                <strong>{task.id}</strong>
              </div>

              <div className="details_info">
                <span>User ID</span>
                <strong>{task.userId}</strong>
              </div>
            </div>

            <div className="details_description">
              <h3>Description</h3>
              <p>
                This is a placeholder description because JSONPlaceholder
                doesn't provide one.
              </p>
            </div>
          </div>

          <div className="details_actions">
            <button
              type="button"
              className="details_delete"
              onClick={handleDelete}
              disabled={deleting}
            >
              {deleting ? "Deleting..." : "Delete Task"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskDetails;

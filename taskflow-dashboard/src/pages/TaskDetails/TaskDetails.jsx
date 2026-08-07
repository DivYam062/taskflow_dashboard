import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useTask from "../../hooks/useTask";
import { deleteTaskApi } from "../../api/taskService";

import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

import "./TaskDetails.css";

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [deleting, setDeleting] = useState(false);

  const {
    task,
    loading,
    error,
    retry,
  } = useTask(id);

  const handleDelete = async () => {
    try {
      setDeleting(true);
  
      await deleteTaskApi(id);
  
      navigate("/", { replace: true });
    } catch (error) {
      console.error(error);
      alert("Failed to delete task.");
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Error
        message={error}
        onRetry={retry}
      />
    );
  }

  return (
    <section className="details">
      <div className="details_container">
        <button
          className="details_back"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <div className="details_card">
          <h1 className="details_heading">
            Task Details
          </h1>

          <div className="details_info">
            <span>Task ID</span>
            <strong>{task.id}</strong>
          </div>

          <div className="details_info">
            <span>User ID</span>
            <strong>{task.userId}</strong>
          </div>

          <div className="details_info">
            <span>Title</span>
            <strong>{task.title}</strong>
          </div>

          <div className="details_info">
            <span>Status</span>

            <strong
              className={
                task.completed
                  ? "status_completed"
                  : "status_pending"
              }
            >
              {task.completed
                ? "Completed"
                : "Pending"}
            </strong>
          </div>

          <div className="details_description">
            <h3>Description</h3>

            <p>
              This is a placeholder description because
              JSONPlaceholder doesn't provide one.
            </p>
          </div>

          <button
            className="details_delete"
            onClick={handleDelete}
            disabled={deleting}
          >
            {deleting ? "Deleting..." : "Delete Task"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TaskDetails;
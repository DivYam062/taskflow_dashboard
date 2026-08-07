import { useParams } from "react-router-dom";

const TaskDetails = () => {
  const { id } = useParams();

  return (
    <main>
      <h1>Task Details</h1>

      <p>Task ID: {id}</p>
    </main>
  );
};

export default TaskDetails;
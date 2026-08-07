import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import TaskDetails from "../pages/TaskDetails/TaskDetails";
import NotFound from "../pages/NotFound/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="/tasks/:id" element={<TaskDetails />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
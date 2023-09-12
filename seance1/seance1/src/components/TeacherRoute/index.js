import { Outlet /*, Route, Routes*/ } from "react-router-dom";
// import TaskPage from "../../pages/component-taskpage/taskpage";
// import TaskDetails from "../../pages/taskDetails";
function TeacherRoutes() {
  return (
    <>
      {/* <Routes>
        <Route path="task" element={<TaskPage />} />
        <Route path="tasks/:id" element={<TaskDetails />} />
      </Routes> */}

      <Outlet />
    </>
  );
}
export default TeacherRoutes;

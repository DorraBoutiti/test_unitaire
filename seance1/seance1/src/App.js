// import "./App.css";
// import Hello from "./components/component-hello/Hello.js";
// import TaskPage from "./pages/component-taskpage/taskpage.js";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Menu from "./components/component-menu/menu";
// import TaskDetails from "./pages/taskDetails";
// import TeacherRoutes from "./components/TeacherRoute";
// import Login from "./components/compoent-login/index";
// function App() {
//   return (
//     <div className="App">
//       {/* <Hello />
//       <TaskPage /> */}
//       <Router>
//         <Menu />
//         <Routes>
//           <Route path="/" element={<Hello />} />
//           <Route path="/login" element={<Login />} />
//           {/* <Route path="teacher/" element={<TeacherRoutes />} /> */}
//           <Route path="teacher/" element={<TeacherRoutes />}>
//             <Route path="tasks" element={<TaskPage />} />
//             <Route path="tasks/:id" element={<TaskDetails />} />
//           </Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import "./App.css";
import Hello from "./components/component-hello/Hello";
import TaskPage from "./pages/component-taskpage/taskpage.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Menu from "./components/component-menu/menu";
import TaskDetails from "./pages/taskDetails";
import TeacherRoutes from "./components/TeacherRoute/index";
import { me } from "./services/task2.service";
import Login from "./components/compoent-login/index";

function App() {
  const token = localStorage.getItem("token");

  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        setUser(user);
        console.log("user: ", user);
      } catch (e) {}
    };
    fetchMe();
  }, []);
  if (token && user.role === "admin") {
    // private routes
    return (
      <div className="app">
        <Router>
          {/* <Menu /> */}
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/teachers/tasks" replace />}
            />
            <Route path="teachers/*" element={<TeacherRoutes />} />
            {/* <Route path="/tasks" element={<TaskPage />} />
           <Route path="/tasks/:id" element={<TaskDetails />} /> */}
          </Routes>
        </Router>
      </div>
    );
  } else if (token && user.role === "user") {
    return (
      <div className="app">
        <Router>
          {/* <Menu /> */}
          <Route path="/hello" element={<Hello />} />
          <Route path="/tasks" element={<TaskPage />} />
          {/* ... */}
        </Router>
      </div>
    );
  } else if (!token) {
    //public routes
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    );
  } else {
    return <div>loading...</div>;
  }
}

export default App;

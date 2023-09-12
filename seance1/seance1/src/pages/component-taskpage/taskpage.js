import "./taskpage.css";
import { useEffect, useState } from "react";
//import Task from "../../components/component-task/task.js";
import TaskForm from "../../components/component-taskForm/taskForm.js";
import TaskList from "../../components/component-taskList/taskList";
import * as api from "../../services/tasks.service";
function TaskPage() {
  const [isVisible, setIsVisible] = useState(true);
  const [isError, setIsError] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  // const steps = ["enter a title ", "click on button"];
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const result = await api.fetchTasks();
        setTasks(result);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setIsError(true);
        console.log(e);
      }
    }
    fetchData();
  }, []);
  const [searchValue, setSearchValue] = useState("");
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     if (searchValue.length === 0) {
  //       console.log("tasks empty");
  //       setTasks([]);
  //       setLoading(false);
  //     } else {
  //       const result = await api.fetchTasksByFilter(searchValue);
  //       console.log("tasks form api : " + searchValue);
  //       setTasks(result);
  //       setLoading(false);
  //     }
  //   };
  //   console.log("searchValue", searchValue);
  //   fetchData();
  // }, [searchValue]);

  function sayHello() {
    alert("Hello");
  }
  // function deleteRow(id) {
  //   setTasks(tasks.filter((row) => row._id !== id));
  // }
  // const updateTask = async (id, title, duration) => {
  //   const newTasks = tasks.map((task) =>
  //     task._id === id ? { title, duration } : task
  //   );
  //   setTasks(newTasks);
  // };

  // function updateRow(id) {
  //   console.log("calling update for id:");
  //   console.log(id);
  //   if (tasks._id === id) {
  //     console.log("I here");
  //     setUpdate(!update);
  //   }
  // }

  // function addTasks(title, duration) {
  //   const newTask = {
  //     _id: tasks.length + 1 + "",
  //     title: title,
  //     duration: duration,
  //   };
  //   //tasks.push(newTask);
  //   const result = tasks.concat(newTask);
  //   //const result = [...tasks, newTask];
  //   setTasks(result);
  //   console.log("liste des tasks", tasks);
  // }
  const addTask = async (title, duration) => {
    try {
      setLoading(true);
      const newTask = await api.addTask({
        title,
      });
      setTasks([...tasks, newTask]);
      setLoading(false);
    } catch (e) {
      console.log("error");
    }
  };
  const deleteTask = async (id) => {
    try {
      setLoading(true);
      await api.deleteTask(id);
      const newTasks = tasks.filter((task) => task._id !== id);
      setTasks(newTasks);
      setLoading(false);
    } catch (e) {
      console.log("error");
    }
  };

  const updateTask = async (id, title, duration) => {
    try {
      setLoading(true);
      const newTask = await api.updateTask(id, {
        title,
      });
      const newTasks = tasks.map((task) => (task._id === id ? newTask : task));
      setTasks(newTasks);
      setLoading(false);
    } catch (e) {
      console.log("error");
    }
  };

  return (
    <div className="App">
      <button onClick={() => toggleVisibility()}>Toggle Visibility</button>
      {isVisible === true ? (
        <>
          <TaskForm sayHello={sayHello} addTasks={addTask} />
          <input
            type="text"
            name="title"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        </>
      ) : (
        <>
          <p> Attendez plz</p>
        </>
      )}
      {/* <TaskForm sayHello={sayHello} /> */}
      {loading && !isError ? (
        <div>loading.......</div>
      ) : (
        <>
          {/* <ol>
            {steps.map(function (elem) {
              return <li>{elem}</li>;
            })}
          </ol> */}
          <TaskList
            deleteRow={deleteTask}
            updateTask={updateTask}
            table={tasks}
            className="todo-list"
          />
          {/* <Task title="learn html" duration={60} details={{ level: "2" }} />
          <Task title="learn Js" duration={20} details={{ level: "6" }} />
          <Task title="learn Dorra" duration={90} details={{ level: "8" }} /> */}
        </>
      )}

      {/* {loading && <div> Loading.....</div>}
      {!loading && (
        <>
          <ol>
            {steps.map(function (elem) {
              return <li>{elem}</li>;
            })}
          </ol>
          <Task />
          <Task />
          <Task />
        </>
      )} */}
    </div>
  );
}

export default TaskPage;

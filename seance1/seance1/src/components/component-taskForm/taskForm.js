import { useState, useEffect } from "react";
import "./taskForm.css";

function TaskForm(props) {
  // props.sayHello();

  const addTask = " Add a title";
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  function renderHello() {
    return <p>Hello</p>;
  }
  function handleTitle(e) {
    setTitle(e.target.value);
  }
  function handleDuration(e) {
    setDuration(e.target.value);
  }
  function handleClick() {
    console.log("it's a button");
    console.log(title);
    console.log(duration);
    props.addTasks(title, duration);
  }

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <form action="" className="form">
      <input type="text" name="title" value={title} onChange={handleTitle} />
      <input
        type="text"
        name="duraation"
        value={duration}
        onChange={handleDuration}
      />
      <button type="button" onClick={handleClick} data-test="newt">
        {addTask}
      </button>
      {renderHello()}
    </form>
  );
}
export default TaskForm;
//

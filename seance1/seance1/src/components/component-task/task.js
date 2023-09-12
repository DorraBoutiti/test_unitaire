import "./task.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Task(props) {
  const [updateMode, setUpdateMode] = useState(false);
  const [titleToUpdate, setTitleToUpdate] = useState("");
  const [durationToUpdate, setDurationToUpdate] = useState();
  console.log("durationToUpdate: ", durationToUpdate);
  //console.log("enahou el propsssss:", props);
  // function Task() {
  //   const styleTask = {

  //   }
  // }
  // function updateRow(id) {
  //   props.updateRow(id);
  // }
  //console.log("I showing the props", props);
  const navigate = useNavigate();
  function HandleTitle() {
    if (props.duration < 60) {
      navigate("/taskDetails/" + props._id);
    }
  }
  const handleUpdateTask = () => {
    props.updateTask(props._id, titleToUpdate, durationToUpdate);
    setUpdateMode(false);
  };
  return (
    <div className="task" style={{ backgroundColor: "red" }}>
      {!updateMode ? (
        <>
          {/* <Link to={"/taskDetails/" + props._id}>
            <div className="title">{props.title}</div>
          </Link> */}
          <div className="title" onClick={HandleTitle}>
            {props.title}
          </div>
          <div className="duration">{props.duration}</div>
          {props.details && (
            <div className="details">{props.details.level}</div>
          )}
          <div className="actions">
            <button onClick={() => props.deleteRow(props._id)}>delete</button>

            <button onClick={() => setUpdateMode(true)}>update</button>
          </div>
        </>
      ) : (
        <>
          {
            <>
              <input
                type="text"
                name="titleToUpdate"
                value={props.title}
                onChange={(e) => setTitleToUpdate(e.target.value)}
              />
              <input
                type="text"
                value={props.duration}
                name="durationToUpdate"
                onChange={(e) => setDurationToUpdate(e.target.value)}
              />
              <button className="button" onClick={handleUpdateTask}>
                Update a task
              </button>
            </>
          }
        </>
      )}
    </div>
  );
}
export default Task;
//we can write Task({title, duration, level})

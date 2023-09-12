import "./taskList.css";
import Task from "../component-task/task.js";

function TaskList(props) {
  console.log("enahou el propsssss:", props);
  return (
    <div className="tasks-list">
      {props.table.map((elem) => {
        <Task
          key={elem._id}
          _id={elem._id}
          title={elem.title}
          duration={elem.duration}
          deleteRow={props.deleteRow}
          updateTask={props.updateTask}
        />;
      })}
    </div>
  );
}

export default TaskList;

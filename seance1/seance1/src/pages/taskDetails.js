import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTaskById } from "../services/task2.service";

function TaskDetails() {
  const [task, setTask] = useState({});
  const { id } = useParams();
  console.log("useParams(): ", useParams());
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchTaskById(id);
        setTask(result);
      } catch (e) {}
    };
    fetchData();
  }, [id]);
  return (
    <div>
      taskDetails
      <div>
        <b>Title:</b> {task.title}
      </div>
    </div>
  );
}

export default TaskDetails;

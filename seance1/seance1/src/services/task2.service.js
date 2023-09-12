import Axios from "axios"; //c'est un choix on peux utiliser fetch de Js
//utilisation d'Axios la plus répondus
//post-put-get
export const header = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
export const addTask = async (task) => {
  const result = await Axios.post("http://localhost:5000/api/v1/tasks", task);
  return result.data.model;
};

export const updateTask = async (id, task) => {
  const result = await Axios.put(
    "http://localhost:5000/api/v1/tasks/" + id,
    task
  );
  return result.data.model;
};

export const deleteTask = async (id) => {
  const result = await Axios.delete("http://localhost:5000/api/v1/tasks/" + id);
  return result.data.model;
};

export const fetchTaskById = async (taskId) => {
  const result = await Axios.get(
    "http://localhost:5000/api/v1/tasks/" + taskId
  );
  return result.data.model;
};

export const fetchTasks = async () => {
  // await delay(500)
  const result = await Axios.get("http://localhost:5000/api/v1/tasks");
  return result.data.model;
};

export const login = async (credentials) => {
  const result = await Axios.post(
    "http://localhost:5000/api/v1/auth/login",
    credentials
  );
  return result.data.token;
};
export const me = async () => {
  // await delay(500)
  const result = await Axios.get(
    "http://localhost:5000/api/v1/auth/me",
    header()
  );
  return result.data.model;
};
//authentification using reactjs?
// # Get the project
// git clone https://github.com/auth0-blog/reactjs-authentication-tutorial.git reactjs-authentication-tutorial

// # Change directory
// cd reactjs-authentication-tutorial

// # Install the dependencies
// npm install

// # Run your app
// npm start

import { useState } from "react";
import { login } from "../../services/task2.service";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [erreur, setErreur] = useState("");
  const data = [
    {
      email: "boutitidorra@gmail.com",
      password: "123456789",
      token: "13123513515151",
      role: "user",
    },
    {
      email: "dorra@gmail.com",
      password: "123456789",
      token: "13123513515151",
      role: "student",
    },
  ];

  const clickHandler = async () => {
    if (email === "") {
      setErreur("Champs Email vide");
    } else if (password === "") {
      setErreur("Champs password vide");
    } else if (email !== data[0].email) {
      setErreur("Email invalid");
    } else if (password !== data[0].password) {
      setErreur("Password invalid");
    } else {
      setErreur("Données correctes");
      console.log(data[0]);
      localStorage.setItem("user", JSON.stringify(data[0]));
      // window.location("/tasks");
      navigate("/tasks");
    }
  };
  return (
    <>
      <label>Email</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        data-test="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        data-test="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        type="button"
        name="envoyer"
        value="Envoyer"
        onClick={clickHandler}
        data-test="connect"
      >
        Envoyer
      </button>
      <h1>{erreur}</h1>
    </>
  );
}
export default Login;

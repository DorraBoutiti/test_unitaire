import { NavLink } from "react-router-dom";
function Menu() {
  return (
    <div>
      {/* <Link to="/">
        <h1>Home</h1>
      </Link>
      <Link to="/taskpage">
        <h1>My tasks</h1>
      </Link> */}
      {/* on peut utiliser destructuring on utilise direct isActive */}
      <NavLink
        to="/"
        style={({ isActive }) =>
          isActive
            ? {
                color: "red",
              }
            : undefined
        }
      >
        <h1>Home</h1>
      </NavLink>
      <NavLink
        to="/taskpage"
        style={(params) =>
          params.isActive
            ? {
                color: "red",
              }
            : undefined
        }
      >
        <h1>My tasks</h1>
      </NavLink>
    </div>
  );
}

export default Menu;

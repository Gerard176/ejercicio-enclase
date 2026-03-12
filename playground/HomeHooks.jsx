import { Link } from "react-router-dom";

function HomeHooks() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/usestate"> Ir a state</Link>
      <br />

      <Link to="/usenavigate"> Ir a Navigate</Link>
    </>
  );
}

export default HomeHooks;

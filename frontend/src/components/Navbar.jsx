import { Link } from "react-router-dom";

function Navbar() {

  const token = localStorage.getItem("token");

  const logoutHandler = () => {

    localStorage.removeItem("token");

    alert("Logged out");
  };

  return (

    <div className="flex justify-between items-center bg-black text-white p-4">

      <h1 className="text-2xl font-bold">
        Ecommerce Store
      </h1>

      <div className="flex gap-4">

        <Link to="/">Home</Link>

        <Link to="/cart">Cart</Link>

        {!token ? (
          <>
            <Link to="/login">Login</Link>

            <Link to="/register">Register</Link>
          </>
        ) : (
          <button onClick={logoutHandler}>
            Logout
          </button>
        )}

      </div>

    </div>
  );
}

export default Navbar;
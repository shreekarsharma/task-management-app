import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-slate-800 text-white px-6 py-4 shadow">
      {" "}
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {" "}
        <h1 className="text-xl font-bold">MERN Todo App </h1>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">Welcome, {user?.name}</span>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

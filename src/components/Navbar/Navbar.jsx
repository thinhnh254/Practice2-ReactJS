import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-5 py-8">
      <NavLink
        to="/"
        className="px-8 py-2 rounded-full bg-white transition-all duration-300 hover:bg-softBlue"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#545e6f",
          background: isActive && "#41C9E2",
        })}
      >
        Properties
      </NavLink>

      <NavLink
        to="/tenants"
        className="px-8 py-2 rounded-full bg-white transition-all duration-300 hover:bg-softBlue"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#545e6f",
          background: isActive && "#41C9E2",
        })}
      >
        Tenants
      </NavLink>

      <NavLink
        to="/algorithm"
        className="px-8 py-2 rounded-full bg-white transition-all duration-300 hover:bg-softBlue"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#545e6f",
          background: isActive && "#41C9E2",
        })}
      >
        Algorithm
      </NavLink>

      <NavLink
        to="/settings"
        className="px-8 py-2 rounded-full bg-white transition-all duration-300 hover:bg-softBlue"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#545e6f",
          background: isActive && "#41C9E2",
        })}
      >
        Settings
      </NavLink>
    </div>
  );
};

export default Navbar;

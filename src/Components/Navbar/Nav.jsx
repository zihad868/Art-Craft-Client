import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Logo/ArtCraft.jpeg";

const Nav = () => {
  const navLink = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "bg-sky-300 rounded-lg p-2" : "p-2"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/art-craft"
        className={({ isActive }) =>
          isActive ? "bg-sky-300 rounded-lg p-2" : "p-2"
        }
      >
        Art craft
      </NavLink>
      <NavLink
        to="/add-craft"
        activeClassName="active-nav-link"
        className={({ isActive }) =>
          isActive ? "bg-sky-300 rounded-lg p-2" : "p-2"
        }
      >
        Add Craft
      </NavLink>
      <NavLink
        to="/my-craft"
        className={({ isActive }) =>
          isActive ? "bg-sky-300 rounded-lg p-2" : "p-2"
        }
      >
        My Art Craft
      </NavLink>
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <img className="rounded-xl w-12" src={logo} alt="" />
          <a className="btn btn-ghost text-5xl text-green-900">
            Art<span className="text-">Craft</span>
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-6 font-bold text-2xl text-black">
          {navLink}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="space-x-3">
          <Link to="/signin" className="btn">
            Sign in
          </Link>
          <Link to="/signup" className="btn">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;

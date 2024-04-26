import "./Navbar.css";
import logo from "../../assets/Logo/ArtCraft.jpeg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/art-craft">Art craft</NavLink>
      <NavLink to="/add-craft">Add Craft</NavLink>
      <NavLink to="/my-craft">My Art Craft</NavLink>
    </>
  );

  return (
    <div className="navImage">
      <div>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
            <ul className="menu menu-horizontal space-x-6 font-bold text-2xl text-white">
              {navLink}
            </ul>
          </div>
          <div className="navbar-end">
            <div className="space-x-3">
              <Link to='/signin' className="btn">Sign in</Link>
              <Link to='/signup' className="btn">Sign up</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="mt-36">
        <h1 className="text-5xl text-sky-400 font-bold uppercase text-center ">
          Craft Someth<span className="text-rose-500">ings Beautiful</span>
        </h1>
        <p className="w-3/4 text-2xl text-gray-900 mt-9 text-center mx-auto">
          Embrace the warmth of genuine smiles, the allure of shared stories,
          and the promise of belonging in a sanctuary where hearts connect and
          dreams take flight.
        </p>
      </div>
    </div>
  );
};

export default Navbar;

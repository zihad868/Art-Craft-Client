import "./Navbar.css";
import logo from "../../assets/Logo/ArtCraft.jpeg";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthProvider } from "../../Provider/FirebaseAuthProvider";
import { Typewriter } from 'react-simple-typewriter'

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthProvider);

  const handleLogout = () => {
    logoutUser()
  }

  const navLink = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "bg-sky-400 rounded-lg p-2" : "p-2"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/art-craft"
        className={({ isActive }) => (isActive ? "underline p-2" : "p-2")}
      >
        Art craft
      </NavLink>
      <NavLink
        to="/add-craft"
        className={({ isActive }) => (isActive ? "underline p-2" : "p-2")}
      >
        Add Craft
      </NavLink>
      <NavLink
        to="/my-craft"
        className={({ isActive }) => (isActive ? "underline p-2" : "p-2")}
      >
        My Art Craft
      </NavLink>
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
            {user ? (
              <>
                {/* Profile */}
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0}>
                    <img className="w-16 h-16 mr-8 rounded-full" src={user?.photoURL} alt="" />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box"
                  >
                    <p>{user?.displayName}</p>
                    <button onClick={handleLogout} className="btn bg-gray-300  mt-2">Logout</button>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div className="space-x-3">
                  <Link to="/signin" className="btn">
                    Sign in
                  </Link>
                  <Link to="/signup" className="btn">
                    Sign up
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="mt-36">
        <h1 className="text-5xl text-sky-500 font-bold uppercase text-center ">
          Craft Someth{''}
          <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['ings Beautiful']}
            loop={5}
            cursor
            cursorStyle=''
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </span>

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

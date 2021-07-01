import { useContext } from "react";
import FirebaseContext from "../context/firebase"; // we need firebase context to sign the user out
import UserContext from "../context/user";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";
const Header = () => {
  // we check if we have a user
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);
  return (
    <header className="h-12 bg-white border-b p-7 border-gray-primary mb-8">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
            <h1 className="flex justify-center w-full">
              <Link to={ROUTES.DASHBOARD} aria-label="Instagram logo">
                <img
                  src="/images/logo.png"
                  alt="Instalogo"
                  className="mt-2 w-6/12"
                />
              </Link>
            </h1>
          </div>
          <div className="text-gray-700 text-center flex items-center align-items">
            {/* if there's a user */}
            {user ? (
              <>
                <Link to={ROUTES.DASHBOARD} aria-label="Dashboard">
                  <svg
                    fill="#262626"
                    height="22"
                    viewBox="0 0 48 48"
                    width="22"
                  >
                    <path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path>
                  </svg>
                </Link>

                {/* will sign out the user */}
                <button
                  type="button"
                  title="Sign Out"
                  onClick={() => firebase.auth().signOut()}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      firebase.auth().signOut();
                    }
                  }}
                  className="ml-5 text-black hover:text-black-faded"
                >
                  <svg
                    className="w-8 mr-5 text-black cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </button>
                <div className="flex items-center cursor-pointer">
                  <Link to={`/p/${user.displayName}`}>
                    <img
                      className="rounded-full h-10 w-8 flex"
                      src={`/images/avatars/${user.displayName}.png`}
                      alt={`${user.displayName}`}
                    />
                  </Link>
                </div>
              </>
            ) : (
              // if there's no user
              <>
                <Link to={ROUTES.LOGIN}>
                  <button
                    type="button"
                    className="bg-blue-medium font-bold text-sm rounded text-white w-20 h-8"
                  >
                    Log In
                  </button>
                </Link>
                <Link to={ROUTES.SIGN_UP}>
                  <button
                    type="button"
                    className="font-bold text-sm rounded text-blue-medium w-20 h-8"
                  >
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

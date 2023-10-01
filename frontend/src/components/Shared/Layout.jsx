import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./Layout.css";
import { useSelector } from "react-redux";
function Layout() {
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);
  const { userName, role } = userState.data;
  return (
    <div className="">
      <header className="py-3 text-bg-primary">
        <div className="container-fluid px-4">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <NavLink to={"/"} className="nav-link px-2 text-white">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/banks"} className="nav-link px-2 text-white">
                  Banks
                </NavLink>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
            <div className="text-end">
              {userName === undefined ? (
                <>
                  <button
                    type="button"
                    className="btn btn-outline-light me-2"
                    onClick={() => navigate("sign-in")}
                  >
                    Login
                  </button>
                  <button type="button" className="btn btn-warning">
                    Sign-up
                  </button>
                </>
              ) : (
                <p>
                  {userName} {role}
                </p>
              )}
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;

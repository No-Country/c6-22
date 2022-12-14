import React from "react";
import styles from "../home/Home.module.css";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../features/authSlice";

const { navbarBrand, navbarPage, containerWidth, max_width, button } = styles;

const Navbar = ({ isLogged }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <>
      <div className={containerWidth}>
        <div className={max_width}>
          <nav className="navbar navbar-expand-md bg-light">
            <div className="container-fluid">
              <Link to={"/"} className={navbarBrand}>
                TecnoStore
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav mx-auto align-items-center">
                  <li className="nav-item">
                    <Link to={"/"} className={navbarPage}>
                      INICIO
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/contact"} className={navbarPage}>
                      CONTACTO
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/cart" className="nav-link">
                      <svg
                        width="30"
                        height="30"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M7.75 7.75H19.25L17.6128 14.7081C17.4002 15.6115 16.5941 16.25 15.666 16.25H11.5395C10.632 16.25 9.83827 15.639 9.60606 14.7618L7.75 7.75ZM7.75 7.75L7 4.75H4.75"
                        />
                        <circle cx="10" cy="19" r="1" fill="currentColor" />
                        <circle cx="17" cy="19" r="1" fill="currentColor" />
                      </svg>
                    </Link>
                  </li>
                  {isLogged && (
                    <li className="nav-item">
                      <button
                        onClick={() => {
                          dispatch(logout());
                        }}
                        className={button}
                      >
                        Cerrar sesion
                      </button>
                    </li>
                  )}
                  {!isLogged && (
                    <li className="nav-item">
                      <Link
                        state={location.pathname}
                        replace={true}
                        to={"/login"}
                        className="nav-link"
                      >
                        <svg
                          width="30"
                          height="30"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            cx="12"
                            cy="8"
                            r="3.25"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M6.8475 19.25H17.1525C18.2944 19.25 19.174 18.2681 18.6408 17.2584C17.8563 15.7731 16.068 14 12 14C7.93201 14 6.14367 15.7731 5.35924 17.2584C4.82597 18.2681 5.70558 19.25 6.8475 19.25Z"
                          />
                        </svg>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;

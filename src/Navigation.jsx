import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
    <>
      {/* <div className="navigation">
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/cart">
          Cart <span>{props.cart.length}</span>
        </NavLink>
      </div> */}
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            {/* <a className="navbar-brand" href="/">
              E-Commerce
            </a> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-products nav-link active"
                    aria-current="page"
                    href="/products"
                  >
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  {/* <a
                    className="nav-link active"
                    aria-current="page"
                    href="register"
                  >
                    Register
                  </a> */}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="my-cart"
                  >
                    <NavLink className="nav-link" to="/cart">
                    <i class="fab fa-opencart"></i> <span>{props.cart.length}</span>
                    </NavLink>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;

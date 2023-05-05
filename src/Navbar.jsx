import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header>
        <div className="container">
          <h1>Learn online</h1>
          <nav>
            <ul>
              <li>
                <NavLink to="./">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink  to="./contact">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink  to="./servise">
                  servise
                </NavLink>
              </li>
              <li>
                <NavLink to="./about">
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;

import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">useContext</Link>

        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* Reacciona dependiendo donde se encuentre */}
            <NavLink
              className={ ({ isActive }) => `nav-link ${ isActive ? 'active' :  ''} `  }
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className={ ({ isActive }) => `nav-link ${ isActive ? 'active' :  ''} `  }
              to={"/about"}
            >
              About
            </NavLink>
            <NavLink
              className={ ({ isActive }) => `nav-link ${ isActive ? 'active' :  ''} `  }
              to={"/login"}
              >
              Login
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}

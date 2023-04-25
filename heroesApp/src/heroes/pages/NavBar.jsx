import { Link, NavLink, useNavigate } from "react-router-dom";

export const NavBar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login', {
      replace: true
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand ms-2" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/marvel">
            Marvel
          </NavLink>

          <NavLink className="nav-item nav-link" to="/dc">
            DC
          </NavLink>

          <NavLink className="nav-item nav-link" to="/search">
            Buscar
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
      <span className="nav-item nav-link text-info">
        Thamara
      </span>
      <button
      className="nav-item nav-link btn btn-outline-info me-2"
      onClick={handleLogout}
      >
        Logout
      </button>
        </ul>
      </div>
    </nav>
  );
};

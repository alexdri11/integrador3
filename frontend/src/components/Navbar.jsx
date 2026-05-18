import logo from "../assets/billar.png";

import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  useContext
} from "react";

import {
  CarritoContext
} from "../context/CarritoContext";

function Navbar() {

  const navigate = useNavigate();

  const admin =
    localStorage.getItem("admin");

  const cliente =
    localStorage.getItem("cliente");

  const { carrito } =
    useContext(CarritoContext);

  const cerrarSesionAdmin = () => {

    localStorage.removeItem("admin");

    navigate("/");

  };

  const cerrarSesionCliente = () => {

    localStorage.removeItem("cliente");

    navigate("/");

  };

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container">

        <Link
          className="navbar-brand"
          to="/"
        >

          <div className="d-flex align-items-center gap-2">

            <img
              src={logo}
              alt="Logo"
              style={{
                width: "50px",
                height: "50px",
                objectFit: "contain"
              }}
            />

            <span>
              Tienda de Mesas de Billar
            </span>

          </div>

        </Link>

        <div className="navbar-nav ms-auto align-items-center">

          <Link
            className="nav-link"
            to="/"
          >
            Inicio
          </Link>

          <Link
            className="nav-link"
            to="/nosotros"
          >
            Nosotros
          </Link>

          {
            !cliente && (

              <Link
                className="nav-link"
                to="/login-cliente"
              >
                Login Cliente
              </Link>

            )
          }

          <Link
            className="nav-link"
            to="/admin"
          >
            Panel Admin
          </Link>

          <Link
            className="nav-link"
            to="/carrito"
          >
            🛒 {carrito.length}
          </Link>

          {
            cliente && (

              <div className="d-flex align-items-center ms-3 gap-2">

                <span className="text-info">

                  👤 {cliente}

                </span>

                <button
                  className="btn btn-sm btn-outline-light"
                  onClick={cerrarSesionCliente}
                >
                  Salir
                </button>

              </div>

            )
          }

          {
            admin && (

              <button
                className="btn btn-danger ms-3"
                onClick={cerrarSesionAdmin}
              >
                Salir Admin
              </button>

            )
          }

        </div>

      </div>

    </nav>

  );

}

export default Navbar;
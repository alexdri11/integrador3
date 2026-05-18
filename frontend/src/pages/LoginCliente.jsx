import {
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

function LoginCliente() {

  const navigate = useNavigate();

  const [correo, setCorreo] =
    useState("");

  const [password, setPassword] =
    useState("");

  const iniciarSesion = (e) => {

    e.preventDefault();

    localStorage.setItem(
      "cliente",
      correo
    );

    navigate("/");

  };

  return (

    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow p-4">

            <h1 className="text-center mb-4">

              👤 Login Cliente

            </h1>

            <form onSubmit={iniciarSesion}>

              <input
                type="email"
                className="form-control mb-3"
                placeholder="Correo electrónico"
                value={correo}
                onChange={(e) =>
                  setCorreo(e.target.value)
                }
                required
              />

              <input
                type="password"
                className="form-control mb-4"
                placeholder="Contraseña"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />

              <button
                className="btn btn-dark w-100"
              >

                Iniciar sesión

              </button>

            </form>

            <div className="alert alert-info mt-4">

              <h5>
                Cuenta Demo
              </h5>

              <p className="mb-1">
                Correo: cliente@gmail.com
              </p>

              <p className="mb-0">
                Contraseña: 1234
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default LoginCliente;
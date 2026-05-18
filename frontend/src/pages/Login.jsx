import {
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

function Login() {

  const [usuario, setUsuario] =
    useState("");

  const [password, setPassword] =
    useState("");

  const navigate = useNavigate();

  const iniciarSesion = (e) => {

    e.preventDefault();

    if (
      usuario === "admin" &&
      password === "1234"
    ) {

      localStorage.setItem(
        "admin",
        "true"
      );

      navigate("/admin");

    } else {

      alert(
        "Usuario o contraseña incorrectos"
      );

    }

  };

  return (

    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow p-4">

            <h1 className="text-center mb-4">
              🔐 Login
            </h1>

            <form onSubmit={iniciarSesion}>

              <input
                type="text"
                className="form-control mb-3"
                placeholder="Usuario"
                value={usuario}
                onChange={(e) =>
                  setUsuario(e.target.value)
                }
              />

              <input
                type="password"
                className="form-control mb-3"
                placeholder="Contraseña"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

              <button
                className="btn btn-dark w-100"
              >
                Iniciar sesión
              </button>

            </form>

            <div className="alert alert-info mt-4">

                 <h5>
                    Credenciales Demo
                </h5>

                <p className="mb-1">
                    Usuario: admin
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

export default Login;
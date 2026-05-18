import { Link } from "react-router-dom";

import {
  useEffect,
  useState,
  useContext
} from "react";

import {
  CarritoContext
} from "../context/CarritoContext";

function Home() {

  const [productos, setProductos] = useState([]);

  const [busqueda, setBusqueda] = useState("");

  const [mensaje, setMensaje] =
  useState("");

  const { agregarAlCarrito } =
    useContext(CarritoContext);

    const agregarProducto = (
  producto
) => {

  agregarAlCarrito(producto);

  setMensaje(
    "Producto agregado al carrito 🛒"
  );

  setTimeout(() => {

    setMensaje("");

  }, 2000);

};

  useEffect(() => {

    fetch("http://localhost:3000/api/productos")
      .then(res => res.json())
      .then(data => setProductos(data));

  }, []);

  const productosFiltrados = productos.filter(
    producto =>
      producto.nombre
        .toLowerCase()
        .includes(busqueda.toLowerCase())
  );

  return (

    <div className="container mt-5">

      <h1 className="text-center mb-5">
        🎱 Mesas de Billar Aries
      </h1>

      {
  mensaje && (

    <div className="alert alert-success text-center">

      {mensaje}

    </div>

  )
}

      <div className="mb-5">

        <input
          type="text"
          className="form-control p-3"
          placeholder="Buscar productos..."
          value={busqueda}
          onChange={(e) =>
            setBusqueda(e.target.value)
          }
        />

      </div>

      <div className="row">

        {productosFiltrados.map((producto) => (

          <div
            className="col-md-4 mb-4"
            key={producto._id}
          >

            <div className="card shadow h-100">

              <Link
                to={`/producto/${producto._id}`}
              >

                <img
                  src={producto.imagen}
                  className="card-img-top"
                  alt={producto.nombre}
                  style={{
                    height: "250px",
                    objectFit: "cover"
                  }}
                />

              </Link>

              <div className="card-body">

                <Link
                  to={`/producto/${producto._id}`}
                  className="text-decoration-none text-dark"
                >

                  <h4>{producto.nombre}</h4>

                </Link>

                <p>{producto.descripcion}</p>

                <h3>${producto.precio}</h3>

                <button
                  className="btn btn-dark w-100"
                  onClick={() =>
                  agregarProducto(producto)
            }
                >
                  Agregar al carrito
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Home;
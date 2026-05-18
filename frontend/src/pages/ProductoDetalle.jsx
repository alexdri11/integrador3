import {
  useEffect,
  useState,
  useContext
} from "react";

import {
  useParams,
  Link
} from "react-router-dom";

import {
  CarritoContext
} from "../context/CarritoContext";

function ProductoDetalle() {

  const [producto, setProducto] =
    useState(null);

  const { id } = useParams();

  const { agregarAlCarrito } =
    useContext(CarritoContext);

  useEffect(() => {

    fetch(
      `http://localhost:3000/api/productos/${id}`
    )
      .then(res => res.json())
      .then(data => setProducto(data));

  }, [id]);

  if (!producto) {

    return <h1>Cargando...</h1>;

  }

  return (

    <div className="container mt-5">

        <Link to="/"
        className="btn btn-dark mb-4"
       >

        ← Regresar

       </Link>

      <div className="row">

        <div className="col-md-6">

          <img
            src={producto.imagen}
            className="img-fluid rounded shadow"
            alt={producto.nombre}
          />

        </div>

        <div className="col-md-6">

          <h1>{producto.nombre}</h1>

          <p className="mt-4">
            {producto.descripcion}
          </p>

          <h2 className="mt-4">
            ${producto.precio}
          </h2>

          <button
            className="btn btn-dark mt-4"
            onClick={() =>
              agregarAlCarrito(producto)
            }
          >
            Agregar al carrito
          </button>

        </div>

      </div>

    </div>

  );

}

export default ProductoDetalle;
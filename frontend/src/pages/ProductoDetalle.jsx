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

  const [producto, setProducto] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const { agregarAlCarrito } = useContext(CarritoContext);

  useEffect(() => {

    const obtenerProducto = async () => {

      try {

        setLoading(true);
        setError("");

        const respuesta = await fetch(
          `${import.meta.env.VITE_API_URL}/api/productos/${id}`
        );

        const data = await respuesta.json();

        if (!respuesta.ok) {
          throw new Error(data?.mensaje || "Error al obtener producto");
        }

        setProducto(data);

      } catch (err) {

        console.log(err);
        setError("No se pudo cargar el producto");

      } finally {
        setLoading(false);
      }

    };

    obtenerProducto();

  }, [id]);

  // 🔥 LOADING
  if (loading) {
    return (
      <h1 className="text-center mt-5">
        Cargando...
      </h1>
    );
  }

  // 🔥 ERROR
  if (error) {
    return (
      <div className="container mt-5 text-center">
        <h2>{error}</h2>
        <Link to="/" className="btn btn-dark mt-3">
          Volver
        </Link>
      </div>
    );
  }

  return (

    <div className="container mt-5">

      <Link
        to="/"
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
            onClick={() => agregarAlCarrito(producto)}
          >
            Agregar al carrito
          </button>

        </div>

      </div>

    </div>

  );

}

export default ProductoDetalle;
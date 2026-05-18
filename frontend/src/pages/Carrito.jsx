import {
  useContext
} from "react";

import {
  Link
} from "react-router-dom";

import {
  CarritoContext
} from "../context/CarritoContext";

function Carrito() {

  const {
    carrito,
    vaciarCarrito
  } = useContext(CarritoContext);

  const finalizarCompra = async () => {

    try {

      const respuesta = await fetch(
        "http://localhost:3000/api/pago/crear-pago",
        {

          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify(carrito)

        }
      );

      const data =
        await respuesta.json();

      vaciarCarrito();

      window.location.href =
        `https://www.mercadopago.com.mx/checkout/v1/redirect?pref_id=${data.id}`;

    } catch (error) {

      console.log(error);

    }

  };

  const total = carrito.reduce(
    (acc, producto) =>
      acc + producto.precio,
    0
  );

  return (

    <div className="container mt-5">

      <div className="d-flex justify-content-between align-items-center mb-5">

        <h1>
           Carrito 🛒
        </h1>

        <Link
          to="/"
          className="btn btn-outline-dark"
        >
          ← Seguir comprando
        </Link>

      </div>

      {
        carrito.length === 0 ? (

          <div className="text-center mt-5">

            <h3>
              Tu carrito está vacío 
            </h3>

            <Link
              to="/"
              className="btn btn-dark mt-3"
            >
              Ir a productos
            </Link>

          </div>

        ) : (

          <>

            {
              carrito.map(
                (producto, index) => (

                <div
                  className="card mb-4 shadow"
                  key={index}
                >

                  <div className="card-body d-flex align-items-center gap-4">

                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      style={{
                        width: "140px",
                        height: "140px",
                        objectFit: "cover",
                        borderRadius: "10px"
                      }}
                    />

                    <div>

                      <h3>
                        {producto.nombre}
                      </h3>

                      <p className="mb-2">

                        {producto.descripcion}

                      </p>

                      <h4>

                        ${producto.precio}

                      </h4>

                    </div>

                  </div>

                </div>

              ))
            }

            <div className="mt-5">

              <h2 className="mb-4">

                Total: ${total}

              </h2>

              <button
                className="btn btn-success me-3"
                onClick={finalizarCompra}
              >

                Finalizar compra

              </button>

              <button
                className="btn btn-danger"
                onClick={vaciarCarrito}
              >

                Vaciar carrito

              </button>

            </div>

          </>

        )
      }

    </div>

  );

}

export default Carrito;
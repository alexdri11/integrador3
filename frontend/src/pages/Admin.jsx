import {
  useEffect,
  useState
} from "react";

const API = "https://integrador3-oddv.onrender.com";

function Admin() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos();
  }, []);


  const obtenerProductos = async () => {
    try {
      const respuesta = await fetch(
        `${API}/api/productos`
      );

      const data = await respuesta.json();
      setProductos(data);

    } catch (error) {
      console.log(error);
    }
  };

  
  const eliminarProducto = async (id) => {
    try {
      await fetch(
        `${API}/api/productos/${id}`,
        {
          method: "DELETE"
        }
      );

      obtenerProductos();

    } catch (error) {
      console.log(error);
    }
  };

 
  const editarProducto = async (producto) => {

    const nuevoNombre = prompt(
      "Nuevo nombre:",
      producto.nombre
    );

    if (!nuevoNombre) return;

    try {
      await fetch(
        `${API}/api/productos/${producto._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            nombre: nuevoNombre
          })
        }
      );

      obtenerProductos();

    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className="container mt-5">

      <h1 className="mb-5">
        ⚙️ Panel Admin
      </h1>

      <div className="row">

        {productos.map((producto) => (

          <div
            className="col-md-4 mb-4"
            key={producto._id}
          >

            <div className="card h-100 shadow">

              <img
                src={producto.imagen}
                className="card-img-top"
                alt={producto.nombre}
                style={{
                  height: "250px",
                  objectFit: "cover"
                }}
              />

              <div className="card-body">

                <h4>{producto.nombre}</h4>

                <p>${producto.precio}</p>

                <button
                  className="btn btn-warning w-100 mb-2"
                  onClick={() => editarProducto(producto)}
                >
                  Editar
                </button>

                <button
                  className="btn btn-danger w-100"
                  onClick={() => eliminarProducto(producto._id)}
                >
                  Eliminar
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Admin;
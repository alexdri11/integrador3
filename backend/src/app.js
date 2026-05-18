const express = require("express");

const cors = require("cors");

const productosRoutes =
  require("./routes/productos.routes");

const carritoRoutes =
  require("./routes/carrito.routes");

const pagoRoutes =
  require("./routes/pago.routes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/api/productos",
  productosRoutes
);

app.use(
  "/api/carrito",
  carritoRoutes
);

app.use(
  "/api/pago",
  pagoRoutes
);

app.get("/", (req, res) => {

  res.send("Servidor funcionando");

});

module.exports = app;
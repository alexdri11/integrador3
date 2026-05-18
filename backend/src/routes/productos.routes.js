const express = require("express");

const router = express.Router();

const {
  obtenerProductos,
  crearProducto,
  obtenerProductoPorId,
  actualizarProducto,
  eliminarProducto
} = require("../controllers/productos.controller");

router.put("/:id", actualizarProducto);

router.delete("/:id", eliminarProducto);

router.get("/", obtenerProductos);

router.get("/:id", obtenerProductoPorId);

router.post("/", crearProducto);

module.exports = router;
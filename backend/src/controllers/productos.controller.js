const Producto = require("../models/Producto");


const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);

  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Error obteniendo productos"
    });
  }
};


const obtenerProductoPorId = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);

    // ✔ FIX IMPORTANTE
    if (!producto) {
      return res.status(404).json({
        mensaje: "Producto no encontrado"
      });
    }

    res.json(producto);

  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Error obteniendo producto"
    });
  }
};


const crearProducto = async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    const productoGuardado = await nuevoProducto.save();

    res.status(201).json(productoGuardado);

  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Error creando producto"
    });
  }
};


const eliminarProducto = async (req, res) => {
  try {
    const productoEliminado = await Producto.findByIdAndDelete(req.params.id);

    if (!productoEliminado) {
      return res.status(404).json({
        mensaje: "Producto no encontrado"
      });
    }

    res.json(productoEliminado);

  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Error eliminando producto"
    });
  }
};


const actualizarProducto = async (req, res) => {
  try {
    const productoActualizado = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!productoActualizado) {
      return res.status(404).json({
        mensaje: "Producto no encontrado"
      });
    }

    res.json(productoActualizado);

  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Error actualizando producto"
    });
  }
};


module.exports = {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  eliminarProducto,
  actualizarProducto
};
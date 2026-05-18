const recibirCarrito = async (
  req,
  res
) => {

  try {

    console.log(
      "CARRITO RECIBIDO:"
    );

    console.log(req.body);

    res.json({
      mensaje:
        "Carrito recibido correctamente"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      mensaje:
        "Error enviando carrito"
    });

  }

};

module.exports = {
  recibirCarrito
};
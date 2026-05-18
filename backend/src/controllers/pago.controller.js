const mercadopago =
  require("mercadopago");

mercadopago.configure({
  access_token:
    process.env.MP_ACCESS_TOKEN
});

const crearPago = async (
  req,
  res
) => {

  try {

    const productos = req.body;

    const preference = {

      items: productos.map(
        (producto) => ({

          title: producto.nombre,

          unit_price:
            producto.precio,

          quantity: 1

        })
      ),

      back_urls: {

        success:
          "http://localhost:5173",

        failure:
          "http://localhost:5173",

        pending:
          "http://localhost:5173"

      }

    };

    const respuesta =
      await mercadopago.preferences.create(
        preference
      );

    res.json({
      id: respuesta.body.id
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      mensaje:
        "Error creando pago"
    });

  }

};

module.exports = {
  crearPago
};
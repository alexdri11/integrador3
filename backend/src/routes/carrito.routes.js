const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {

  console.log("PEDIDO RECIBIDO:");

  console.log(req.body);

  res.json({
    mensaje: "Pedido recibido correctamente"
  });

});

module.exports = router;
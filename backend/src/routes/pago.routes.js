const express = require("express");

const router = express.Router();

const {
  crearPago
} = require(
  "../controllers/pago.controller"
);

router.post(
  "/crear-pago",
  crearPago
);

module.exports = router;
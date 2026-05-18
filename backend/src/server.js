require("dotenv").config();

const mongoose = require("mongoose");

const app = require("./app.js");

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("Mongo conectado");
})
.catch((error) => {
  console.log(error);
});

const PORT =
  process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    `Servidor en puerto ${PORT}`
  );
});
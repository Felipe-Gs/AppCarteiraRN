const express = require("express");
const app = express();
const routes = require("./routes");
const rotasUsuario = require("./RotasUsuario");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.json());
app.use(rotasUsuario);
app.use("/", routes);

app.listen(3000, () => {
   console.log("Servidor rodando na porta 3000");
});

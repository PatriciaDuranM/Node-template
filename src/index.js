const express = require("express");
const app = express();
/*para construir rutas*/

const port = 3000;
/*Importamos las rutas  del archivo routes*/
const usersRoutes = require("./routes/users.routes");

/*Para que el servidor sea capaz de entender archivos json, porque el servidor está en js*/
app.use(express.json());
/* en lugar de '/', separamos las rutas por su funcionalidad con su archivo correspondiente de ruta segun las cosas que tenga la pagina web.  que use el usersRoutes*/
app.use("/api/users", usersRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

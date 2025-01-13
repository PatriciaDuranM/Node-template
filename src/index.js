const express = require("express");
const app = express();
/*para construir rutas*/
const path = require("path");
const fs = require("fs");
const port = 3000;

const pathFile = path.resolve(__dirname, "../data/users.json");

/*Para que el servidor sea capaz de entender archivos json, porque el servidor está en js*/
app.use(express.json());

/*Aqui hemos hecho de que cuando entremos a la raiz, se ejecute la funcion de leer archivos*/
app.get("/read", (req, res) => {
  /*Las funciones error first, pork el primer parametro es el error.
Esto de aqui abajo es para leer archivos*/
  fs.readFile(pathFile, (error, data) => {
    if (error) {
      /*enviamos una respuesta*/
      res.send("Error al leer el archivo");
    } else {
      const jsonData = JSON.parse(data);
      res.send(jsonData);
    }
  });
});

/*Funcion para escribir
Tiene 3 parametros la ruta, el archivo y el mensaje de error 

Hay que meter al final del documento de users un objeto que sea number:34 sin que borre la información original*/

app.get("/write", (req, res) => {
  /*Primero leer archivo*/
  fs.readFile(pathFile, (error, data) => {
    if (error) {
      /*enviamos una respuesta*/
      res.send("Error al leer el archivo");
    }
    /*El archivo lo pasamos de json a js para poder trabajar con el*/
    const users = JSON.parse(data);
    /*Añadimos el contenido nuevo a los datos*/
    users.push({ number: 34 });
    /*Escribirmos los datos con lo nuevo metido con el stringify que pasa de js a json*/
    fs.writeFile(pathFile, JSON.stringify(users), (error) => {
      if (error) {
        res.send("Error al leer el archivo");
      }
      res.send("Dato guardado correctamente");
    });
  });
});

/* Enviar data desde la página web hasta los datos nuestros guardados con CREATE
El metodo create es write */

app.post("/create", (req, res) => {
  console.log(req.body);
  fs.writeFile(pathFile, JSON.stringify(req.body), (error) => {
    if (error) {
      res.send("Error al guardar la informacion");
    }
    res.send("Dato guardado correctamente");
  });
});

/* Actualizar los datos con PATCH*/
app.patch("/update", (req, res) => {
  console.log(req.body);
  res.end();
});

app.delete("/delete", (req, res) => {
  console.log(req.body);
  res.end();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

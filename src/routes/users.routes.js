const express = require("express");
const usersRoutes = express.Router();
const usersController = require("../controllers/users.controller");

/*LEER*/
usersRoutes.get("/", usersController.getAllUsers);

/*CREAR*/
usersRoutes.post("/", usersController.createNewUser);

/* ACTUALIZAR los datos con PATCH*/
usersRoutes.patch("/:id", usersController.updateUsers);

/*BORRAR*/
usersRoutes.delete("/:id", usersController.deleteUser);

/*encontrar usuario por id*/
usersRoutes.get("/:id", usersController.getUserById);

/*exportacion de las rutas*/
module.exports = usersRoutes;

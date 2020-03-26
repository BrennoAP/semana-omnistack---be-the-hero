const express = require("express");
const crypto = require("crypto");
const connection = require("./database/connection");
const routes = express.Router();
const ongController = require("./ongControllers/ongController");
const incidentsController = require("./ongControllers/incidentsController");
const profileController = require("./ongControllers/profileController");
const sessionController = require("./ongControllers/sessionsController");


routes.post("/session",sessionController.create);
routes.get("/ongs", ongController.index);
routes.post('/ongs', ongController.create);

routes.post("/incidents",incidentsController.createIncident);
routes.get("/incidents",incidentsController.index);
routes.delete("/incidents/:id",incidentsController.deleteIncident);
routes.get("/profile",profileController.index);



module.exports = routes;
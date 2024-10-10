import express from "express";
import ClientesController from "../controllers/Cliente.controller.js";

const router = express.Router();

router
    .get("/Clientes", ClientesController.getAll) // get all data from the table
    .get("/Clientes/:id", ClientesController.getById) // get data by id
    .post("/Clientes", ClientesController.post) // create new data
    .put("/Clientes/:id", ClientesController.update) // update data by id
    .delete("/Clientes/:id", ClientesController.remove); // delete data by id

export default router;
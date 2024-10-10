import express from "express";
import EmpleadoController from "../controllers/Empleado.controller.js";

const router = express.Router();

router
    .get("/Empleado", EmpleadoController.getAll) // get all data from the table
    .get("/Empleado/:id", EmpleadoController.getById) // get data by id
    .post("/Empleado", EmpleadoController.post) // create new data
    .put("/Empleado/:id", EmpleadoController.update) // update data by id
    .delete("/Empleado/:id", EmpleadoController.remove); // delete data by id

export default router;
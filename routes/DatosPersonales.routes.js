import express from "express";
import  DatosPersonalesController  from "../controllers/DatosPersonales.controller.js";

const router = express.Router();

router
    .get("/DatosPersonales", DatosPersonalesController.getAll) // get all data from the table
    .get("/DatosPersonales/:id", DatosPersonalesController.getById) // get data by id
    .post("/DatosPersonales", DatosPersonalesController.post) // create new data
    .put("/DatosPersonales/:id", DatosPersonalesController.update) // update data by id
    .delete("/DatosPersonales/:id", DatosPersonalesController.remove); // delete data by id

export default router;
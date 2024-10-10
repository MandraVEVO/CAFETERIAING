import express from "express";
import AdministrativoController from "../controllers/Administrativo.controller.js";

const router = express.Router();

router
    .get("/Administrativo", AdministrativoController.getAll) // get all data from the table
    .get("/Administrativo/:id", AdministrativoController.getById) // get data by id
    .post("/Administrativo", AdministrativoController.post) // create new data
    .put("/Administrativo/:id", AdministrativoController.update) // update data by id
    .delete("/Administrativo/:id", AdministrativoController.remove); // delete data by id

export default router;
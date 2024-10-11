import express from "express";
import FacturaController from "../controllers/Factura.controller.js";

const router = express.Router();

router
    .get("/Factura", FacturaController.getAll) // get all data from the table
    .get("/Factura/:id", FacturaController.getById) // get data by id
    .post("/Factura", FacturaController.post) // create new data
    .put("/Factura/:id", FacturaController.update) // update data by id
    .delete("/Factura/:id", FacturaController.remove); // delete data by id

export default router;
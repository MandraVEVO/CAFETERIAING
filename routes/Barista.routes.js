import express from "express";
import BaristaController from "../controllers/Barista.controller.js";

const router = express.Router();

router
    .get("/Barista", BaristaController.getAll) // get all data from the table
    .get("/Barista/:id", BaristaController.getById) // get data by id
    .post("/Barista", BaristaController.post) // create new data
    .put("/Barista/:id", BaristaController.update) // update data by id
    .delete("/Barista/:id", BaristaController.remove); // delete data by id

export default router;
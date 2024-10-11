import express from 'express';
import ArticuloMenuController from '../controllers/ArticuloMenu.controller.js';

const router = express.Router();

router
    .get("/ArticuloMenu", ArticuloMenuController.getAll) // get all data from the table
    .get("/ArticuloMenu/:id", ArticuloMenuController.getById) // get data by id
    .post("/ArticuloMenu", ArticuloMenuController.post) // create new data
    .put("/ArticuloMenu/:id", ArticuloMenuController.update) // update data by id
    .delete("/ArticuloMenu/:id", ArticuloMenuController.remove); // delete data by id

export default router;
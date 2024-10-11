import express from "express";
import PedidoController from "../controllers/Pedido.controller.js";

const router = express.Router();

router
    .get("/Pedido", PedidoController.getAll) // get all data from the table
    .get("/Pedido/:id", PedidoController.getById) // get data by id
    .post("/Pedido", PedidoController.post) // create new data
    .put("/Pedido/:id", PedidoController.update) // update data by id
    .delete("/Pedido/:id", PedidoController.remove); // delete data by id

export default router;
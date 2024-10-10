import express from "express";
import DatosPersonalesRoutes from "./DatosPersonales.routes.js";
import ClienteRoutes from "./Clientes.routes.js";

function routes(app){
    const router = express.Router();
    app.use("/api/v1", router);
    router.use('', DatosPersonalesRoutes);
    router.use('', ClienteRoutes);
}

export default routes;
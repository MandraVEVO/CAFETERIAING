import express from "express";
import DatosPersonalesRoutes from "./DatosPersonales.routes.js";

function routes(app){
    const router = express.Router();
    app.use("/api/v1", router);
    router.use("", DatosPersonalesRoutes);
}

export default routes;
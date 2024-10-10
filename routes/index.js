import express from "express";
import DatosPersonalesRoutes from "./DatosPersonales.routes.js";
import ClienteRoutes from "./Clientes.routes.js";
import EmpleadoRoutes from "./Empleado.routes.js";
import BaristaRoutes from "./Barista.routes.js";
import AdministrativoRoutes from "./Administrativo.routes.js";

function routes(app){
    const router = express.Router();
    app.use("/api/v1", router);
    router.use('', DatosPersonalesRoutes);
    router.use('', ClienteRoutes);
    router.use('', EmpleadoRoutes);
    router.use('', BaristaRoutes);
    router.use('', AdministrativoRoutes);   
}

export default routes;
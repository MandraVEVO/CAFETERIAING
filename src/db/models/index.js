import {Sequelize}  from "sequelize";
import  config   from "../../config/config.js";
import { DatosPersonales, DatosPersonalesScheme } from "../models/DatosPersonales.js";
/* aqui las pinches tablas */
function setupModels(sequelize)
{
    DatosPersonales.init(DatosPersonalesScheme, DatosPersonales.config(sequelize));
    /* para todas las tablas */
    /* las relaciones hasta abajo */
}

const sequelize = new Sequelize(
    config.dbName,
    config.dbUser,
    config.dbPassword,
    {
        host: config.dbHost,
        port: config.dbPort,
        dialect: "postgres"     
    }

);

sequelize.sync();
setupModels(sequelize);

export { setupModels, DatosPersonales };



import {Sequelize}  from "sequelize";
import  config   from "../../config/config.js";
import { DatosPersonales, DatosPersonalesScheme } from "../models/DatosPersonales.js";
import { Cliente, ClienteScheme } from "../models/Cliente.js";
import { Empleado, EmpleadoScheme } from "../models/Empleado.js";
/* aqui las pinches tablas */
function setupModels(sequelize)
{
    DatosPersonales.init(DatosPersonalesScheme, DatosPersonales.config(sequelize));
    Cliente.init(ClienteScheme, Cliente.config(sequelize));
    Empleado.init(EmpleadoScheme, Empleado.config(sequelize));
    /* para todas las tablas */
    /* las relaciones hasta abajo */


    /* herencia datos personales y cliente */
    DatosPersonales.hasOne(Cliente); //el que va heredar
    Cliente.belongsTo(DatosPersonales); 
    /* herencia datos personales y empleado */
    DatosPersonales.hasOne(Empleado); //el que va heredar
    Empleado.belongsTo(DatosPersonales);
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

export { setupModels, DatosPersonales, Cliente, Empleado };    



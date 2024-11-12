import {Sequelize}  from "sequelize";
import  config   from "../../config/config.js";
import { DatosPersonales, DatosPersonalesScheme } from "../models/DatosPersonales.js";
import { Cliente, ClienteScheme } from "../models/Cliente.js";
import { Empleado, EmpleadoScheme } from "../models/Empleado.js";
import { Barista, BaristaScheme } from "../models/Barista.js";
import { Administrativo, AdministrativoScheme } from "./Administrativo.js";
import {Pedido, PedidoScheme} from "./Pedido.js";
import {Factura, FacturaScheme} from "./Factura.js";
import { ArticuloMenu, ArticuloMenuScheme } from "./ArticuloMenu.js";
import { Menu, MenuScheme } from "./Menu.js";
import { Cafeteria,CafeteriaScheme } from "./Cafeteria.js";
/* aqui las pinches tablas */
function setupModels(sequelize)
{
    DatosPersonales.init(DatosPersonalesScheme, DatosPersonales.config(sequelize));
    Cliente.init(ClienteScheme, Cliente.config(sequelize));
    Empleado.init(EmpleadoScheme, Empleado.config(sequelize));
    Barista.init(BaristaScheme, Barista.config(sequelize));
    Administrativo.init(AdministrativoScheme, Administrativo.config(sequelize));
    Pedido.init(PedidoScheme, Pedido.config(sequelize));
    Factura.init(FacturaScheme, Factura.config(sequelize));
    ArticuloMenu.init(ArticuloMenuScheme, ArticuloMenu.config(sequelize));
    Menu.init(MenuScheme, Menu.config(sequelize));
    Cafeteria.init(CafeteriaScheme, Cafeteria.config(sequelize));

    /* para todas las tablas */
    /* las relaciones hasta abajo */


    /* herencia datos personales y cliente */
    DatosPersonales.hasOne(Cliente); //el que va heredar
    Cliente.belongsTo(DatosPersonales); 
    /* herencia datos personales y empleado */
    DatosPersonales.hasOne(Empleado); //el que va heredar
    Empleado.belongsTo(DatosPersonales);
    /* herencia empleado y barista */
    Empleado.hasOne(Barista); //el que va heredar
    Barista.belongsTo(Empleado);
    /* herencia empleado y administrativo */
    Empleado.hasOne(Administrativo); //el que va heredar
    Administrativo.belongsTo(Empleado);


    /* faltan las relaciones para pedido */
    ArticuloMenu.hasMany(Pedido);
    Pedido.belongsTo(ArticuloMenu);

    Cliente.hasMany(Pedido);
    Pedido.belongsTo(Cliente);

    /* Menu.hasMany(ArticuloMenu);
    ArticuloMenu.belongsTo(Menu); */

    Menu.hasOne(Cafeteria);
    Cafeteria.belongsTo(Menu);

    Cafeteria.hasMany(Empleado);
    Empleado.belongsTo(Cafeteria);

    Factura.hasOne(Pedido);
    Pedido.belongsTo(Factura);
}

const sequelize = new Sequelize(config.dbUrl, {
    dialect: 'postgres'
});

sequelize.sync();
setupModels(sequelize);

export { setupModels, DatosPersonales, Cliente, Empleado, Barista, Administrativo, Pedido, Factura, ArticuloMenu, Menu, Cafeteria };    



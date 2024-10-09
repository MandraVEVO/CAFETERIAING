import { Model, DataTypes } from "sequelize"

const TABLE_NAME = "datosPersonales";

class DatosPersonales extends Model{
    static config(sequelize){
        return{
            sequelize,
            tableName: TABLE_NAME,
            modelName: "DatosPersonales",
            timestamps: false
        }
    }
}

const DatosPersonalesScheme = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    telefono:{
        type: DataTypes.STRING,
        allowNull: false,
        field: "telefono",
    },
    direccion:{
        type: DataTypes.STRING,
        allowNull: false,
        field: "direccion"
    },
    correo:{
        type: DataTypes.STRING,
        allowNull: false,
        field: "correo"
    },
    genero:{
        type: DataTypes.STRING,
        allowNull: false,
        field: "genero"
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
        field: "nombre"
    },
    fechaNac:{
        type: DataTypes.STRING,
        allowNull: false,
        field: "fechaNac"
    }
}

export {DatosPersonales, DatosPersonalesScheme}

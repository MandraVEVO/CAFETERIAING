import { Model,DataTypes } from "sequelize";

const TABLE_NAME = "cafeteria";

class Cafeteria extends Model{
    static config(sequelize){
        return{
            sequelize,
            tableName: TABLE_NAME,
            modelName: "Cafeteria",
            timestamps: false
        }
    }
}

const CafeteriaScheme = { 
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "nombre",
    },
    ubicacion: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "ubicacion",
    },
    empleado: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        field: "empleado",
    }
}

export {Cafeteria, CafeteriaScheme}
import { Model, DataTypes } from "sequelize";

const TABLE_NAME = "articuloMenu";

class ArticuloMenu extends Model{
    static config(sequelize){
        return{
            sequelize,
            tableName: TABLE_NAME,
            modelName: "ArticuloMenu",
            timestamps: false
        }
    }
}

const ArticuloMenuScheme = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
        field: "nombre"
    },
    precio:{
        type: DataTypes.FLOAT,
        allowNull: false,
        field: "precio"
    },
    descripcion:{
        type: DataTypes.STRING,
        allowNull: false,
        field: "descripcion"
    },
}

export {ArticuloMenu, ArticuloMenuScheme}
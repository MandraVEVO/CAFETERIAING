import { Model, DataTypes } from "sequelize";

const TABLE_NAME = "menu";

class Menu extends Model{
    static config(sequelize){
        return{
            sequelize,
            tableName: TABLE_NAME,
            modelName: "Menu",
            timestamps: false
        }
    }
}

const MenuScheme = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    articulos: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        field: "articulos",
    }
}

export {Menu, MenuScheme}
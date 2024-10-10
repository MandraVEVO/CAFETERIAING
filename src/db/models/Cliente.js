import { Model,DataTypes } from "sequelize";

const TABLE_NAME = "cliente";

class Cliente extends Model{
    static config(sequelize){
        return{
            sequelize,
            tableName: TABLE_NAME,
            modelName: "Cliente",
            timestamps: false
        }
    }
}

const ClienteScheme = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    }
}

export {Cliente, ClienteScheme}
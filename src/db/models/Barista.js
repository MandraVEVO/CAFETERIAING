import { Model, DataTypes } from "sequelize";

const TABLE_NAME = "barista";

class Barista extends Model{
    static config(sequelize){
        return{
            sequelize,
            tableName: TABLE_NAME,
            modelName: "Barista",
            timestamps: false
        }
    }
}

const BaristaScheme = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    especialidad: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        field: "especialidad",
    }
}

export {Barista, BaristaScheme}
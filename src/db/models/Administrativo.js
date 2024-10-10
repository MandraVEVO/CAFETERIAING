import { Model, DataTypes } from "sequelize";

const TABLE_NAME = "administrativo";

class Administrativo extends Model{
    static config(sequelize){
        return{
            sequelize,
            tableName: TABLE_NAME,
            modelName: "Administrativo",
            timestamps: false
        }
    }
}

const AdministrativoScheme = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    area: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "area",
    },
    nivelAcceso: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "nivelAcceso",
    },
}

export {Administrativo, AdministrativoScheme}
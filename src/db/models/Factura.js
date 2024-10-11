import {Model, DataTypes} from "sequelize";

const TABLE_NAME = "factura";

class Factura extends Model{
    static config(sequelize){
        return{
            sequelize,
            tableName: TABLE_NAME,
            modelName: "Factura",
            timestamps: false
        }
    }
}

const FacturaScheme = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    pedido: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "pedido",
    },
    fecha: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "fecha",
    },
    montoTotal: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: "montoTotal"
    }
}

export {Factura, FacturaScheme}
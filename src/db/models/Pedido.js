import { Model, DataTypes } from "sequelize";

const TABLE_NAME = "pedido";

class Pedido extends Model {
    static config(sequelize){
        return{
            sequelize,
            tableName: TABLE_NAME,
            modelName: "Pedido",
            timestamps: false
        }
    }
}

const PedidoScheme = {
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

export {Pedido, PedidoScheme};
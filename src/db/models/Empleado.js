import { Model, DataTypes } from "sequelize";

const TABLE_NAME = "empleado";

class Empleado extends Model{
    static config(sequelize){
        return{
            sequelize,
            tableName: TABLE_NAME,
            modelName: "Empleado",
            timestamps: false
        }
    }
}

const EmpleadoScheme = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    cargoEmpleado: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "cargoEmpleado",
    },
    curp: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "curp",
        validate: {
            len: [18, 18], // Validate that the length is exactly 18 characters
        }
    },
    rfc: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "rfc",
        validate: {
            len: [13, 13],
        },
    },  
    costoHora: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: "contrasena"
    }
}

export {Empleado, EmpleadoScheme}
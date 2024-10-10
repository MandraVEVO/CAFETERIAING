import {Empleado} from "../src/db/models/index.js";
import {DatosPersonales} from "../src/db/models/index.js";


class EmpleadoService{
    constructor(){}
    async create(data){ // create new data
        return await Empleado.create(data);
    }
    async getAll(){ // get all data from the table
        return await Empleado.findAll({
            include: [{
                model: DatosPersonales
            }]
        });
    }
    async getById(id){ // get data by id
        return await Empleado.findByPk(id,{
            include: DatosPersonales
        });
    }
    async update(id, data){ // update data by id
    const Empleado = await Empleado.findByPk(id);
    return await Empleado.update(data);
    }

    async delete(id){ // delete data by id
        const Empleado = await Empleado.findByPk(id);
        await Empleado.destroy();
        return {deleted: true};
    }

}

export default EmpleadoService;
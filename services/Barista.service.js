import { Barista } from "../src/db/models/index.js";
import { Empleado } from "../src/db/models/index.js";

class BaristaService{
    constructor(){}
    async create(data){ // create new data
        return await Barista.create(data);
    }
    async getAll(){ // get all data from the table
        return await Barista.findAll({
            include: [{
                model: Empleado
            }]
        });
    }
    async getById(id){ // get data by id
        return await Barista.findByPk(id,{
            include: Empleado
        });
    }
    async update(id, data){ // update data by id
    const Barista = await Barista.findByPk(id);
    return await Barista.update(data);
    }

    async delete(id){ // delete data by id
        const Barista = await Barista.findByPk(id);
        await Barista.destroy();
        return {deleted: true};
    }

}

export default BaristaService;
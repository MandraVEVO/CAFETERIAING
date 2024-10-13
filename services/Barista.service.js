import { Barista, Cafeteria } from "../src/db/models/index.js";
import { DatosPersonales } from "../src/db/models/index.js";
import { Empleado } from "../src/db/models/index.js";

class BaristaService{
    constructor(){}
    async create(data){ // create new data
        return await Barista.create(data);
    }
    async getAll(){ // get all data from the table
        return await Barista.findAll({
            include: [{
                model: Empleado,
                include:
                [DatosPersonales, Cafeteria]
                
            }]
        });
    }
    async getById(id){ // get data by id
        return await Barista.findByPk(id,{
        include:[
             { 
                model: Empleado,
                include:
                [DatosPersonales, Cafeteria]
            }
        ]
        });
    }
    async update(id, data){ // update data by id
    const barista = await Barista.findByPk(id);
    return await barista.update(data);
    }

    async delete(id){ // delete data by id
        const barista = await Barista.findByPk(id);
        await barista.destroy();
        return {deleted: true};
    }

}

export default BaristaService;
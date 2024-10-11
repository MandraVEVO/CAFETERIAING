import { Administrativo } from "../src/db/models/index.js";
import { DatosPersonales } from "../src/db/models/index.js";
import { Empleado } from "../src/db/models/index.js";

class AdministrativoService{
    constructor(){}
    async create(data){ // create new data
        return await Administrativo.create(data);
    }
    async getAll(){ // get all data from the table
        return await Administrativo.findAll({
            include: [{
                model: Empleado,
            include: {
                model: DatosPersonales}         
            }]
        });
    }
    async getById(id){ // get data by id
        return await Administrativo.findByPk(id,{
            include: [{
                model: Empleado,
                include: {
                    model: DatosPersonales}   
            }]
        });
    }
    async update(id, data){ // update data by id
    const administrativo = await Administrativo.findByPk(id);
    return await administrativo.update(data);
    }

    async delete(id){ // delete data by id
        const administrativo = await Administrativo.findByPk(id);
        await administrativo.destroy();
        return {deleted: true};
    }
}

export default AdministrativoService;
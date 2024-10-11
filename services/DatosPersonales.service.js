import {DatosPersonales} from "../src/db/models/index.js";


class DatosPersonalesService{
    constructor(){}
    async create(data){ // create new data
        return await DatosPersonales.create(data);
    }
    async getAll(){ // get all data from the table
        return await DatosPersonales.findAll();
    }
    async getById(id){ // get data by id
        return await DatosPersonales.findByPk(id);
    }
    async update(id, data){ // update data by id
    const datosPersonales = await DatosPersonales.findByPk(id);
    return await datosPersonales.update(data);
    }

    async delete(id){ // delete data by id
        const datosPersonales = await DatosPersonales.findByPk(id);
        await datosPersonales.destroy();
        return {deleted: true};
    }

}

export default DatosPersonalesService;
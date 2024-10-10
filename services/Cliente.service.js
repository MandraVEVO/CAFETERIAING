import { Cliente} from "../src/db/models/index.js";
import { DatosPersonales } from "../src/db/models/index.js";

class ClienteService{
    constructor(){}

    async create(data){ // create new data
        return await Cliente.create(data);
    }
    async getAll(){ // get all data from the table
        return await Cliente.findAll({
            include: [{
                model: DatosPersonales
            }]
        });
    }
    async getById(id){ // get data by id
        return await Cliente.findByPk(id,{
            include: DatosPersonales
        });
    }
    async update(id, data){ // update data by id
    const cliente = await Cliente.findByPk(id);
    return await cliente.update(data);
    }

    async delete(id){ // delete data by id
        const cliente = await Cliente.findByPk(id);
        await cliente.destroy();
        return {deleted: true};
    }

}
export default ClienteService;
import { Factura } from "../src/db/models/index.js";

class FacturaService{  //revisar porque no hereda de nadie pero por si acaso preguntale al negri
    constructor(){}
    async create(data){ // create new data
        return await Factura.create(data);
    }
    async getAll(){ // get all data from the table
        return await Factura.findAll();
    }
    async getById(id){ // get data by id
        return await Factura.findByPk(id);
    }
    async update(id, data){ // update data by id
    const Factura = await Factura.findByPk(id);
    return await Factura.update(data);
    }

    async delete(id){ // delete data by id
        const Factura = await Factura.findByPk(id);
        await Factura.destroy();
        return {deleted: true};
    }
}

export default FacturaService;
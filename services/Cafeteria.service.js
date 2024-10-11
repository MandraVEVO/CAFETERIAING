import { Cafeteria } from "../src/db/models/index.js";
import {Menu} from "../src/db/models/index.js";

class CafeteriaService{
    constructor(){}
    async create(data){
        return await Cafeteria.create(data);
    }
    async getAll(){
        return await Cafeteria.findAll({
            include: [{
                model: Menu
            }]
        });
    }
    async getById(id){
        return await Cafeteria.findByPk(id,{
            include: Menu
        });
    }
    async update(id, data){
        const cafeteria = await Cafeteria.findByPk(id);
        return await cafeteria.update(data);
    }
    async delete(id){
        const cafeteria = await Cafeteria.findByPk(id);
        await cafeteria.destroy();
        return {deleted: true};
    }
}

export default CafeteriaService;
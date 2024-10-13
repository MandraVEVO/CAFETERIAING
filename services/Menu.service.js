import { Menu } from "../src/db/models/index.js";


class MenuService{
    constructor(){}
    async create(data){
        return await Menu.create(data);
    }
    async getAll(){
        return await Menu.findAll({
            /* include: [{
                model: Cafeteria
            }] */
        });
    }
    async getById(id){
        return await Menu.findByPk(id/* ,{
            include: Cafeteria
        } */);
    }
    async update(id, data){
        const menu = await Menu.findByPk(id);
        return await menu.update(data);
    }
    async delete(id){
        const menu = await Menu.findByPk(id);
        await menu.destroy();
        return {deleted: true};
    }
}

export default MenuService;
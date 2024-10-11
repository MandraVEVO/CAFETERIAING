import { ArticuloMenu } from "../src/db/models/index.js";
/* import {Menu} */

class ArticuloMenuService{
    constructor(){}
    async create(data){
        return await ArticuloMenu.create(data);
    }
    async getAll(){
        return await ArticuloMenu.findAll(/* {
            include: [{
                model: Menu //crear menu
            }]
        } */);
    }
    async getById(id){
        return await ArticuloMenu.findByPk(id/* ,{
            include: Menu //crear menu
        } */);
    }
    async update(id, data){
        const articuloMenu = await ArticuloMenu.findByPk(id);
        return await articuloMenu.update(data);
    }
    async delete(id){
        const articuloMenu = await ArticuloMenu.findByPk(id);
        await articuloMenu.destroy();
        return {deleted: true};
    }
}

export default ArticuloMenuService;
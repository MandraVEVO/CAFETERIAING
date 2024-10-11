import {Pedido} from "../src/db/models/index.js";
import { Cliente } from "../src/db/models/index.js";

class PedidoService{
    constructor(){}
    async create(data){
        return await Pedido.create(data);
    }

    async getAll(){
        return await Pedido.findAll({
            include: [{
                Model: Cliente,ArticuloMenu,Factura //revisar esto 
            }]
        })
    }

    async getById(id){
        return await Pedido.findByPk(id,{
            include: Cliente,ArticuloMenu,Factura //revisar esto
        })
    }

    async update(id, data){
    const pedido = await Pedido.findByPk(id);
    return await pedido.update(data);
    }

    async delete(id){
        const pedido = await Pedido.findByPk(id);
        await pedido.destroy();
        return {deleted: true};
    }
}

export default PedidoService;
import {DatosPersonales, Pedido} from "../src/db/models/index.js";
import { Cliente } from "../src/db/models/index.js";
import { ArticuloMenu } from "../src/db/models/index.js";
import { Factura } from "../src/db/models/index.js";

class PedidoService{
    constructor(){}
    async create(data){
        return await Pedido.create(data);
    }

    async getAll(){
        return await Pedido.findAll({
            include: [
                {
                model: Factura
            },
            {
                model: Cliente,
                include: [DatosPersonales] 
            },
            {
                model: ArticuloMenu
            }
        ]
        })
    }

    async getById(id){
        return await Pedido.findByPk(id,{
            include: [
                {
                model: Factura
            },
            {
                model: Cliente,
                include: [DatosPersonales] 
            },
            {
                model: ArticuloMenu
            }
        ]
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
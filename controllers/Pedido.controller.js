
import PedidoService from "../services/Pedido.service.js";

const pedidoService = new PedidoService();

const post = async (req, res) => {
    try{
        const pedido = await pedidoService.create(req.body);
        res.status(201).json(pedido);
    } catch (error){
        res.status(400).json({message: error.message});
    
    }
}

const getAll = async (req, res) => {
    try{
        const pedido = await pedidoService.getAll();
        res.status(200).json(pedido);
    }catch (error){
        res.status(400).json({message: error.message});
    }
}

const getById = async (req, res) => {
    try{
        const pedido = await pedidoService.getById(req.params.id);
        res.status(200).json(pedido);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

const update = async (req, res) => {
    try{
        const pedido = await pedidoService.update(req.params.id, req.body);
        res.status(200).json(pedido);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const remove = async (req, res) => {
    try{
        const pedido = await pedidoService.delete(req.params.id);
        res.status(200).json(pedido);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

export default {post, getAll, getById, update, remove};


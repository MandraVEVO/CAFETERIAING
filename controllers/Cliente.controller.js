import ClienteService from "../services/Cliente.service.js";

const clienteService = new ClienteService();

const post = async (req, res) => {
    try{
        const cliente = await clienteService.create(req.body);
        res.status(201).json(cliente);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const getAll = async (req, res) => {
    try{
        const cliente = await clienteService.getAll();
        res.status(200).json(cliente);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const getById = async (req, res) => {
    try{
        const cliente = await clienteService.getById(req.params.id);
        res.status(200).json(cliente);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const update = async (req, res) => {
    try{
        const cliente = await clienteService.update(req.params.id, req.body);
        res.status(200).json(cliente);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const remove = async (req, res) => {
    try{
        const cliente = await clienteService.delete(req.params.id);
        res.status(200).json(cliente);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

export default { post, getAll, getById, update, remove };
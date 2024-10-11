import FacturaService from "../services/Factura.service.js";

const facturaService = new FacturaService();

const post = async (req, res) => {
    try{
        const factura = await facturaService.create(req.body);
        res.status(201).json(factura);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const getAll = async (req, res) => {
    try{
        const factura = await facturaService.getAll();
        res.status(200).json(factura);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const getById = async (req, res) => {
    try{
        const factura = await facturaService.getById(req.params.id);
        res.status(200).json(factura);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const update = async (req, res) => {
    try{
        const factura = await facturaService.update(req.params.id, req.body);
        res.status(200).json(factura);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const remove = async (req, res) => {
    try{
        const factura = await facturaService.delete(req.params.id);
        res.status(200).json(factura);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

export default { post, getAll, getById, update, remove };
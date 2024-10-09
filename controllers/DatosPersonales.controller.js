import DatosPersonalesService from "../services/DatosPersonales.service.js";

const datosPersonalesService = new DatosPersonalesService();

const post = async (req, res) => {
    try{
        const datosPersonales = await datosPersonalesService.create(req.body);
        res.status(201).json(datosPersonales);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const getAll = async (req, res) => {
    try{
        const datosPersonales = await datosPersonalesService.getAll();
        res.status(200).json(datosPersonales);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const getById = async (req, res) => {
    try{
        const datosPersonales = await datosPersonalesService.getById(req.params.id);
        res.status(200).json(datosPersonales);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const update = async (req, res) => {
    try{
        const datosPersonales = await datosPersonalesService.update(req.params.id, req.body);
        res.status(200).json(datosPersonales);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const remove = async (req, res) => {
    try{
        const datosPersonales = await datosPersonalesService.delete(req.params.id);
        res.status(200).json(datosPersonales);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

export default { post, getAll, getById, update, remove };
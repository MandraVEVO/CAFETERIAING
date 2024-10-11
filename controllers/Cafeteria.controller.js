import CafeteriaService from '../services/Cafeteria.service.js';

const cafeteriaService = new CafeteriaService();

const post = async (req, res) => {
    try{
        const cafeteria = await cafeteriaService.create(req.body);
        res.status(201).json(cafeteria);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const getAll = async (req, res) => {
    try{
        const cafeteria = await cafeteriaService.getAll();
        res.status(200).json(cafeteria);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const getById = async (req, res) => {
    try{
        const cafeteria = await cafeteriaService.getById(req.params.id);
        res.status(200).json(cafeteria);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const update = async (req, res) => {
    try{
        const cafeteria = await cafeteriaService.update(req.params.id, req.body);
        res.status(200).json(cafeteria);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const remove = async (req, res) => {
    try{
        const cafeteria = await cafeteriaService.delete(req.params.id);
        res.status(200).json(cafeteria);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

export default { post, getAll, getById, update, remove };

import AdministrativoService from "../services/Administrativo.service.js";

const administrativoService = new AdministrativoService();

const post = async (req, res) => {
    try{
        const administrativo = await administrativoService.create(req.body);
        res.status(201).json(administrativo);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const getAll = async (req, res) => {
    try{
        const administrativo = await administrativoService.getAll();
        res.status(200).json(administrativo);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const getById = async (req, res) => {
    try{
        const administrativo = await administrativoService.getById(req.params.id);
        res.status(200).json(administrativo);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const update = async (req, res) => {
    try{
        const administrativo = await administrativoService.update(req.params.id, req.body);
        res.status(200).json(administrativo);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const remove = async (req, res) => {
    try{
        const administrativo = await administrativoService.delete(req.params.id);
        res.status(200).json(administrativo);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

export default { post, getAll, getById, update, remove };
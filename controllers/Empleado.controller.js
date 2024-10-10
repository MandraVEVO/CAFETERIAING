import EmpleadoService from "../services/Empleado.service.js";

const empleadoService = new EmpleadoService();

const post = async (req, res) => {
    try{
        const empleado = await empleadoService.create(req.body);
        res.status(201).json(empleado);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const getAll = async (req, res) => {
    try{
        const empleado = await empleadoService.getAll();
        res.status(200).json(empleado);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const getById = async (req, res) => {
    try{
        const empleado = await empleadoService.getById(req.params.id);
        res.status(200).json(empleado);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const update = async (req, res) => {
    try{
        const empleado = await empleadoService.update(req.params.id, req.body);
        res.status(200).json(empleado);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const remove = async (req, res) => {
    try{
        const empleado = await empleadoService.delete(req.params.id);
        res.status(200).json(empleado);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}   

export default { post, getAll, getById, update, remove };
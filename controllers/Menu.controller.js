import MenuService from '../services/Menu.service.js';

const menuService = new MenuService();

const post = async (req, res) => {
    try{
        const menu = await menuService.create(req.body);
        res.status(201).json(menu);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const getAll = async (req, res) => {
    try{
        const menu = await menuService.getAll();
        res.status(200).json(menu);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const getById = async (req, res) => {
    try{
        const menu = await menuService.getById(req.params.id);
        res.status(200).json(menu);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const update = async (req, res) => {
    try{
        const menu = await menuService.update(req.params.id, req.body);
        res.status(200).json(menu);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const remove = async (req, res) => {
    try{
        const menu = await menuService.delete(req.params.id);
        res.status(200).json(menu);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

export default { post, getAll, getById, update, remove };
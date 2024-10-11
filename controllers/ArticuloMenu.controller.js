import ArticuloMenu from "../services/ArticuloMenu.service.js";

const articuloMenu = new ArticuloMenu();

const post = async (req, res) => {
    try{
        const articulo = await articuloMenu.create(req.body);
        res.status(201).json(articulo);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const getAll = async (req, res) => {
    try{
        const articulo = await articuloMenu.getAll();
        res.status(200).json(articulo);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const getById = async (req, res) => {
    try{
        const articulo = await articuloMenu.getById(req.params.id);
        res.status(200).json(articulo);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const update = async (req, res) => {
    try{
        const articulo = await articuloMenu.update(req.params.id, req.body);
        res.status(200).json(articulo);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

const remove = async (req, res) => {
    try{
        const articulo = await articuloMenu.delete(req.params.id);
        res.status(200).json(articulo);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

export default { post, getAll, getById, update, remove };
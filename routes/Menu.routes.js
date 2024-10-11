import express from 'express';
import MenuController from '../controllers/Menu.controller.js';

const router = express.Router();

router
    .get('/Menu', MenuController.getAll) // get all data from the table
    .get('/Menu/:id', MenuController.getById) // get data by id
    .post('/Menu', MenuController.post) // create new data
    .put('/Menu/:id', MenuController.update) // update data by id
    .delete('/Menu/:id', MenuController.remove); // delete data by id

export default router;
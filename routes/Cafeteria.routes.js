import express from 'express';
import CafeteriaController from '../controllers/Cafeteria.controller.js';

const router = express.Router();

router
    .get('/cafeteria', CafeteriaController.getAll)
    .get('/cafeteria/:id', CafeteriaController.getById)
    .post('/cafeteria', CafeteriaController.post)
    .put('/cafeteria/:id', CafeteriaController.update)
    .delete('/cafeteria/:id', CafeteriaController.remove);

export default router;
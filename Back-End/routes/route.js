const express = require('express');
const route = express.Router();

const controller = require('../controllers/controller');

route.get('/', controller.getAllFilms);

route.get('/:id', controller.getOneFilm); 

route.delete('/delete/:id', controller.deleteOneFilm);

module.exports = route;



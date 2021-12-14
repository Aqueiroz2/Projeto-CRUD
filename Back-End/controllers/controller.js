const service = require('../services/service');

const getAllFilms = (req, res) => {
  const filmsAll = service.getFilms();
  res.send(filmsAll)
}

const getOneFilm = (req, res) => {
  const id = req.params.id;
  const filmById = service.getFilmsById(id);
  res.send(filmById);
}

module.exports = {
    getAllFilms,
    getOneFilm,
  }

  
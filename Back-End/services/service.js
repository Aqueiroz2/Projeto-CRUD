const films = [{
    id: 1,
    name: "Se beber, não case! Part II",
    image: "https://m.media-amazon.com/images/I/61JzGQKtXIL._AC_SL1000_.jpg",
    gender: "Comedia",
    score: 10,
  },
  {
    id: 2,
    name: "Liga da Justiça - Snyder Cut",
    image: "https://www.depoisdasessao.com.br/wp-content/uploads/2021/03/snydercut-capa-800x450.png",
    gender: "Ação",
    score: 9,
  },
  {
    id: 3,
    name: "De volta para o Futuro",
    image: "https://2.bp.blogspot.com/-p8sSjwhATgU/WnyuMOqnygI/AAAAAAAAEd8/K093c5EjIDw2cILOfZBSs-urABgRBaOMQCLcBGAs/s640/de-volta-para-o-futuro-curiosidades.jpg",
    gender: "Ficção Científica/Aventura",
    score: 8,
  },
  {
    id: 4,
    name: "Cemitério Maldito",
    image: "https://br.web.img3.acsta.net/pictures/19/02/07/15/38/3824336.jpg",
    gender: "Terror",
    score: 8,
  },
  {
    id: 5,
    name: "Os Mercenários 2",
    image: "https://i.ytimg.com/vi/Sm_uya3PVhc/maxresdefault.jpg",
    gender: "Ação",
    score: 9,
  }
  ]

  const getFilms = () => films;

  const getFilmsById = (id) => {
    return Films.find( (film) => film.id == id)
  }

  const postFilm = (newFilm) => {
    const idParam = Films.length + 1;
    newFilm.id = idParam
    Films.push(newFilm);
    return newFilm;
  }

  const deleteFilm = (id) => {
    if(!id){
      return
    }

    module.exports = {
        getFilms,
        getFilmsById,
        deleteFilm
      }
// app.js
const express = require('express');
const AnimeController = require('./controllers/animeController');

const app = express();
app.use(express.json());

// Definindo as rotas
app.get('/animes', AnimeController.getAllAnimes);
app.get('/animes/:id', AnimeController.getAnimeById);
app.post('/animes', AnimeController.createAnime);
app.put('/animes/:id', AnimeController.updateAnime);
app.delete('/animes/:id', AnimeController.deleteAnime);

module.exports = app; // Exportando o app para ser usado no server.js

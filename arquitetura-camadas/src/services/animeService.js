// services/animeService.js
const AnimeRepository = require('../repositories/animeRepository');

class AnimeService {
	static getAllAnimes() {
		return AnimeRepository.getAll();
	}

	static getAnimeById(id) {
		return AnimeRepository.getById(id);
	}

	static createAnime(animeData) {
		AnimeRepository.add(animeData);
		return animeData;
	}

	static updateAnime(id, animeData) {
		return AnimeRepository.update(id, animeData);
	}

	static deleteAnime(id) {
		return AnimeRepository.delete(id);
	}
}

module.exports = AnimeService;

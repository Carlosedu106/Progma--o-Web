// repositories/animeRepository.js
const animes = [
	{ id: 1, name: 'Attack on Titan', genre: 'Shounen' },
	{ id: 2, name: 'Naruto', genre: 'Shounen' },
];

class AnimeRepository {
	// Método para retornar todos os animes
	static getAll() {
		return animes;
	}

	// Método para buscar um anime pelo ID
	static getById(id) {
		return animes.find((anime) => anime.id === parseInt(id));
	}

	// Método para adicionar um novo anime
	static add(anime) {
		animes.push(anime);
	}

	// Método para atualizar um anime existente
	static update(id, updatedAnime) {
		const index = animes.findIndex((anime) => anime.id === parseInt(id));
		if (index !== -1) {
			animes[index] = { id: parseInt(id), ...updatedAnime };
			return animes[index];
		}
		return null;
	}

	// Método para excluir um anime
	static delete(id) {
		const index = animes.findIndex((anime) => anime.id === parseInt(id));
		if (index !== -1) {
			animes.splice(index, 1);
			return true;
		}
		return false;
	}
}

module.exports = AnimeRepository;

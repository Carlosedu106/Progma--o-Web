class Anime {
	constructor(id, name, genre, studio) {
		this.id = id;
		this.name = name;
		this.genre = genre;
		this.studio = studio;
	}

	static create(name, genre, studio) {
		return new Anime(uuidv4(), name, genre, studio);
	}
}

module.exports = Anime;

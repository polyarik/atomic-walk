class Field {
	constructor() {
		console.log("Field");

		this.bombs = [];
	}

	plantBomb(coords, size) {
		//choose one kind of bomb (bu size)
		const bomb = new Bomb(coords); //TEMP
		this.bombs.push(bomb);

		return true;
	}

	explodeBombs() {
		if (!this.bombs.length)
			return false;

		const explosions = [];

		for (let i = 0, l = this.bombs.length; i < l; i++) {
			const bomb = this.bombs[i];
			const explosion = bomb.explode();
			explosions.push(explosion);
		}

		this.bombs = [];
		return explosions;
	}
}
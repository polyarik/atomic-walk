class Field {
	constructor() {
		console.log("Field");

		this.bombs = [];
	}

	plantBomb(coords, size) {
		console.log(size);
		const bomb = new Bomb(coords, size);
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

	get renderData() {
		let renderData = {
			'bombs': []
		};

		const bombs = this.bombs;

		for (let i = 0, l = bombs.length; i < l; i++) {
			const bombRenderData = bombs[i].renderData;
			renderData.bombs.push(bombRenderData);
		}

		return renderData;
	}
}
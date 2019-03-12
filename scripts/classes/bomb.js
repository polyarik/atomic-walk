/*Should be classes wich extend from Bomb (super-bomb, etc)*/

class Bomb {
	constructor(coords) {
		console.log("Bomb");

		this.coords = coords;
		this.explodeRadius = 1; //in px
	}

	explode() {
		const explosion = {'coords': this.coords, 'radius': this.explodeRadius};
		return explosion;
	}
}
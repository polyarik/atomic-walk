/*Should be classes wich extend from Bomb (super-bomb, etc)*/

class Bomb {
	constructor(coords) {
		console.log("Bomb");

		this.coords = coords;
		this.explodeRadius = 100; //in px
	}

	explode() {
		const explosion = {'coords': this.coords, 'radius': this.explodeRadius};
		return explosion;
	}

	get renderData() {
		const coords = this.coords;
		const radius = Math.sqrt(this.explodeRadius);

		const fillColor = 'hsl(230, '+this.explodeRadius / 30+'%, 50%)';
		const strokeColor = 'hsl(230, 15%, 15%)'; //CALC COLOR

		const renderData = {
			'coords': coords,
			'radius': radius,
			'color': {
				'fill': fillColor,
				'stroke': strokeColor
			}
		};

		return renderData;
	}
}
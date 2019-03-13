class Bomb {
	constructor(coords, size) {
		//console.log("Bomb");
		this.coords = coords;
		this.explodeRadius = (size < 500) ? (100) : (size/10 + 50);
	}

	explode() {
		const explosion = {'coords': this.coords, 'radius': this.explodeRadius};
		return explosion;
	}

	get renderData() {
		const coords = this.coords;
		const radius = Math.round( Math.pow(this.explodeRadius, 5/11) );

		const fillColor = 'hsl(230, '+this.explodeRadius / 20+'%, 50%)';
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
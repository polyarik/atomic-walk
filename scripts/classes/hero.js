class Hero {
	constructor(coords) {
		console.log("Hero");

		this.hp = 100;
		this.coords = coords; // {'x', 'y'}
	}

	move(coords) {
		this.coords = coords;
	}

	changeHP(change) {
		this.hp += change;
		return this.hp;
	}

	get getCoords() {
		return this.coords;
	}

	get renderData() {
		const coords = {'x': this.coords.x, 'y': this.coords.y};
		const radius = 16; //CALC RADIUS

		const fillColor = 'hsl(120, 75%, 75%)'; //CALC COLOR
		const strokeColor = 'hsl(120, 15%, 15%)'; //CALC COLOR

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
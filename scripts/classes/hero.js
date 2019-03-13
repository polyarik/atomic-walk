class Hero {
	constructor(coords) {
		//console.log("Hero");
		this.hp = this.maxHP = 100000;
		this.coords = coords; // {'x', 'y'}

		this.hpElement = document.getElementById('hero-hp'); //TEMP
		this.hpElement.innerHTML = this.hp+"/"+this.maxHP;
	}

	move(coords) {
		this.coords = coords;
	}

	changeHP(change) {
		this.hp = (this.hp + change < 0) ? 0 :  (this.hp + change);

		this.hpElement.innerHTML = this.hp+"/"+this.maxHP;

		return this.hp;
	}

	get getCoords() {
		return this.coords;
	}

	get renderData() {
		const coords = {'x': this.coords.x, 'y': this.coords.y};
		const radius = 16; //CALC RADIUS

		//120 - 0
		const color = (this.hp / this.maxHP * 120 < 0) ? 0 : (this.hp / this.maxHP * 120);

		const fillColor = 'hsl('+color+', 75%, 75%)'; //CALC COLOR
		const strokeColor = 'hsl('+color+', 15%, 15%)'; //CALC COLOR

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
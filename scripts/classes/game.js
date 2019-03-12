class Game {
	constructor(canvasId) {
		console.log("Game");

		this.Field = new Field();
		this.Hero = new Hero( {'x': window.innerWidth/2, 'y': window.innerHeight/2} );
		this.Canvas = new Canvas(
			canvasId,
			{'hero': this.Hero.renderData, 'field': this.Field.renderData}
		);

		this.initControls();
	}

	initControls() {
		window.onmousedown = (e) => {
			const which = e.which;

			if (which === 1) {
				this.startBombPlanting = new Date();
			}
		}

		window.onmouseup = (e) => {
			const which = e.which;

			if (which === 1) {
				const coords = {'x': e.clientX, 'y': e.clientY};
				const bombSize = new Date() - this.startBombPlanting;
				this.startBombPlanting = 0;

				console.log(bombSize);

				this.plantBomb(coords, bombSize);
			} else if (which === 3) {
				this.explodeBombs();
			}
		}

		window.onmousemove = (e) => {
			const coords = {'x': e.clientX, 'y': e.clientY};
			this.Hero.move(coords);

			this.render();
		}
	}

	plantBomb(coords) {
		/*Add a new bomb*/
		this.Field.plantBomb(coords);

		this.render();
	}

	explodeBombs() {
		/*Detonate all bombs*/
		const explosions = this.Field.explodeBombs(); //explosions (coords, radius)
		console.log(explosions);

		//checking expls areas (will it touches Hero?) + (consider hero radius)

		this.render();
	}

	render() {
		const renderData = {
			'hero': this.Hero.renderData,
			'field': this.Field.renderData
		};

		this.Canvas.setRenderData = renderData;
	}

	/*start() {

	}

	end() {

	}*/

	//
}
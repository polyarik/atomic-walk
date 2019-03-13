class Game {
	constructor(heroCanvasId, fieldCanvasId) {
		console.log("Game");

		this.Field = new Field();
		this.Hero = new Hero( {'x': window.innerWidth/2, 'y': window.innerHeight/2} );
		this.Canvas = new Canvas(
			heroCanvasId,
			fieldCanvasId,
			{'hero': this.Hero.renderData, 'field': this.Field.renderData}
		);

		this.initControls();
	}

	initControls() {
		window.onmousedown = (e) => {
			const which = e.which;

			if (which === 3) {
				this.startBombPlanting = new Date();
			}
		}

		window.onmouseup = (e) => {
			const which = e.which;

			if (which === 3) {
				const coords = {'x': e.clientX, 'y': e.clientY};
				const bombSize = new Date() - this.startBombPlanting;
				this.startBombPlanting = 0;

				this.plantBomb(coords, bombSize);
			} else if (which === 1) {
				this.explodeBombs();
			}
		}

		window.onmousemove = (e) => {
			const coords = {'x': e.clientX, 'y': e.clientY};
			this.Hero.move(coords);

			const heroRenderData = this.Hero.renderData;
			this.Canvas.heroRenderData = heroRenderData;
		}
	}

	plantBomb(coords, bombSize) {
		/*Add a new bomb*/
		this.Field.plantBomb(coords, bombSize);

		const fieldRenderData = this.Field.renderData;
		this.Canvas.fieldRenderData = fieldRenderData;
	}

	explodeBombs() {
		/*Detonate all bombs*/
		const explosions = this.Field.explodeBombs(); //explosions (coords, radius)
		console.log(explosions);

		if (explosions) {
			//checking expls areas (will it touches Hero?) + (consider hero radius)

			const fieldRenderData = this.Field.renderData;
			this.Canvas.fieldRenderData = fieldRenderData;
		}
	}

	/*start() {

	}

	end() {

	}*/

	//
}
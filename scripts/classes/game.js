class Game {
	constructor(canvasesId) {
		//console.log("Game");
		this.Field = new Field();
		this.Hero = new Hero( {'x': window.innerWidth/2, 'y': window.innerHeight/2} );
		this.Canvas = new Canvas(
			canvasesId,
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
		const bombsRenderData = this.Field.renderData.bombs;
		const explosions = this.Field.explodeBombs(); //explosions (coords, radius)

		if (explosions) {
			const heroRenderData = this.Hero.renderData;

			for (let i = 0, l = explosions.length; i < l; i++) {
				const explosion = explosions[i];

				const explosionCoords = explosion.coords, explosionRadius = explosion.radius;
				const heroCords = heroRenderData.coords, heroRadius = heroRenderData.radius;

				let dist = Math.round(
					Math.sqrt(
						Math.abs(
							Math.pow(explosionCoords.x - heroCords.x, 2)
							+ Math.pow(explosionCoords.y - heroCords.y, 2)
						)
					)
				);

				dist = (dist - heroRadius < 0) ? 0 : (dist - heroRadius) //consider hero radius

				if (dist <= explosionRadius) {
					const damage = Math.round( Math.pow(explosionRadius - dist, 2) );
					const heroHP = this.Hero.changeHP(-damage);
					
					console.log('damage: '+damage);

					if (heroHP <= 0)
						this.end();
				}
			}

			const renderData = {'hero': this.Hero.renderData, 'field': this.Field.renderData};
			this.Canvas.setRenderData = renderData;
		}
	}

	/*start() {

	}*/

	end() {
		console.log('Game Over');
	}

	//
}
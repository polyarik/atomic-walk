class Game {
	constructor(canvasId) {
		console.log("Game");

		this.Field = new Field();
		this.Hero = new Hero( {'x': window.innerWidth/2, 'y': window.innerWidth/2} );

		this.initCanvas(canvasId);

		this.interval = window.setInterval(() => {
			this.render();
		}, 20);
	}

	// Graphics

	initCanvas(canvasId) {
		this.canvas = document.getElementById(canvasId);
		this.ctx = this.canvas.getContext("2d");

		window.onresize = () => {
			this.resize();
		}

		this.resize();
	}

	resize() {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;

		this.render();
	}

	render() {
		const canvas = this.canvas;
		const ctx = this.ctx;
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		this.renderHero();
	}

	renderHero() {
		const ctx = this.ctx;
		const heroRenderData = this.Hero.renderData;
		// {'coords': {'x', 'y'}, 'radius', 'color': {'fill', 'stroke'}};

		ctx.beginPath();
			ctx.arc(
				heroRenderData.coords.x,
				heroRenderData.coords.y,
				heroRenderData.radius,
				0,
				Math.PI*2,
				false
			);

			ctx.fillStyle = heroRenderData.color.fill;
			ctx.fill();

			ctx.lineWidth = heroRenderData.radius / 10;
			ctx.strokeStyle = heroRenderData.color.stroke;
			ctx.stroke();
		ctx.closePath();
	}

	// Gameplay

	plantBomb(coords) {
		/*Add a new bomb*/
		this.Field.plantBomb(coords);
	}

	explodeBombs() {
		/*Detonate all bombs*/
		const explosions = this.Field.explodeBombs(); //explosions (coords, radius)

		//checking expls areas (will it touches Hero?)
	}

	start() {

	}

	end() {

	}

	//
}
class Canvas {
	constructor(heroCanvasId, fieldCanvasId, renderData) {
		console.log("Canvas");

		const heroCanvas = document.getElementById(heroCanvasId);
		const heroCtx = heroCanvas.getContext("2d");
		const fieldCanvas = document.getElementById(fieldCanvasId);
		const fieldCtx = fieldCanvas.getContext("2d");

		this.canvases = {
			'hero': {
				'canvas': heroCanvas,
				'ctx': heroCtx
			},
			'field': {
				'canvas': fieldCanvas,
				'ctx': fieldCtx
			}
		};

		this.renderData = renderData;
		/*{
			'hero',
			'field': {
				'bombs'
			}
		}*/

		window.onresize = () => {
			this.resize();
		}

		this.resize();
	}

	resize() {
		const width = window.innerWidth;
		const height = window.innerHeight;

		for (let i in this.canvases) {
			let canvas = this.canvases[i].canvas;
			canvas.width = width;
			canvas.height = height;
		}

		this.render();
	}

	render() {
		this.renderField();
		this.renderHero();
	}

	renderField() {
		const ctx = this.canvases.field.ctx;

		const width = window.innerWidth;
		const height = window.innerHeight;
		ctx.clearRect(0, 0, width, height);

		this.renderBombsAreas();
		this.renderBombs();
	}

	renderBombsAreas() {
		//show bombs' affecting areas
	}

	renderBombArea(renderData) {

	}

	renderBombs() {
		const bombsRenderData = this.renderData.field.bombs;

		for (let i = 0, l = bombsRenderData.length; i < l; i++) {
			const bombRenderData = bombsRenderData[i];
			this.renderBomb(bombRenderData)
		}
	}

	renderBomb(renderData) {
		const ctx = this.canvases.field.ctx;

		ctx.beginPath();
			ctx.arc(
				renderData.coords.x,
				renderData.coords.y,
				renderData.radius,
				0,
				Math.PI*2,
				false
			);

			ctx.fillStyle = renderData.color.fill;
			ctx.fill();

			ctx.lineWidth = renderData.radius / 10;
			ctx.strokeStyle = renderData.color.stroke;
			ctx.stroke();
		ctx.closePath();
	}

	renderHero() {
		const ctx = this.canvases.hero.ctx;

		const width = window.innerWidth;
		const height = window.innerHeight;
		ctx.clearRect(0, 0, width, height);

		const heroRenderData = this.renderData.hero;
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

	set setRenderData(renderData) {
		this.renderData = renderData;
		this.render();
	}

	set heroRenderData(heroRenderData) {
		this.renderData.hero = heroRenderData;
		this.renderHero();
	}

	set fieldRenderData(fieldRenderData) {
		this.renderData.field = fieldRenderData;
		this.renderField();
	}
}
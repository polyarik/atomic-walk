class Canvas {
	constructor(canvasId, renderData) {
		console.log("Canvas");

		this.canvas = document.getElementById(canvasId);
		this.ctx = this.canvas.getContext("2d");

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
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;

		this.render();
	}

	render() {
		const canvas = this.canvas;
		const ctx = this.ctx;
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		this.renderField();
		this.renderHero();
	}

	renderField() {
		this.renderBombs();
	}

	renderBombs() {
		const bombsRenderData = this.renderData.field.bombs;

		for (let i = 0, l = bombsRenderData.length; i < l; i++) {
			const bombRenderData = bombsRenderData[i];
			this.renderBomb(bombRenderData)
		}
	}

	renderBomb(renderData) {
		const ctx = this.ctx;

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
		const ctx = this.ctx;
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
}
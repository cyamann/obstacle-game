export default class Obstacle {
    constructor(game) {
      this.game = game;
      this.width = 20;
      this.height = 50;
      this.x = this.game.canvas.width;
      this.y = this.game.canvas.height - this.height;
      this.speed = -5; // Engelin hareketi
    }
  
    update() {
      this.x += this.speed; // Engeli sola hareket ettir
    }
  
    draw(ctx) {
      ctx.fillStyle = 'red';
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  
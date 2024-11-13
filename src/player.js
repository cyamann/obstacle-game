

export default class Player {
    constructor(game) {
      this.game = game;
      this.width = 50;
      this.height = 50;
      this.x = 50;
      this.y = this.game.canvas.height - this.height;
      this.yVelocity = 0;
      this.isJumping = false;
  
      window.addEventListener('keydown', (e) => {
        if (e.key === ' ' && !this.isJumping) this.jump();
      });
    }
  
    jump() {
      this.yVelocity = -15;
      this.isJumping = true;
    }
  
    update() {
      this.y += this.yVelocity;
      this.yVelocity += 0.8; // Yer çekimi etkisi
  
      // Yere çarptığında durma
      if (this.y > this.game.canvas.height - this.height) {
        this.y = this.game.canvas.height - this.height;
        this.isJumping = false;
      }
    }
  
    draw(ctx) {
        ctx.fillStyle = "red";  // Player's color
        ctx.fillRect(this.x, this.y, this.width, this.height);  // Draw player as a rectangle
      }
      
      
  
      collidesWith(obstacle) {
        return (
          this.x < obstacle.x + obstacle.width &&
          this.x + this.width > obstacle.x &&
          this.y < obstacle.y + obstacle.height &&
          this.y + this.height > obstacle.y
        );
      }
  }
  
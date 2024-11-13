import Player from './player.js'; // Import Player class
import Obstacle from './obstacle.js'; // Import Obstacle class

export default class Game {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);  // Canvas'ı body'ye ekliyoruz
    this.canvas.width = 500;  // Canvas genişliği
    this.canvas.height = 500;  // Canvas yüksekliği
    this.player = null;
    this.obstacles = []; // Engeller dizisi
    this.gameOver = false; // Oyun bitme durumu
  }

  startGame() {
    this.canvas.width = window.innerWidth * 0.5;  // Set width to 50% of the screen width
    this.canvas.height = window.innerHeight * 0.5; // Set height to 50% of the screen height
    this.player = new Player(this); // Create player object
    console.log("Player initialized:", this.player);
    this.lastObstacleTime = 0;
    this.gameLoop(); // Start the game loop
  }
  

  gameLoop() {
    if (this.gameOver) return;

    this.update();  // Oyun durumunu güncelle
    this.draw();    // Oyunu çiz

    requestAnimationFrame(this.gameLoop.bind(this)); // Sonsuz döngü
  }

  update() {
    // Ensure player and obstacles exist before checking for collisions
    if (!this.player) return;  // Skip updates if player is not yet initialized

    this.player.update();
    this.obstacles.forEach(obstacle => obstacle.update());
    this.checkCollisions();  // Collision checks only after player is updated

    // Obstacle creation logic (to add obstacles over time)
    const now = Date.now();
    if (now - this.lastObstacleTime > 2000) { // Create obstacle every 2 seconds
      this.obstacles.push(new Obstacle(this));
      this.lastObstacleTime = now;
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);  // Arka planı temizle
    console.log("Drawing player at position", this.player.x, this.player.y);
    this.player.draw(this.ctx);  // Oyuncuyu çiz
    this.obstacles.forEach(obstacle => obstacle.draw(this.ctx));  // Engelleri çiz
  }

  checkCollisions() {
    if (!this.player) return;  // Avoid collision check before player is created
    this.obstacles.forEach(obstacle => {
      if (this.player.collidesWith(obstacle)) {
        this.gameOver = true;
        alert('Oyun Bitti!'); // Çarpışma sonrası oyun biter
      }
    });
  }
}

/**
 * Represents a moving cloud in the game background
 * @extends MovableObject
 */
class Cloud extends MovableObject {
    y = 10;
    width = 1200;
    height = 280;

    /**
     * Creates a new cloud instance
     * @param {number} x - Base X-coordinate position (random offset will be added)
     */
    constructor(x) {
        super().loadImage('asset/img/5_Levels/SKY-BRIDGE/Backgrounds/clouds.png');
        this.x = x + Math.random() * 500;
        this.animate();
    }

    /**
     * Initiates cloud movement animation
     * Moves cloud to the left when game is ready
     */
    animate() {
        setInterval(() => {
            if (this.isGameReady) {
                this.moveLeft();
            }
        }, 1000 / 60)
    }
}
/**
 * Represents a projectile (arrow) that can be shot in the game
 * @extends MovableObject
 */
class ShootableObject extends MovableObject {
    height = 75;
    width = 75;
    IMG_SRC = 'asset/img/1_Main_character/Archer/Vector Parts/Arrow.png';
    speed = 1;
    arrowSpeed = 25;
    isShootReady = true;

    /**
     * Creates a new arrow projectile
     * @param {number} x - Starting X-coordinate position
     * @param {number} y - Starting Y-coordinate position
     * @param {boolean} otherDirection - Direction of arrow flight (true for left, false for right)
     */
    constructor(x, y, otherDirection) {
        super();
        this.x = x;
        this.y = y;
        this.otherDirection = otherDirection;
        this.loadImage(this.IMG_SRC);
    }

    /**
     * Initiates arrow flight movement
     * Updates position based on direction at 60fps
     */
    onFly() {
        if (this.otherDirection) {
            setInterval(() => {
                this.x -= this.arrowSpeed;
            }, 1000 / 60);
        } else {
            setInterval(() => {
                this.x += this.arrowSpeed;
            }, 1000 / 60);
        }
    }
}
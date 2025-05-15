/**
 * Represents a collectible apple in the game
 * @extends CollectibleObject
 */
class Apple extends CollectibleObject {
    IMG_SRC = 'asset/img/7_Collectibles/Apple.png';
    baseY = 400; 
    amplitude = 3; 
    frequency = 0.1; 
    angle = 0;
    innerFrame = {
        width: this.width,
        height: this.height
    };

    /**
     * Creates a new Apple instance
     * @param {number} x - The x-coordinate position
     * @param {number} y - The y-coordinate position
     */
    constructor(x, y) {
        super().loadImage(this.IMG_SRC);
        this.x = this.outerFrame.x = this.innerFrame.x = x;
        this.y = this.outerFrame.y = this.innerFrame.y = y;
        this.animate()
    }

    /**
     * Starts the floating animation of the apple
     * Uses sine wave motion for a floating effect
     */
    animate() {
        setInterval(() => {
            this.angle += this.frequency; 
            this.y = this.baseY + Math.sin(this.angle) * this.amplitude;
        }, 1000 / 60); 
    }
}
/**
 * Represents a background object in the game
 * @extends MovableObject
 */
class BackgroundObject extends MovableObject {
    width = 1205;

    /**
     * Creates a new BackgroundObject instance
     * @param {string} imgPath - Path to the image file
     * @param {number} y - The y-coordinate position
     * @param {number} x - The x-coordinate position
     * @param {number} height - The height of the background object
     */
    constructor(imgPath, y, x, height) {
        super().loadImage(imgPath)
        this.y = y;
        this.x = x;
        this.height = height;
    }
}
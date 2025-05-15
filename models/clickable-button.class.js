/**
 * Represents a clickable button in the game UI
 * @extends DrawableObjects
 */
class ClickableButton extends DrawableObjects {
    x;
    y = 10;
    width = 75;
    height = 75;
    id;

    /**
     * Creates a new clickable button
     * @param {string} image - Path to the button image
     * @param {number} x - X-coordinate position of the button
     * @param {string} id - Unique identifier for the button
     */
    constructor(image, x, id) {
        super();
        this.loadImage(image);
        this.x = x;
        this.id = id;
    }

    /**
     * Handles button click actions
     * @param {number} action - The action to perform:
     *                         1: Enter fullscreen
     *                         2: Exit fullscreen
     *                         3: Mute volume
     *                         4: Unmute volume
     */
    onClick(action) {
        if (action == 1) {
            fullscreen();
        } else if (action == 2) {
            exitFullscreen();
        } else if (action == 3) {
            volumeMute()
        } else if (action == 4) {
            volumeLoud()
        }
    }
}
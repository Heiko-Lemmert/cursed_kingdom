/**
 * Base class for status bars (health, energy, etc.)
 * @extends DrawableObjects
 */
class Status extends DrawableObjects {
    x;
    y = 10;
    height = 75;
    width = 100;
    percent = 100;

    /**
     * Updates the status bar's percentage and image
     * @param {number} percent - New percentage value (0-100)
     * @param {string[]} images - Array of image paths for different percentage states
     */
    setPercent(percent, images) {
        this.percent = percent;
        let path = images[this.resolveImageIndex(percent)];
        this.img = this.imageCache[path];
    }

    /**
     * Determines which image to use based on the percentage value
     * @param {number} percent - Current percentage value (0-100)
     * @returns {number} Index of the image to use
     */
    resolveImageIndex(percent) {
        switch (percent) {
            case 100:
                return 5;
            case 80:
                return 4;
            case 60:
                return 3;
            case 40:
                return 2;
            case 20:
                return 1;
            case 0:
                return 0;
            default:
                break;
        }
    }
}
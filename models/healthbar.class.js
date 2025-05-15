/**
 * Represents the health bar display in the game UI
 * Shows the character's or enemy's current health level
 * @extends Status
 */
class Healthbar extends Status {
    IMAGES_HEALTH = [
        'asset/img/6_UI/stats/healthbar/heart-gamebar-0.png',
        'asset/img/6_UI/stats/healthbar/heart-gamebar-20.png',
        'asset/img/6_UI/stats/healthbar/heart-gamebar-40.png',
        'asset/img/6_UI/stats/healthbar/heart-gamebar-60.png',
        'asset/img/6_UI/stats/healthbar/heart-gamebar-80.png',
        'asset/img/6_UI/stats/healthbar/heart-gamebar-100.png',
    ]

    /**
     * Creates a new Healthbar instance
     * @param {number} x - X-coordinate position of the health bar
     */
    constructor(x) {
        super().loadImages(this.IMAGES_HEALTH);
        this.setPercent(this.percent, this.IMAGES_HEALTH);
        this.x = x;
    }
}
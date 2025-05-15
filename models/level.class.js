/**
 * Represents a game level containing all level elements
 */
class Level {
    enemies;
    clouds;
    backgrounds;
    coins;
    levelEndX = 9600;
    bgAudio;

    /**
     * Creates a new level with the specified game elements
     * @param {Object[]} enemies - Array of enemy objects
     * @param {Object[]} clouds - Array of cloud objects
     * @param {Object[]} backgrounds - Array of background objects
     * @param {Object[]} coins - Array of coin objects
     * @param {Audio} bgAudio - Background music for the level
     */
    constructor(enemies, clouds, backgrounds, coins, bgAudio) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgrounds = backgrounds;
        this.coins = coins;
        this.bgAudio = bgAudio;
    }
}
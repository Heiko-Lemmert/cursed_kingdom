class Level {
    enemies;
    clouds;
    backgrounds;
    coins;
    levelEndX = 9600;
    bgAudio;

    constructor(enemies, clouds, backgrounds, coins, bgAudio) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgrounds = backgrounds;
        this.coins = coins;
        this.bgAudio = bgAudio;
    }
}
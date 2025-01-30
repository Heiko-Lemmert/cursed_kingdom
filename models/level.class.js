class Level {
    enemies;
    clouds;
    backgrounds;
    coins;
    apples;
    levelEndX = 7200;
    bgAudio;

    constructor(enemies, clouds, backgrounds, coins, apples, bgAudio) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgrounds = backgrounds;
        this.coins = coins;
        this.apples = apples;
        this.bgAudio = bgAudio;
    }
}
class Level {
    enemies;
    clouds;
    backgrounds;
    coins;
    apples;
    levelEndX = 7200;

    constructor(enemies, clouds, backgrounds, coins, apples) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgrounds = backgrounds;
        this.coins = coins;
        this.apples = apples;
    }
}
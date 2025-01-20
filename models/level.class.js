class Level {
    enemies;
    clouds;
    backgrounds;
    coins;
    apples;
    btn;
    levelEndX = 7200;

    constructor(enemies, clouds, backgrounds, coins, apples, btn) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgrounds = backgrounds;
        this.coins = coins;
        this.apples = apples;
        this.btn = btn;
    }
}
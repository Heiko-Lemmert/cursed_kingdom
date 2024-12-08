class Level {
    enemies;
    clouds;
    backgrounds;
    coins;
    arrows;
    levelEndX = 7200;

    constructor(enemies, clouds, backgrounds, coins, arrows) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgrounds = backgrounds;
        this.coins = coins;
        this.arrows = arrows;
    }
}
class Level {
    enemies;
    clouds;
    backgrounds;
    collectibles;
    // coins;
    // arrows;
    levelEndX = 7200;

    constructor(enemies, clouds, backgrounds, collectibles) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgrounds = backgrounds;
        this.collectibles = collectibles;
        // this.coins = coins;
        // this.arrows = arrows;
    }
}
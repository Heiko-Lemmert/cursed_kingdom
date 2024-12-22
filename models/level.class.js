class Level {
    enemies;
    clouds;
    backgrounds;
    collectibles;
    levelEndX = 7200;

    constructor(enemies, clouds, backgrounds, collectibles) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgrounds = backgrounds;
        this.collectibles = collectibles;
    }
}
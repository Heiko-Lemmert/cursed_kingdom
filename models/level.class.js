class Level {
    enemies;
    clouds;
    backgrounds;
    levelEndX = 2400;

    constructor(enemies, clouds, backgrounds) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgrounds = backgrounds;
    }
}
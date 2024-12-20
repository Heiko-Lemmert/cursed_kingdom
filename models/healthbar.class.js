class Heahltbar extends Status {
    IMAGES_HEALTH = [
        'asset/img/6_UI/stats/healthbar/0.png',
        'asset/img/6_UI/stats/healthbar/20.png',
        'asset/img/6_UI/stats/healthbar/40.png',
        'asset/img/6_UI/stats/healthbar/60.png',
        'asset/img/6_UI/stats/healthbar/80.png',
        'asset/img/6_UI/stats/healthbar/100.png',
    ]
    y = 10;
    character;

    constructor(character) {
        super().loadImage(this.IMAGES_HEALTH[3]);
        this.loadImages(this.IMAGES_HEALTH);
        this.character = character;
        this.x = character.x;
    }
}
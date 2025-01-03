class Heahltbar extends Status {
    IMAGES_HEALTH = [
        'asset/img/6_UI/stats/healthbar/heart-gamebar-0.png',
        'asset/img/6_UI/stats/healthbar/heart-gamebar-20.png',
        'asset/img/6_UI/stats/healthbar/heart-gamebar-40.png',
        'asset/img/6_UI/stats/healthbar/heart-gamebar-60.png',
        'asset/img/6_UI/stats/healthbar/heart-gamebar-80.png',
        'asset/img/6_UI/stats/healthbar/heart-gamebar-100.png',
    ]

    constructor() {
        super().loadImages(this.IMAGES_HEALTH);
        this.setPercent(this.percent, this.IMAGES_HEALTH);
        this.x = 25;
    }

    
}
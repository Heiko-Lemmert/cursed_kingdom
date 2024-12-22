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
    percent = 100;

    constructor() {
        super().loadImages(this.IMAGES_HEALTH);
        this.setPercent(this.percent);
    }

    setPercent(percent) {
        this.percent = percent;
        let path = this.IMAGES_HEALTH[this.resolveImageIndex(percent)];
        this.img = this.imageCache[path]
    }

    resolveImageIndex(percent) {
        switch (percent) {
            case 100:
                return 5      
            case 80:
                return 4      
            case 60:
                return 3      
            case 40:
                return 2      
            case 20:
                return 1     
            case 0:
                return 0      
            default:
                break;
        }
    }
}
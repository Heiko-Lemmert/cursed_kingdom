class Energybar extends Status {
    IMAGES_ENERGY = [
        'asset/img/6_UI/stats/energybar/energy-gamebar-0.png',
        'asset/img/6_UI/stats/energybar/energy-gamebar-20.png',
        'asset/img/6_UI/stats/energybar/energy-gamebar-40.png',
        'asset/img/6_UI/stats/energybar/energy-gamebar-60.png',
        'asset/img/6_UI/stats/energybar/energy-gamebar-80.png',
        'asset/img/6_UI/stats/energybar/energy-gamebar-100.png',
    ]
    y = 10;

    constructor() {
        super().loadImages(this.IMAGES_ENERGY);
        this.setPercent(this.percent, this.IMAGES_ENERGY);
        this.x = 125;
        this.width = 75;
    }
}
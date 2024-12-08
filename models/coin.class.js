class Coin extends CollectibleObject {
    IMAGES_COIN = [
        'asset/img/7_Collectibles/Coin_01.png',
        'asset/img/7_Collectibles/Coin_02.png',
        'asset/img/7_Collectibles/Coin_03.png',
        'asset/img/7_Collectibles/Coin_04.png',
        'asset/img/7_Collectibles/Coin_05.png',
        'asset/img/7_Collectibles/Coin_06.png',
    ]

    constructor(x, y) {
        super().loadImage(this.IMAGES_COIN[0]);
        this.x = x;
        this.y = y;
        this.loadImages(this.IMAGES_COIN);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COIN)
        }, 1000 / 7);
    }
}
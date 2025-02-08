class Coin extends CollectibleObject {
    IMAGES_COIN = [
        'asset/img/7_Collectibles/Coin_01.png',
        'asset/img/7_Collectibles/Coin_02.png',
        'asset/img/7_Collectibles/Coin_03.png',
        'asset/img/7_Collectibles/Coin_04.png',
        'asset/img/7_Collectibles/Coin_05.png',
        'asset/img/7_Collectibles/Coin_06.png',
    ];
    
    innerFrame = {
        width: this.width,
        height: this.height
    };

    constructor(x, y) {
        super().loadImage(this.IMAGES_COIN[0]);
        this.x = x + Math.random() * 1000;
        this.y = y + Math.random() * 150;
        this.outerFrame.x = x;
        this.outerFrame.y = y;
        this.innerFrame.x = x;
        this.innerFrame.y = y;
        this.loadImages(this.IMAGES_COIN);
        this.animate();
        this.offset = this.calculateOffset(this.outerFrame, this.innerFrame)
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COIN)
        }, 1000 / 7);
    }
}
class Coinbar extends Status {
    IMAGES_COINS = [
        'asset/img/7_Collectibles/Coin_02.png',
        'asset/img/7_Collectibles/Coin_03.png',
        'asset/img/7_Collectibles/Coin_04.png',
        'asset/img/7_Collectibles/Coin_05.png',
        'asset/img/7_Collectibles/Coin_06.png',
    ];
    coin = 'asset/img/7_Collectibles/Coin_01.png';
    currentCoins = 0;

    constructor() {
        super().loadImage(this.coin);
        this.x = 215;
        this.width = 75
    }

    fillText(ctx) {
        ctx.fillText('x ' + this.currentCoins, 300, 60);
    }
}
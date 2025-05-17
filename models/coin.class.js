/**
 * Represents a collectible coin in the game
 * @extends CollectibleObject
 */
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

    /**
     * Creates a new coin instance with random position offset
     * @param {number} x - Base X-coordinate position
     * @param {number} y - Base Y-coordinate position
     */
    constructor(x, y) {
        super().loadImage(this.IMAGES_COIN[0]);
        this.x = x + Math.random() * 1000;
        this.y = y + Math.random() * 150;
        this.outerFrame.x = this.x;
        this.outerFrame.y = this.y;
        this.innerFrame.x = this.x;
        this.innerFrame.y = this.y;
        this.loadImages(this.IMAGES_COIN);
        this.animate();
        this.offset = this.calculateOffset(this.outerFrame, this.innerFrame)
    }

    /**
     * Initiates coin animation
     * Plays through coin animation frames when game is ready
     */
    animate() {
        setInterval(() => {
            if (this.isGameReady) {
               this.playAnimation(this.IMAGES_COIN) 
            } 
        }, 1000 / 7);
    }
}
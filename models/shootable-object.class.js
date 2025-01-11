class ShootableObject extends MovableObject {
    y = 350;
    height = 75;
    width = 75;
    IMG_SRC = 'asset/img/1_Main_character/Archer/Vector Parts/Arrow.png';
    speed = 1;
    arrowSpeed = 25;

    constructor(x, otherDirection) {
        super();
        this.x = x;
        this.otherDirection = otherDirection;
        this.loadImage(this.IMG_SRC);
        this.onFly();
    }

    onFly() {
        if (this.otherDirection) {
            setInterval(() => {
                this.x -= this.arrowSpeed;
            }, 1000 / 60);
        } else {
            setInterval(() => {
                this.x += this.arrowSpeed;
            }, 1000 / 60);
        }

    }
}
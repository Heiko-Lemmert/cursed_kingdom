class ShootableObject extends MovableObject {
    y = 350;
    height = 75;
    width = 75;
    IMG_SRC = 'asset/img/1_Main_character/Archer/Vector Parts/Arrow.png';
    speed = 1;

    constructor(x) {
        super();
        this.x = x;
        this.loadImage(this.IMG_SRC);
        this.onFly();
    }
    
    onFly() {
        setInterval(() => {
               this.x += 5;
                // console.log('I shoot my Arrow on x =', this.x) 
        }, 1000 / 60);
    }
}
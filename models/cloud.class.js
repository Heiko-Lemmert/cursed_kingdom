class Cloud extends MovableObject {
    y = 10;
    width = 720;

    constructor() {
        super().loadImage('asset/img/5_Levels/SKY-BRIDGE/Backgrounds/clouds.png');
        this.x = 0;
    }
}
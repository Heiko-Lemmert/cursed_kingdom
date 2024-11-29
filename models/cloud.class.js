class Cloud extends MovableObject {
    y = 10;
    width = 1200;
    height = 280;

    constructor() {
        super().loadImage('asset/img/5_Levels/SKY-BRIDGE/Backgrounds/clouds.png');
        this.x = Math.random() * 500;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft()
        }, 1000 / 60)
    }
}
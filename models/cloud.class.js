class Cloud extends MovableObject {
    y = 10;
    width = 1200;
    height = 280;

    constructor(x) {
        super().loadImage('asset/img/5_Levels/SKY-BRIDGE/Backgrounds/clouds.png');
        this.x = x + Math.random() * 500;
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.isGameReady) {
                this.moveLeft();
            }
        }, 1000 / 60)
    }
}
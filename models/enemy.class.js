class Enemy extends MovableObject {
    constructor() {
        super().loadImage('asset/img/2_Enemies/Zombie/PNG/PNG Sequences/Idle Blinking/0_Zombie_Idle Blinking_000.png');
        this.x = 200 + Math.random() * 500;
    }
    
}
class Character extends MovableObject {
    IMAGES_WALKING = [
        'asset/img/1_Main_character/Archer/PNG Sequences/Walking/0_Archer_Walking_000.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Walking/0_Archer_Walking_001.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Walking/0_Archer_Walking_002.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Walking/0_Archer_Walking_003.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Walking/0_Archer_Walking_004.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Walking/0_Archer_Walking_005.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Walking/0_Archer_Walking_006.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Walking/0_Archer_Walking_007.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Walking/0_Archer_Walking_008.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Walking/0_Archer_Walking_009.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Walking/0_Archer_Walking_010.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Walking/0_Archer_Walking_011.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Walking/0_Archer_Walking_012.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Walking/0_Archer_Walking_013.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Walking/0_Archer_Walking_014.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Walking/0_Archer_Walking_015.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Walking/0_Archer_Walking_016.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Walking/0_Archer_Walking_017.png'
    ]
    world;
    speed = 10;

    constructor() {
        super().loadImage('asset/img/1_Main_character/Archer/PNG Sequences/Walking/0_Archer_Walking_000.png');
        this.loadImages(this.IMAGES_WALKING);
        this.animate()
    }

    animate() {
        setInterval(() => {
            if (this.world.keyboard.right) {
                this.moveRight();
                this.otherDirection = false;
            }
            if (this.world.keyboard.left) {
                this.moveLeft();
                this.otherDirection = true;
            }
        }, 1000 / 60)

        setInterval(() => {
            if (this.world.keyboard.right || this.world.keyboard.left) {
                let i = this.currentImages % this.IMAGES_WALKING.length;
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImages++
            }
        }, 10)
    }

    jump() {

    }
}
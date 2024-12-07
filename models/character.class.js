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
    audioWalking = new Audio('asset/audio/walking3.mp3');

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.animate()
    }

    animate() {
        setInterval(() => {
            this.audioWalking.pause();
            if (this.world.keyboard.right && this.x < this.world.level.levelEndX) {
                this.audioWalking.play();
                this.moveRight();
                this.otherDirection = false;
            }
            if (this.world.keyboard.left && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
                this.audioWalking.play();
            }
            this.world.camera_x = -this.x + 50;
            this.world.addObjectsToMap;
        }, 1000 / 60)

        setInterval(() => {
            if (this.world.keyboard.right || this.world.keyboard.left) {
                this.playAnimation(this.IMAGES_WALKING)
            }
        }, 10)
    }

    jump() {

    }
}
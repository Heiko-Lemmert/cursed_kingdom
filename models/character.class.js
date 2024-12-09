class Character extends MovableObject {
    IMAGES_IDLE = [
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_000.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_001.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_002.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_003.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_004.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_005.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_006.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_007.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_008.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_009.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_010.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_011.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_012.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_013.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_014.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_015.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_016.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_017.png'

    ];
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
    ];
    IMAGES_JUMPING = [
        'asset/img/1_Main_character/Archer/PNG Sequences/Jump Start/0_Archer_Jump Start_000.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Jump Start/0_Archer_Jump Start_001.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Jump Start/0_Archer_Jump Start_002.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Jump Start/0_Archer_Jump Start_003.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Jump Start/0_Archer_Jump Start_004.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Jump Start/0_Archer_Jump Start_005.png',
    ];
    IMAGES_FALLING = [
        'asset/img/1_Main_character/Archer/PNG Sequences/Falling Down/0_Archer_Falling Down_000.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Falling Down/0_Archer_Falling Down_001.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Falling Down/0_Archer_Falling Down_002.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Falling Down/0_Archer_Falling Down_003.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Falling Down/0_Archer_Falling Down_004.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Falling Down/0_Archer_Falling Down_005.png',
    ];
    world;
    speed = 10;
    audioWalking = new Audio('asset/audio/walking3.mp3');

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_FALLING);

        this.animate();
        this.applyGravity();
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
            if (this.world.keyboard.space && this.y >= 250) {
                this.speedY = 20;
            }
            this.world.camera_x = -this.x + 50;
            this.world.addObjectsToMap;
        }, 1000 / 60)

        setInterval(() => {
            if (this.isAboveGround() && this.speedY >= 0) {
                this.playAnimation(this.IMAGES_JUMPING)
            } 
            else if (this.isAboveGround() && this.speedY < 0) {
                this.playAnimation(this.IMAGES_FALLING)
            } 
            else if (this.y >= 250 && !this.world.keyboard.right && !this.world.keyboard.left) {
                this.playAnimation(this.IMAGES_IDLE)
            }
            else if (this.world.keyboard.right || this.world.keyboard.left) {
                this.playAnimation(this.IMAGES_WALKING)
            }
        }, 50)
    }
}
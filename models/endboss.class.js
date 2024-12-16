class Endboss extends MovableObject {
    IMAGES_WALKING = [
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Walking/0_Death_Knight_Walking_000.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Walking/0_Death_Knight_Walking_001.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Walking/0_Death_Knight_Walking_002.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Walking/0_Death_Knight_Walking_003.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Walking/0_Death_Knight_Walking_004.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Walking/0_Death_Knight_Walking_005.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Walking/0_Death_Knight_Walking_006.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Walking/0_Death_Knight_Walking_007.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Walking/0_Death_Knight_Walking_008.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Walking/0_Death_Knight_Walking_009.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Walking/0_Death_Knight_Walking_010.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Walking/0_Death_Knight_Walking_011.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Walking/0_Death_Knight_Walking_012.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Walking/0_Death_Knight_Walking_013.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Walking/0_Death_Knight_Walking_014.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Walking/0_Death_Knight_Walking_015.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Walking/0_Death_Knight_Walking_016.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Walking/0_Death_Knight_Walking_017.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Walking/0_Death_Knight_Walking_017.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Walking/0_Death_Knight_Walking_018.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Walking/0_Death_Knight_Walking_019.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Walking/0_Death_Knight_Walking_020.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Walking/0_Death_Knight_Walking_021.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Walking/0_Death_Knight_Walking_022.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Walking/0_Death_Knight_Walking_023.png'
    ]
    otherDirection = true;
    offsetFrame = {
        y : 130,
        width : 200,
        height : 325
    };

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.x = 7000; // Ursprung 7000
        this.y = 40;
        this.height = 500;
        this.width = 500;
        this.loadImages(this.IMAGES_WALKING);
        this.outerFrame.x = this.x;
        this.outerFrame.y = this.y;
        this.outerFrame.width = this.width;
        this.outerFrame.height = this.height;
        this.offsetFrame.x = this.x + 150;
        this.offset = this.calculateOffset(this.outerFrame, this.offsetFrame);
        // setTimeout(() => {
        //     this.animate()
        // }, 4000);
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60)

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING)
        }, 100)
    }
}
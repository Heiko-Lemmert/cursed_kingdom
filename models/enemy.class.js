class Enemy extends MovableObject {
    IMAGES_WALKING = [
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Walking/0_Skeleton_Walking_000.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Walking/0_Skeleton_Walking_001.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Walking/0_Skeleton_Walking_002.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Walking/0_Skeleton_Walking_003.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Walking/0_Skeleton_Walking_004.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Walking/0_Skeleton_Walking_005.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Walking/0_Skeleton_Walking_006.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Walking/0_Skeleton_Walking_007.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Walking/0_Skeleton_Walking_008.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Walking/0_Skeleton_Walking_009.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Walking/0_Skeleton_Walking_010.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Walking/0_Skeleton_Walking_011.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Walking/0_Skeleton_Walking_012.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Walking/0_Skeleton_Walking_013.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Walking/0_Skeleton_Walking_014.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Walking/0_Skeleton_Walking_015.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Walking/0_Skeleton_Walking_016.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Walking/0_Skeleton_Walking_017.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Walking/0_Skeleton_Walking_017.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Walking/0_Skeleton_Walking_018.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Walking/0_Skeleton_Walking_019.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Walking/0_Skeleton_Walking_020.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Walking/0_Skeleton_Walking_021.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Walking/0_Skeleton_Walking_022.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Walking/0_Skeleton_Walking_023.png'
    ];
    IMAGES_DYING = [
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Dying/0_Skeleton_Dying_000.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Dying/0_Skeleton_Dying_001.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Dying/0_Skeleton_Dying_002.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Dying/0_Skeleton_Dying_003.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Dying/0_Skeleton_Dying_004.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Dying/0_Skeleton_Dying_005.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Dying/0_Skeleton_Dying_006.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Dying/0_Skeleton_Dying_007.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Dying/0_Skeleton_Dying_008.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Dying/0_Skeleton_Dying_009.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Dying/0_Skeleton_Dying_010.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Dying/0_Skeleton_Dying_011.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Dying/0_Skeleton_Dying_012.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Dying/0_Skeleton_Dying_013.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Dying/0_Skeleton_Dying_014.png'
    ];

    otherDirection = true;
    frameColor = 'red';
    innerFrame = {
        y : 300,
        width : 120,
        height : 150
    };
    

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.x = 600 + Math.random() * 500;
        this.speed = 0.25 + Math.random() * 0.25
        this.innerFrame.x = this.x + 60;
        this.outerFrame.x = this.x;
        this.offset = this.calculateOffset(this.outerFrame, this.innerFrame)
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DYING)
        // this.animate();
    }

    animate() {
        let move = setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DYING);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }     
        }, 100)
    }
    
}
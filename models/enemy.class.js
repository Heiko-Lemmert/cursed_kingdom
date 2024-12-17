class Enemy extends MovableObject {
    IMAGES_WALKING= [
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
    ]
    otherDirection = true;
    innerFrame = {
        y : 300,
        width : 120,
        height : 150
    };
    

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        // this.x = 600 + Math.random() * 500;
        this.x = 600;
        this.speed = 0.25 + Math.random() * 0.25
        this.innerFrame.x = this.x + 60;
        this.outerFrame.x = this.x;
        this.offset = this.calculateOffset(this.outerFrame, this.innerFrame)
        this.loadImages(this.IMAGES_WALKING);
        // this.animate();
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
class Lich extends MovableObject {
    IMAGES_WALKING = [
        '/asset/img/2_Enemies/Lich/PNG/PNG Sequences/Walking/0_Lich_Walking_000.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Walking/0_Lich_Walking_001.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Walking/0_Lich_Walking_002.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Walking/0_Lich_Walking_003.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Walking/0_Lich_Walking_004.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Walking/0_Lich_Walking_005.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Walking/0_Lich_Walking_006.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Walking/0_Lich_Walking_007.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Walking/0_Lich_Walking_008.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Walking/0_Lich_Walking_009.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Walking/0_Lich_Walking_010.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Walking/0_Lich_Walking_011.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Walking/0_Lich_Walking_012.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Walking/0_Lich_Walking_013.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Walking/0_Lich_Walking_014.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Walking/0_Lich_Walking_015.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Walking/0_Lich_Walking_016.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Walking/0_Lich_Walking_017.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Walking/0_Lich_Walking_017.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Walking/0_Lich_Walking_018.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Walking/0_Lich_Walking_019.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Walking/0_Lich_Walking_020.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Walking/0_Lich_Walking_021.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Walking/0_Lich_Walking_022.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Walking/0_Lich_Walking_023.png'
    ];
    IMAGES_DYING = [
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Dying/0_Lich_Dying_000.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Dying/0_Lich_Dying_001.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Dying/0_Lich_Dying_002.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Dying/0_Lich_Dying_003.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Dying/0_Lich_Dying_004.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Dying/0_Lich_Dying_005.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Dying/0_Lich_Dying_006.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Dying/0_Lich_Dying_007.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Dying/0_Lich_Dying_008.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Dying/0_Lich_Dying_009.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Dying/0_Lich_Dying_010.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Dying/0_Lich_Dying_011.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Dying/0_Lich_Dying_012.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Dying/0_Lich_Dying_013.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Dying/0_Lich_Dying_014.png'
    ];
    IMAGES_SLASHING = [
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Run Slashing/0_Lich_Run Slashing_000.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Run Slashing/0_Lich_Run Slashing_001.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Run Slashing/0_Lich_Run Slashing_002.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Run Slashing/0_Lich_Run Slashing_003.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Run Slashing/0_Lich_Run Slashing_004.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Run Slashing/0_Lich_Run Slashing_005.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Run Slashing/0_Lich_Run Slashing_006.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Run Slashing/0_Lich_Run Slashing_007.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Run Slashing/0_Lich_Run Slashing_008.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Run Slashing/0_Lich_Run Slashing_009.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Run Slashing/0_Lich_Run Slashing_010.png',
        'asset/img/2_Enemies/Lich/PNG/PNG Sequences/Run Slashing/0_Lich_Run Slashing_011.png'
    ];



    otherDirection = true;
    frameColor = 'red';
    innerFrame = {
        y : 300,
        width : 120,
        height : 150
    };
    

    constructor(x) {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.x = x + Math.random() * 500;
        this.y = this.y + Math.random() * 150;
        this.speed = 0.25 + Math.random() * 0.25
        this.innerFrame.x = this.x + 60;
        this.outerFrame.x = this.x;
        this.offset = this.calculateOffset(this.outerFrame, this.innerFrame)
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DYING);
        this.loadImages(this.IMAGES_SLASHING);
        this.animate();
    }

    animate() {
        this.setEnemyMove();
        this.playEnemyAnimation(this)
    }
}
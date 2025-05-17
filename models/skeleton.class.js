/**
 * Represents a skeleton enemy in the game
 * @extends MovableObject
 */
class Skeleton extends MovableObject {
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
    IMAGES_SLASHING = [
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Run Slashing/0_Skeleton_Run Slashing_000.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Run Slashing/0_Skeleton_Run Slashing_001.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Run Slashing/0_Skeleton_Run Slashing_002.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Run Slashing/0_Skeleton_Run Slashing_003.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Run Slashing/0_Skeleton_Run Slashing_004.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Run Slashing/0_Skeleton_Run Slashing_005.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Run Slashing/0_Skeleton_Run Slashing_006.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Run Slashing/0_Skeleton_Run Slashing_007.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Run Slashing/0_Skeleton_Run Slashing_008.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Run Slashing/0_Skeleton_Run Slashing_009.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Run Slashing/0_Skeleton_Run Slashing_010.png',
        'asset/img/2_Enemies/Skeleton/PNG/PNG Sequences/Run Slashing/0_Skeleton_Run Slashing_011.png'
    ];

    otherDirection = true;
    frameColor = 'red';
    innerFrame = {
        width : 115,
        height : 130
    };

    /**
     * Creates a new Skeleton instance
     * @param {number} x - Base X-coordinate position (random offset will be added)
     * @param {Object} music - The music controller for skeleton sounds
     */
    constructor(x, music) {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.x = x + Math.random() * 500;
        this.y = this.y + Math.random() * 150;
        this.speed = 0.25 + Math.random() * 0.25
        this.innerFrame.x = this.x + 60;
        this.innerFrame.y = this.y + 60;
        this.outerFrame.x = this.x;
        this.outerFrame.y = this.y;
        this.offset = this.calculateOffset(this.outerFrame, this.innerFrame)
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DYING);
        this.loadImages(this.IMAGES_SLASHING);
        this.animate();
        this.audioHit = music.findAudioSrc('skeletonHit');
        this.audioGrowl = music.findAudioSrc('enemyGrowl');
    }

    /**
     * Initiates skeleton movement and animation
     * Controls enemy behavior patterns
     */
    animate() {
        this.setEnemyMove();
        this.playEnemyAnimation(this)
    }
}
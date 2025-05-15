/**
 * Represents the final boss enemy in the game
 * @extends MovableObject
 */
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
    ];
    IMAGES_DYING = [
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Dying/0_Death_Knight_Dying_000.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Dying/0_Death_Knight_Dying_001.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Dying/0_Death_Knight_Dying_002.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Dying/0_Death_Knight_Dying_003.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Dying/0_Death_Knight_Dying_004.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Dying/0_Death_Knight_Dying_005.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Dying/0_Death_Knight_Dying_006.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Dying/0_Death_Knight_Dying_007.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Dying/0_Death_Knight_Dying_008.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Dying/0_Death_Knight_Dying_009.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Dying/0_Death_Knight_Dying_010.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Dying/0_Death_Knight_Dying_011.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Dying/0_Death_Knight_Dying_012.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Dying/0_Death_Knight_Dying_013.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Dying/0_Death_Knight_Dying_014.png'
    ];
    IMAGES_SLASHING = [
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Run Slashing/0_Death_Knight_Run Slashing_000.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Run Slashing/0_Death_Knight_Run Slashing_001.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Run Slashing/0_Death_Knight_Run Slashing_002.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Run Slashing/0_Death_Knight_Run Slashing_003.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Run Slashing/0_Death_Knight_Run Slashing_004.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Run Slashing/0_Death_Knight_Run Slashing_005.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Run Slashing/0_Death_Knight_Run Slashing_006.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Run Slashing/0_Death_Knight_Run Slashing_007.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Run Slashing/0_Death_Knight_Run Slashing_008.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Run Slashing/0_Death_Knight_Run Slashing_009.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Run Slashing/0_Death_Knight_Run Slashing_010.png',
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Run Slashing/0_Death_Knight_Run Slashing_011.png'
    ];
    IMAGES_HURT = [
        'asset/img/2_Enemies/Death_Knight/PNG/PNG Sequences/Hurt/0_Death_Knight_Hurt_000.png',
        'asset/img/2_Enemies//Death_Knight/PNG/PNG Sequences/Hurt/0_Death_Knight_Hurt_001.png',
        'asset/img/2_Enemies//Death_Knight/PNG/PNG Sequences/Hurt/0_Death_Knight_Hurt_002.png',
        'asset/img/2_Enemies//Death_Knight/PNG/PNG Sequences/Hurt/0_Death_Knight_Hurt_003.png',
        'asset/img/2_Enemies//Death_Knight/PNG/PNG Sequences/Hurt/0_Death_Knight_Hurt_004.png',
        'asset/img/2_Enemies//Death_Knight/PNG/PNG Sequences/Hurt/0_Death_Knight_Hurt_005.png',
        'asset/img/2_Enemies//Death_Knight/PNG/PNG Sequences/Hurt/0_Death_Knight_Hurt_006.png',
        'asset/img/2_Enemies//Death_Knight/PNG/PNG Sequences/Hurt/0_Death_Knight_Hurt_007.png',
        'asset/img/2_Enemies//Death_Knight/PNG/PNG Sequences/Hurt/0_Death_Knight_Hurt_008.png',
        'asset/img/2_Enemies//Death_Knight/PNG/PNG Sequences/Hurt/0_Death_Knight_Hurt_009.png',
        'asset/img/2_Enemies//Death_Knight/PNG/PNG Sequences/Hurt/0_Death_Knight_Hurt_010.png',
        'asset/img/2_Enemies//Death_Knight/PNG/PNG Sequences/Hurt/0_Death_Knight_Hurt_011.png'
    ]
    otherDirection = true;
    innerFrame = {
        y : 130,
        width : 200,
        height : 325
    };
    startEndFight = false;
    audioWisper;

    /**
     * Creates a new Endboss instance
     * @param {Object} music - The music controller for boss sounds
     */
    constructor(music) {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.x = 9000;
        this.y = 40;
        this.height = 500;
        this.width = 500;
        this.speed = 0.50;
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DYING);
        this.loadImages(this.IMAGES_SLASHING);
        this.loadImages(this.IMAGES_HURT);
        this.outerFrame.x = this.x;
        this.outerFrame.y = this.y;
        this.outerFrame.width = this.width;
        this.outerFrame.height = this.height;
        this.innerFrame.x = this.x + 150;
        this.offset = this.calculateOffset(this.outerFrame, this.innerFrame);
        this.waitForEndFight();
        this.audioHit = music.findAudioSrc('endbossHit');
        this.audioGrowl = music.findAudioSrc('endbossGrowl');
        this.audioWisper = music.findAudioSrc('endbossWisper');
    }

    /**
     * Waits for the end fight trigger and starts boss animation
     * Checks every 100ms if the fight should start
     */
    waitForEndFight() {
        let start = setInterval(() => {
            if (this.startEndFight) {
                this.animate();
                clearInterval(start);
            }
        }, 100)
    }

    /**
     * Initiates boss movement and animation
     * Called when the end fight begins
     */
    animate() { 
        this.setEnemyMove();
        this.playEnemyAnimation(this)
    }
}
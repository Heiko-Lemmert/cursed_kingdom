/**
 * Represents the main character (archer) in the game
 * @extends MovableObject
 */
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
    IMAGES_HURT = [
        'asset/img/1_Main_character/Archer/PNG Sequences/Hurt/0_Archer_Hurt_000.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Hurt/0_Archer_Hurt_001.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Hurt/0_Archer_Hurt_002.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Hurt/0_Archer_Hurt_003.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Hurt/0_Archer_Hurt_004.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Hurt/0_Archer_Hurt_005.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Hurt/0_Archer_Hurt_005.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Hurt/0_Archer_Hurt_006.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Hurt/0_Archer_Hurt_007.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Hurt/0_Archer_Hurt_008.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Hurt/0_Archer_Hurt_009.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Hurt/0_Archer_Hurt_010.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Hurt/0_Archer_Hurt_011.png'
    ];
    IMAGES_DYING = [
        'asset/img/1_Main_character/Archer/PNG Sequences/Dying/0_Archer_Dying_000.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Dying/0_Archer_Dying_001.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Dying/0_Archer_Dying_002.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Dying/0_Archer_Dying_003.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Dying/0_Archer_Dying_004.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Dying/0_Archer_Dying_005.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Dying/0_Archer_Dying_005.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Dying/0_Archer_Dying_006.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Dying/0_Archer_Dying_007.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Dying/0_Archer_Dying_008.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Dying/0_Archer_Dying_009.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Dying/0_Archer_Dying_010.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Dying/0_Archer_Dying_011.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Dying/0_Archer_Dying_012.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Dying/0_Archer_Dying_013.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Dying/0_Archer_Dying_014.png'
    ];
    IMAGES_SHOOTING = [
        'asset/img/1_Main_character/Archer/PNG Sequences/Shooting/0_Archer_Shooting_000.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Shooting/0_Archer_Shooting_001.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Shooting/0_Archer_Shooting_002.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Shooting/0_Archer_Shooting_003.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Shooting/0_Archer_Shooting_004.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Shooting/0_Archer_Shooting_005.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Shooting/0_Archer_Shooting_005.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Shooting/0_Archer_Shooting_006.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Shooting/0_Archer_Shooting_007.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Shooting/0_Archer_Shooting_008.png'
    ];
    IMAGES_RUN_SHOOTING = [
        'asset/img/1_Main_character/Archer/PNG Sequences/Run Shooting/0_Archer_Run Shooting_000.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Run Shooting/0_Archer_Run Shooting_001.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Run Shooting/0_Archer_Run Shooting_002.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Run Shooting/0_Archer_Run Shooting_003.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Run Shooting/0_Archer_Run Shooting_004.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Run Shooting/0_Archer_Run Shooting_005.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Run Shooting/0_Archer_Run Shooting_005.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Run Shooting/0_Archer_Run Shooting_006.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Run Shooting/0_Archer_Run Shooting_007.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Run Shooting/0_Archer_Run Shooting_008.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Run Shooting/0_Archer_Run Shooting_009.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Run Shooting/0_Archer_Run Shooting_010.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Run Shooting/0_Archer_Run Shooting_011.png',
    ];

    world;
    speed = 10;
    audioJumping;
    audioArrow;
    frameColor = 'blue';
    lastShoot = 0;
    isShooting = false;
    shootAnimationFinished = false;
    innerFrame = {
        x: 160,
        y: 350,
        width: 120,
        height: 150,
    };

    /**
     * Creates a new Character instance
     * @param {Object} music - The music controller for character sounds
     */
    constructor(music) {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_FALLING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DYING);
        this.loadImages(this.IMAGES_SHOOTING);
        this.loadImages(this.IMAGES_RUN_SHOOTING);
        this.animate();
        this.animateImages();
        this.applyGravity();
        this.y = 300;
        this.outerFrame.x = this.x;
        this.outerFrame.y = this.y;
        this.currentY = this.y;
        this.offset = this.calculateOffset(this.outerFrame, this.innerFrame);
        this.audioWalking = music.findAudioSrc('characterWalking');
        this.audioJumping = music.findAudioSrc('characterJumping');
        this.audioArrow = music.findAudioSrc('characterShooting');
        this.audioHit = music.findAudioSrc('characterHit');
    }

    /**
     * Controls character movement and keyboard input handling
     * Updates camera position and plays appropriate sound effects
     */
    animate() {
        setInterval(() => {
            if (this.isGameReady) {
                this.audioWalking.pause();
                if (this.world.keyboard.right && this.mapEndPoint()) {
                    if (!this.isAboveGround()) this.audioWalking.play();
                    this.moveRight();
                }
                if (this.world.keyboard.left && this.mapStartPoint()) {
                    if (!this.isAboveGround()) this.audioWalking.play();
                    this.moveLeft();
                }
                if (this.world.keyboard.up && this.bridgeTopPoint() && !this.isJumping) {
                    if (!this.isAboveGround()) this.audioWalking.play();
                    this.moveUp();
                }
                if (this.world.keyboard.down && this.bridgeBottomPoint() && !this.isJumping) {
                    if (!this.isAboveGround()) this.audioWalking.play();
                    this.moveDown();
                }
                if (this.world.keyboard.space && !this.isAboveGround() && !this.isJumping) {
                    this.audioJumping.play()
                    this.currentPosition();
                    this.jump();
                }
                this.world.camera_x = -this.x + 400;
                this.world.addObjectsToMap;
            }
        }, 1000 / 60)

        setInterval(() => {
            if (this.isAboveGround() && this.speedY >= 0 && !this.world.keyboard.right && !this.world.keyboard.left) {
                this.playAnimation(this.IMAGES_JUMPING);
            }
        }, 250)
    }

    /**
     * Handles character animation states based on current conditions
     * Includes animations for dying, hurt, falling, idle, and walking states
     */
    animateImages() {
        this.animationInterval = setInterval(() => {
            if (this.isDead() && !this.animationFinished) {
                this.playOnceAnimation(this.IMAGES_DYING);
            } else if (this.isHurt() && !this.isDead()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.isAboveGround() && this.speedY < 0 || this.isAboveGround() && this.world.keyboard.right || this.isAboveGround() && this.world.keyboard.left) {
                this.playAnimation(this.IMAGES_FALLING);
            } else if (!this.isAboveGround() && !this.world.keyboard.right && !this.world.keyboard.left && !this.world.keyboard.down && !this.world.keyboard.up && !this.isDead() && !this.isHurt() && !this.isShooting) {
                this.playAnimation(this.IMAGES_IDLE);
            } else if (!this.isAboveGround() && this.world.keyboard.right || !this.isAboveGround() && this.world.keyboard.left || this.isShooting || !this.isAboveGround() && this.world.keyboard.down || !this.isAboveGround() && this.world.keyboard.up) {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 1000 / 30)
    }

    /**
     * Creates and shoots an arrow
     * @param {number} x - The x-coordinate starting position of the arrow
     * @param {number} y - The y-coordinate starting position of the arrow
     * @param {boolean} left - Direction of the arrow (true for left, false for right)
     */
    shoot(x, y, left) {
        this.lastShoot = new Date().getTime();
        let arrow = new ShootableObject(x, y, left);
        this.world.arrows.push(arrow);
        this.audioArrow.currentTime = 0;
        this.audioArrow.play();
    }

    /**
     * Checks if enough time has passed since the last shot
     * @returns {boolean} True if more than 1 second has passed since last shot
     */
    lastShootAgo() {
        let timepassed = new Date().getTime() - this.lastShoot;
        timepassed = timepassed / 1000
        return timepassed > 1;
    }

    /**
     * Checks if enough time has passed since the last hit
     * @returns {boolean} True if more than 1 second has passed since last hit
     */
    lastHitAgo() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000
        return timepassed > 1;
    }

    /**
     * Starts the shooting animation by cycling through the provided images
     * @param {string[]} images - Array of image paths for the shooting animation
     */
    startShootAnimation(images) {
        this.currentOnceImages = 0;
        this.animationInterval = setInterval(() => {
            const i = this.currentOnceImages;

            if (i >= images.length) {
                clearInterval(this.animationInterval);
                this.animateImages();
                this.isShooting = false;
            } else {
                const path = images[i];
                this.img = this.imageCache[path];
                this.currentOnceImages++;
            }
        }, 1000 / 30);
    }

    /**
     * Determines if the character has passed the specified enemy on the x-axis.
     *
     * @param {Object} enemy - The enemy object to compare positions with.
     * @param {number} enemy.x - The x-coordinate of the enemy.
     * @returns {boolean} True if the character's x position is greater than the enemy's x position; otherwise, false.
     */
    pastEnemy(enemy) {
        return this.x > enemy.x;
    }
}
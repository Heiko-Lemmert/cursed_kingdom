/**
 * Base class for all objects that can move in the game
 * Handles movement, gravity, collision, health and energy mechanics
 * @extends DrawableObjects
 */
class MovableObject extends DrawableObjects {
    x = 100;
    y = 200;
    height = 250;
    width = 250;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    onCollisionCourse = true;
    health = 100;
    lastHit = 0;
    energy = 100;
    outerFrame = {
        x: 0,
        y: 0,
        width: this.width,
        height: this.height
    };
    innerFrame = {
        y: 0,
        x: 0,
        width: 0,
        height: 0,
        flippedX: 0
    };
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };
    currentY;
    chaisJumping = false;
    isSlashing = false;
    audioHit;
    audioGrowl;
    animationInterval;

    /**
     * Applies gravity effect to the object when jumping
     * Updates vertical position and speed based on acceleration
     */
    applyGravity() {
        setInterval(() => {
            if (this.isJumping) {
                this.y -= this.speedY;
                this.innerFrame.y -= this.speedY;
                this.speedY -= this.acceleration;
                if (Math.abs(this.y - this.currentY) < 10) {
                    this.y = this.currentY;
                    this.speedY = 0;
                    this.isJumping = false;
                }
            }
        }, 1000 / 25);
    }

    /**
     * Moves the object to the right
     * Updates x position and direction flag
     */
    moveRight() {
        this.x += this.speed;
        this.innerFrame.x += this.speed;
        this.otherDirection = false;
    }

    /**
     * Moves the object to the left
     * Updates x position and direction flag
     */
    moveLeft() {
        this.x -= this.speed;
        this.innerFrame.x -= this.speed;
        this.otherDirection = true;
    }

    /**
     * Moves the object upward
     * Updates y position
     */
    moveUp() {
        this.y -= this.speed;
        this.innerFrame.y -= this.speed;
    }

    /**
     * Moves the object downward
     * Updates y position
     */
    moveDown() {
        this.y += this.speed;
        this.innerFrame.y += this.speed;
    }

    /**
     * Stores the current Y position
     * Used as reference point for jumping
     */
    currentPosition() {
        if (!this.isJumping) {
            this.currentY = this.y;
        }
    }

    /**
     * Initiates a jump if not already jumping
     * Sets initial jump speed
     */
    jump() {
        if (!this.isJumping) {
            this.isJumping = true;
            this.speedY = 20;
        }
    }

    /**
     * Checks if object is in the air
     * @returns {boolean} True if object is above ground level
     */
    isAboveGround() {
        return this.y < 145;
    }

    /**
     * Checks if object hasn't reached the map end
     * @returns {boolean} True if object is within map bounds
     */
    mapEndPoint() {
        return this.x < this.world.level.levelEndX;
    }

    /**
     * Checks if object hasn't reached the map start
     * @returns {boolean} True if object is beyond start point
     */
    mapStartPoint() {
        return this.x > 0;
    }

    /**
     * Checks if object is at bridge's top section
     * @returns {boolean} True if object is above bridge threshold
     */
    bridgeTopPoint() {
        return this.y > 180;
    }

    /**
     * Checks if object is at bridge's bottom section
     * @returns {boolean} True if object is below bridge threshold
     */
    bridgeBottomPoint() {
        return this.y < 400;
    }

    /**
     * Applies damage to the object
     * @param {number} damage - Amount of health to reduce
     */
    hit(damage) {
        this.health -= damage;
        this.lastHit = new Date().getTime();
        if (this.health <= 0) {
            this.health = 0;
        }
    }

    /**
     * Checks if object has no health remaining
     * @returns {boolean} True if health is zero
     */
    isDead() {
        return this.health === 0;
    }

    /**
     * Checks if object was recently hit
     * @returns {boolean} True if hit within last second
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    /**
     * Checks if object has energy remaining
     * @returns {boolean} True if energy is greater than zero
     */
    hasEnergy() {
        return this.energy > 0;
    }

    /**
     * Reduces object's energy by 20 points
     */
    lostEnergy() {
        this.energy -= 20;
    }

    /**
     * Restores object's energy to maximum
     * Does nothing if energy is already full
     */
    increasesEnergy() {
        if (this.energy === 100) {
            return;
        } else {
            this.energy = 100;
        }
    }

    /**
     * Checks if another object is within specified distance
     * @param {MovableObject} mo - The object to check distance to
     * @param {number} number - The maximum distance to consider as "close"
     * @returns {boolean} True if objects are within specified distance
     */
    closeBy(mo, number) {
        return Math.abs(this.x - mo.x) <= number;
    }

    /**
     * Starts an interval that continuously updates the enemy's animation based on its current state.
     * The animation is chosen according to the following priority:
     * - If the enemy is dead and the death animation hasn't finished, plays the dying animation once.
     * - If the enemy is hurt (but not dead), plays the hurt animation.
     * - If the enemy is being slashed (but not dead), plays the slashing animation.
     * - If the enemy is aggressive (but not dead), plays the running animation.
     * - Otherwise, plays the walking animation.
     * 
     * @param {Object} enemy - The enemy object whose animation should be updated.
     * @param {boolean} enemy.isGameReady - Indicates if the game is ready for animation updates.
     * @param {Function} enemy.isDead - Returns true if the enemy is dead.
     * @param {boolean} enemy.animationFinished - Indicates if the death animation has finished.
     * @param {Function} enemy.playOnceAnimation - Plays an animation sequence once.
     * @param {Array<string>} enemy.IMAGES_DYING - Array of image paths for the dying animation.
     * @param {Function} enemy.isHurt - Returns true if the enemy is hurt.
     * @param {Function} enemy.playAnimation - Plays a looping animation sequence.
     * @param {Array<string>} enemy.IMAGES_HURT - Array of image paths for the hurt animation.
     * @param {Array<string>} enemy.IMAGES_SLASHING - Array of image paths for the slashing animation.
     * @param {boolean} enemy.isAggro - Indicates if the enemy is in an aggressive state.
     * @param {Array<string>} enemy.IMAGES_RUNNING - Array of image paths for the running animation.
     * @param {Array<string>} enemy.IMAGES_WALKING - Array of image paths for the walking animation.
     */
    playEnemyAnimation(enemy) {
        setInterval(() => {
            if (enemy.isGameReady) {
                if (enemy.isDead() && !enemy.animationFinished) {
                    enemy.playOnceAnimation(enemy.IMAGES_DYING);
                } else if (!enemy.isDead() && enemy.isHurt()) {
                    enemy.playAnimation(enemy.IMAGES_HURT);
                } else if (!enemy.isDead() && this.isSlashing) {
                    enemy.playAnimation(enemy.IMAGES_SLASHING);
                } else if (!enemy.isDead() && enemy.isAggro) {
                    enemy.playAnimation(enemy.IMAGES_RUNNING);
                } else if (!enemy.isDead()) {
                    enemy.playAnimation(enemy.IMAGES_WALKING);
                }
            }
        }, 100);
    }

    /**
     * Starts the enemy movement loop, updating the enemy's position based on its state.
     * - Moves the enemy left or right depending on the `otherDirection` flag.
     * - Pauses movement if the enemy is hurt, and resumes after a delay.
     * - Stops movement if the enemy is dead.
     * The movement loop runs at approximately 60 frames per second.
     *
     * @returns {void}
     */
    setEnemyMove() {
        let move = setInterval(() => {
            if (this.isDead()) {
                clearInterval(move);
            } else if (this.isHurt() && !this.isDead()) {
                clearInterval(move);
                setTimeout(() => this.setEnemyMove(), 1000);
            } else if (!this.isDead() && this.isGameReady && !this.otherDirection) {
                // this.moveRight();
            } else if (!this.isDead() && this.isGameReady && this.otherDirection) {
                // this.moveLeft(); 
            }
        }, 1000 / 60);
    }
}
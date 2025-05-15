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
        x: this.x,
        y: this.y,
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
     * Plays the appropriate animation for the given enemy based on its state.
     * 
     * This function sets up an interval that checks the state of the enemy every 100 milliseconds
     * and plays the corresponding animation:
     * - If the enemy is dead and the animation has not finished, it plays the dying animation once.
     * - If the enemy is hurt but not dead, it plays the hurt animation.
     * - If the enemy is not dead and is slashing, it plays the slashing animation.
     * - If the enemy is not dead and not in any special state, it plays the walking animation.
     * 
     * @param {Object} enemy - The enemy object for which the animation should be played.
     * @param {Function} enemy.isDead - Method to check if the enemy is dead.
     * @param {Function} enemy.isHurt - Method to check if the enemy is hurt.
     * @param {Function} enemy.playOnceAnimation - Method to play an animation once.
     * @param {Function} enemy.playAnimation - Method to play a looping animation.
     * @param {Array} enemy.IMAGES_DYING - Array of images for the dying animation.
     * @param {Array} enemy.IMAGES_HURT - Array of images for the hurt animation.
     * @param {Array} enemy.IMAGES_SLASHING - Array of images for the slashing animation.
     * @param {Array} enemy.IMAGES_WALKING - Array of images for the walking animation.
     * @param {boolean} enemy.animationFinished - Flag indicating if the dying animation has finished.
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
                } else if (!enemy.isDead()) {
                    enemy.playAnimation(enemy.IMAGES_WALKING);
                }
            }
        }, 100);
    }

    /**
     * Sets the enemy's movement to the left at a consistent interval.
     * The movement will stop if the enemy is dead.
     * 
     * @method
     */
    setEnemyMove() {
        let move = setInterval(() => {
            if (!this.isDead() && this.isGameReady) {
                this.moveLeft();
            } else if (this.isDead()) {
                clearInterval(move);
            }
        }, 1000 / 60);
    }
}
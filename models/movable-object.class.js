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
    }
    innerFrame = {
        y: 0,
        x: 0,
        width: 0,
        height: 0,
        flippedX: 0
    }
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

    applyGravity() {
        setInterval(() => {
            if (this.isJumping) {
                this.y -= this.speedY;
                this.innerFrame.y -= this.speedY;
                this.speedY -= this.acceleration;
                // Sobald der Charakter den Boden erreicht:
                if (Math.abs(this.y - this.currentY) < 10) { // Toleranz von 10 Pixel
                    this.y = this.currentY; // Auf Boden fixieren
                    this.speedY = 0; // Geschwindigkeit zurücksetzen
                    this.isJumping = false; // Sprungstatus zurücksetzen
                }

            }
        }, 1000 / 25);
    }

    moveRight() {
        this.x += this.speed;
        this.innerFrame.x += this.speed;
        this.otherDirection = false;
    }

    moveLeft() {
        this.x -= this.speed;
        this.innerFrame.x -= this.speed;
        this.otherDirection = true;
    }

    moveUp() {
        this.y -= this.speed;
        this.innerFrame.y -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
        this.innerFrame.y += this.speed;
    }

    currentPosition() {
        if (!this.isJumping) {
            this.currentY = this.y;
        }
    }

    jump() {
        if (!this.isJumping) {
            this.isJumping = true;
            this.speedY = 20;
        }
    }

    /**
     * 
     * @returns The object is in the Air
     */
    isAboveGround() {
        return this.y < 145;
    }

    /**
     * 
     * @returns The object is not at the map endpoint
     */
    mapEndPoint() {
        return this.x < this.world.level.levelEndX
    }

    /**
     * 
     * @returns The object is not at the map startpoint
     */
    mapStartPoint() {
        return this.x > 0;
    }

    /**
     * 
     * @returns The object is located at the top of the bridge
     */
    bridgeTopPoint() {
        return this.y > 180;
    }

    /**
     * 
     * @returns The object is located at the bottom of the bridge
     */
    bridgeBottomPoint() {
        return this.y < 400;
    }

    /**
     * 
     * @param {number} damage is the amount of damage
     */
    hit(damage) {
        this.health -= damage;
        this.lastHit = new Date().getTime();
        if (this.health <= 0) {
            this.health = 0
        }
    }

    isDead() {
        return this.health === 0;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Differenz in ms
        timepassed = timepassed / 1000 // Differenz in s
        return timepassed < 1
    }

    hasEnergy() {
        return this.energy > 0;
    }

    lostEnergy() {
        this.energy -= 20;
    }

    increasesEnergy() {
        if (this.energy === 100) {
            return;
        } else {
            this.energy = 100;
        }
    }

    /**
     * 
     * @param {*} mo is a Movable Object (e.g.: Enemy)
     * @param {*} number this is the distance between the objects
     * @returns 
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
        }, 100)
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
                clearInterval(move)
            }
        }, 1000 / 60);
    }
}
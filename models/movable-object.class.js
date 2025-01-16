class MovableObject extends DrawableObjects {
    x = 100;
    y = 250;
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
    isJumping = false;
    isSlashing = false;

    applyGravity() {
        setInterval(() => {
            if (this.isJumping) { // this.isAboveGround() || this.speedY > 0
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
        // Speichert die aktuelle Y-Position als Ausgangspunkt für den Sprung
        if (!this.isJumping) {
            this.currentY = this.y;
        }
    }

    jump() {
        if (!this.isJumping) {
            this.isJumping = true;
            this.speedY = 22;
        }
    }

    // This Section is for different Rules

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
        return this.x > 0
    }

    /**
     * 
     * @returns The object is located at the top of the bridge
     */
    bridgeTopPoint() {
        return this.y > 150
    }

    /**
     * 
     * @returns The object is located at the bottom of the bridge
     */
    bridgeBottomPoint() {
        return this.y < 330
    }

    /**
     * 
     * @param {number} damage is the amount of damage
     */
    hit(damage) {
        this.health -= damage;
        this.lastHit = new Date().getTime();
        if (this.health < 0) {
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
            this.energy += 20;
        }
    }

/**
 * 
 * @param {*} mo is a Movable Object
 * @param {*} number this is the distance between the objects
 * @returns 
 */
    closeBy(mo, number) {
        return Math.abs(this.x - mo.x) <= number;
    }

    playEnemyAnimation(enemy) {
        if (enemy.isDead() && !enemy.animationFinished) {
            enemy.playOnceAnimation(enemy.IMAGES_DYING);
        } else if (!enemy.isDead() && this.isSlashing) {
            enemy.playAnimation(enemy.IMAGES_SLASHING);
        } else if (!enemy.isDead()) {
            enemy.playAnimation(enemy.IMAGES_WALKING);
        }  
    }
}
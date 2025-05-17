/**
 * Base class for all drawable objects in the game
 */
class DrawableObjects {
    img;
    imageCache = {};
    currentImages = 0;
    animationFinished = false;
    currentOnceImages = 0;
    isGameReady = false;

    /**
     * Loads a single image from a given path
     * @param {string} path - Path to the image file
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Loads multiple images and stores them in the image cache
     * @param {string[]} arr - Array of image file paths
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * Draws the object on the canvas
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * Draws the outer collision frame for debugging
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context
     */
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Skeleton || this instanceof Ghoul  || this instanceof Lich || this instanceof Endboss || this instanceof CollectibleObject || this instanceof ClickableButton || this instanceof ShootableObject) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = this.frameColor;
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();  
        }
    }

    /**
     * Draws the inner collision frame for debugging
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context
     */
    drawInnerFrame(ctx) {
        ctx.beginPath();
        ctx.lineWidth = '4';
        ctx.strokeStyle = 'yellow';
        let drawX = this.otherDirection ? this.innerFrame.flippedX : this.innerFrame.x;
        ctx.rect(drawX, this.innerFrame.y, this.innerFrame.width, this.innerFrame.height);
        ctx.stroke();
    }

    /**
     * Checks if this object is colliding with another movable object
     * @param {MovableObject} mo - The object to check collision with
     * @returns {boolean} True if objects are colliding
     */
    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left && 
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

    /**
     * Checks if this object is landing on top of another movable object
     * @param {MovableObject} mo - The object to check landing on
     * @returns {boolean} True if this object is landing on the other object
     */
    isLandingOn(mo) {
        return this.y + this.height - this.offset.bottom < mo.y + mo.offset.top + 50 &&
               this.y + this.height > mo.y;
    }

    /**
     * Calculates offset values between outer and inner frames
     * @param {Object} outerFrame - The outer collision frame
     * @param {Object} innerFrame - The inner collision frame
     * @returns {Object} Offset values for all sides
     */
    calculateOffset(outerFrame, innerFrame) {
        return {
            left: Math.abs(innerFrame.x - outerFrame.x),
            top: Math.abs(innerFrame.y - outerFrame.y),
            right: Math.abs((outerFrame.x + outerFrame.width) - (innerFrame.x + innerFrame.width)),
            bottom: Math.abs((outerFrame.y + outerFrame.height) - (innerFrame.y + innerFrame.height))
        };
    }

    /**
     * Plays a looping animation using the provided images
     * @param {string[]} images - Array of image paths for the animation
     */
    playAnimation(images) {
        let i = this.currentImages % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImages++
    }

    /**
     * Plays an animation once and stops at the last frame
     * @param {string[]} images - Array of image paths for the animation
     */
    playOnceAnimation(images) {
        if (this.animationFinished) return;
    
        let i = this.currentOnceImages;
        if (i >= images.length) {
            this.animationFinished = true;
            this.img = this.imageCache[images[images.length - 1]];
        } else {
            let path = images[i];
            this.img = this.imageCache[path];
            this.currentOnceImages++; 
        }
    }
}
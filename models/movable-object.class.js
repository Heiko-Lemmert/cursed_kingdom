class MovableObject {
    x = 100;
    y = 250;
    img;
    height = 250;
    width = 250;
    imageCache = {};
    currentImages = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    frameColor = 'red';
    onCollisionCourse = true;
    outerFrame = {
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height
    }
    offsetFrame = {
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

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.offsetFrame.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        this.x += this.speed;
        this.offsetFrame.x += this.speed;
        this.otherDirection = false;
    }

    moveLeft() {
        this.x -= this.speed;
        this.offsetFrame.x -= this.speed;
        this.otherDirection = true;
    }

    playAnimation(images) {
        let i = this.currentImages % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImages++
    }

    jump() {
        this.speedY = 20;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Enemy || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = this.frameColor;
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    // drawOffsetFrame(ctx) {
    //     if (this instanceof Character || this instanceof Enemy || this instanceof Endboss) {
    //         ctx.beginPath();
    //         ctx.lineWidth = '4';
    //         ctx.strokeStyle = 'yellow'
    //         ctx.rect(this.offsetFrame.x, this.offsetFrame.y, this.offsetFrame.width, this.offsetFrame.height);
    //         ctx.stroke();
    //     }
    // }

    drawOffsetFrame(ctx) {
        ctx.beginPath();
        ctx.lineWidth = '4';
        ctx.strokeStyle = 'yellow';
        let drawX = this.otherDirection ? this.offsetFrame.flippedX : this.offsetFrame.x;
        ctx.rect(drawX, this.offsetFrame.y, this.offsetFrame.width, this.offsetFrame.height);
        ctx.stroke();
    }

    // This Section is for different Rules

    /**
     * 
     * @returns The object is in the Air
     */
    isAboveGround() {
        return this.y < 250;
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

    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }
    
    calculateOffset(outerFrame, innerFrame) {
        return {
            left: Math.abs(innerFrame.x - outerFrame.x),
            top: Math.abs(innerFrame.y - outerFrame.y),
            right: Math.abs((outerFrame.x + outerFrame.width) - (innerFrame.x + innerFrame.width)),
            bottom: Math.abs((outerFrame.y + outerFrame.height) - (innerFrame.y + innerFrame.height))
        };
    }
}
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

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
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
        this.otherDirection = false;
    }

    moveLeft() {
        this.x -= this.speed;
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
}
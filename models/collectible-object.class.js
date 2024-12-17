class CollectibleObject {
    height = 75;
    width = 75;
    x;
    y;
    img;
    imageCache = {};
    currentImages = 0;
    otherDirection = false;
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

    playAnimation(images) {
        let i = this.currentImages % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImages++
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.strokeStyle = 'green';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }

    drawinnerFrame(ctx) {
        ctx.beginPath();
        ctx.lineWidth = '4';
        ctx.strokeStyle = 'yellow';
        let drawX = this.otherDirection ? this.innerFrame.flippedX : this.innerFrame.x;
        ctx.rect(drawX, this.innerFrame.y, this.innerFrame.width, this.innerFrame.height);
        ctx.stroke();
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
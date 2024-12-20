class CollectibleObject extends DrawableObjects {
    height = 75;
    width = 75;
    x;
    y;
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
    frameColor = 'green';
}
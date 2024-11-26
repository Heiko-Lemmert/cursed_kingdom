class BackgroundObject extends MovableObject {
    width = 1205;

    constructor(imgPath, y, x, height) {
        super().loadImage(imgPath)
        this.y = y;
        this.x = x;
        this.height = height;
    }
}
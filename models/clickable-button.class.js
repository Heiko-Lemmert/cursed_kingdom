class ClickableButton extends DrawableObjects {
    x;
    y = 10;
    width = 100;
    height = 100;
    id;
    isActivated;

    constructor(image, x, id) {
        super();
        this.loadImage(image);
        this.x = x;
        this.id = id;
    }

    onClick(action) {
        console.log(this.id);
        fullscreen();
    }
}
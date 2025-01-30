class ClickableButton extends DrawableObjects {
    x;
    y = 10;
    width = 100;
    height = 100;
    id;

    constructor(image, x, id) {
        super();
        this.loadImage(image);
        this.x = x;
        this.id = id;
    }

    onClick(action) {
        if (action == 1) {
            fullscreen();
        } else if (action == 2) {
            exitFullscreen();
        }
    }
}
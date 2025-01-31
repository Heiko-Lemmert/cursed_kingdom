class ClickableButton extends DrawableObjects {
    x;
    y = 10;
    width = 75;
    height = 75;
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
        } else if (action == 3) {
            volumeMute()
        } else if (action == 4) {
            volumeLoud()
        }
    }
}
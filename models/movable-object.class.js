class MovableObject {
    x = 100;
    y = 250;
    img;
    height = 250;
    width = 250;

    // constructor(x, y, img) {
    //     this.x = x;
    //     this.y = y;
    //     this.img = img;
    // }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('Moving Right')
    }

    moveLeft () {
        
    }
}
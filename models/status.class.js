class Status extends DrawableObjects {
    x;
    y = 10;
    height = 75;
    width = 100;
    percent = 100;

    setPercent(percent, images) {
        this.percent = percent;
        let path = images[this.resolveImageIndex(percent)];
        this.img = this.imageCache[path]
    }

    resolveImageIndex(percent) {
        switch (percent) {
            case 100:
                return 5      
            case 80:
                return 4      
            case 60:
                return 3      
            case 40:
                return 2      
            case 20:
                return 1     
            case 0:
                return 0      
            default:
                break;
        }
    }
}
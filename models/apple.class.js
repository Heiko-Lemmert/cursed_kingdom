class Apple extends CollectibleObject {
    IMG_SRC = 'asset/img/7_Collectibles/Apple.png';
    baseY = 400; // Ausgangsposition
    amplitude = 3; // Höhe des Sprungs
    frequency = 0.1; // Geschwindigkeit des Hüpfens
    angle = 0; // Aktueller Winkel (für sinusförmige Bewegung)
    innerFrame = {
        width: this.width,
        height: this.height
    };

    constructor(x, y) {
        super().loadImage(this.IMG_SRC);
        this.x = this.outerFrame.x = this.innerFrame.x = x;
        this.y = this.outerFrame.y = this.innerFrame.y = y;
        this.animate()
    }

    animate() {
        setInterval(() => {
            this.angle += this.frequency; // Winkel inkrementieren
            this.y = this.baseY + Math.sin(this.angle) * this.amplitude;
        }, 1000 / 60); // 60 FPS für flüssige Animation
    }
}
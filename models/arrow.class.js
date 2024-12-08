class Arrow extends CollectibleObject {
    IMG_SRC = 'asset/img/7_Collectibles/Arrow.png';
    baseY = 400; // Ausgangsposition
    amplitude = 5; // Höhe des Sprungs
    frequency = 0.1; // Geschwindigkeit des Hüpfens
    angle = 0; // Aktueller Winkel (für sinusförmige Bewegung)

    constructor(x) {
        super().loadImage(this.IMG_SRC);
        this.x = x;
        this.animate()
    }

    animate() {
        setInterval(() => {
            this.angle += this.frequency; // Winkel inkrementieren
            this.y = this.baseY + Math.sin(this.angle) * this.amplitude;
        }, 1000 / 60); // 60 FPS für flüssige Animation
    }
}
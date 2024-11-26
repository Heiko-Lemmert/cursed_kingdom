class World {
    character = new Character();
    clouds = [
        new Cloud(),
    ]; 
    enemies = [
        new Enemy(),
        new Enemy(),
        new Enemy(),
    ];
    backgrounds = [
        new BackgroundObject('asset/img/5_Levels/SKY-BRIDGE/Backgrounds/tower.png', 0, 0, 310),
        new BackgroundObject('asset/img/5_Levels/SKY-BRIDGE/Backgrounds/bridge.png', 300, 0, 300),
        new BackgroundObject('asset/img/5_Levels/SKY-BRIDGE/Backgrounds/clouds 2.png', 280, 0, 300)
    ]
    ctx;
    canvas;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectsToMap(this.backgrounds);
        this.addObjectsToMap(this.clouds);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        let self = this;
        requestAnimationFrame(() => {
            self.draw();
        })
    }

    addObjectsToMap(objects) {
        objects.forEach(o => { 
            this.addToMap(o);
        })
    }

    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}
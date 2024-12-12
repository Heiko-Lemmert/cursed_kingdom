class World {
    character = new Character();
    level = levelOne;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
    }

    setWorld() {
        this.character.world = this;
    }
    /**
     * Die Draw() Methode zeichnet mit Hilfe der requestAnimationFrame()-Methode 30-60 mal pro Sekunde alle Objekte und Hintergründe auf die Canvas.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgrounds);
        this.addObjectsToMap(this.level.clouds);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.arrows);
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(() => { // Mit dieser Funktion wird die Draw() 30-60 mal pro Sekunde ausgeführt
            self.draw();
        })
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    /**
     * 
     * @param {object} wo This is a World object
     */
    addToMap(wo) {
        if (wo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(wo.width, 0);
            this.ctx.scale(-1, 1)
            wo.x = wo.x * -1;
        }
        wo.draw(this.ctx);
        wo.drawFrame(this.ctx);
        if (wo.otherDirection) {
            wo.x = wo.x * -1;
            this.ctx.restore();
        }
    }
}
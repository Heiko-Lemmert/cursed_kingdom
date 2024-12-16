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
        this.checkCollison();
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
        // this.addObjectsToMap(this.level.coins);
        // this.addObjectsToMap(this.level.arrows);
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(() => { // Mit dieser Funktion wird die Draw() 30-60 mal pro Sekunde ausgeführt
            self.draw();
        })
    }

    checkCollison() {
        setInterval(() => {
            this.level.enemies.forEach(enemy => {
                if (this.character.isColliding(enemy)) {
                    console.log('Collison detected with', enemy)
                }
            });
        }, 1000);
    }

    checkCollisonFrame() {
            console.log('Objekt Character - Berechnete Grenzen:');
            console.log('Left:', this.character.x + this.character.offset.left);
            console.log('Right:', this.character.x + this.character.width - this.character.offset.right);
            console.log('Top:', this.character.y + this.character.offset.top);
            console.log('Bottom:', this.character.y + this.character.height - this.character.offset.bottom);

            console.log('Objekt Enemy - Berechnete Grenzen:');
            console.log('Left:', this.level.enemies[0].x + this.level.enemies[0].offset.left);
            console.log('Right:', this.level.enemies[0].x + this.level.enemies[0].width - this.level.enemies[0].offset.right);
            console.log('Top:', this.level.enemies[0].y + this.level.enemies[0].offset.top);
            console.log('Bottom:', this.level.enemies[0].y + this.level.enemies[0].height - this.level.enemies[0].offset.bottom);
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
            this.flipImg(wo);
        }
        wo.draw(this.ctx);
        wo.drawFrame(this.ctx);
        wo.drawOffsetFrame(this.ctx);
        if (wo.otherDirection) {
            this.flipImgBack(wo);
        }
    }

    flipImg(wo) {
        this.ctx.save();
        this.ctx.translate(wo.width, 0);
        this.ctx.scale(-1, 1)
        wo.x = wo.x * -1;
        wo.offsetFrame.flippedX = wo.width - (wo.offsetFrame.x + wo.offsetFrame.width);
    }

    flipImgBack(wo) {
        wo.x = wo.x * -1;
        wo.offsetFrame.flippedX = wo.width - (wo.offsetFrame.x + wo.offsetFrame.width);
        this.ctx.restore();
    }

}
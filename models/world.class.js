class World {
    character = new Character();
    level = levelOne;
    healthbar = new Heahltbar();
    energybar = new Energybar();
    coinbar = new Coinbar();
    arrows = [
        // new ShootableObject(160)
    ];
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    currentCoins = 0;
    currentEnergy = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.ctx.font = '48px Eagle Lake'
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.run();
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

        this.ctx.translate(-this.camera_x, 0);
        // --- Space for fixed Objects
        this.healthbar.draw(this.ctx);
        this.energybar.draw(this.ctx);
        this.coinbar.draw(this.ctx);
        this.coinbar.fillText(this.ctx);
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);
        this.addObjectsToMap(this.arrows)
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.apples);
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(() => { // Mit dieser Funktion wird die Draw() 30-60 mal pro Sekunde ausgeführt
            self.draw();
        })
    }

    run() {
        setInterval(() => {
            this.checkCollison();
            this.checkCoinCollison();
            this.checkAppleCollison();
            this.checkShootableObject();
        }, 250);
    }

    checkCollison() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy)) {
                this.character.hit(20);
                this.healthbar.setPercent(this.character.health, this.healthbar.IMAGES_HEALTH);
            }
            this.arrows.forEach((arrow, i) => {
                if (arrow.isColliding(enemy)) {
                    enemy.hit(100);
                    this.arrows.splice(i, 1)
                }
            })

        });
    }

    checkCoinCollison() {
        this.level.coins.forEach((collectible, i) => {
            if (this.character.isColliding(collectible)) {
                this.level.coins.splice(i, 1)
                this.coinbar.currentCoins++
            }
        });
    }

    checkAppleCollison() {
        this.level.apples.forEach((collectible, i) => {
            if (this.character.isColliding(collectible)) {
                this.level.apples.splice(i, 1);
                this.character.increasesEnergy();
                this.energybar.setPercent(this.character.energy, this.energybar.IMAGES_ENERGY);
            }
        });
    }

    checkShootableObject() {
        if (this.keyboard.down && !this.character.isAboveGround() && this.character.hasEnergy()) {
            let arrow = new ShootableObject(this.character.x + 160);
            this.arrows.push(arrow);
            this.character.lostEnergy();
            this.energybar.setPercent(this.character.energy, this.energybar.IMAGES_ENERGY);
        }
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

        console.log('Objekt Coin - Berechnete Grenzen:');
        console.log('Left:', this.level.coins[0].x + this.level.coins[0].offset.left);
        console.log('Right:', this.level.coins[0].x + this.level.coins[0].width - this.level.coins[0].offset.right);
        console.log('Top:', this.level.coins[0].y + this.level.coins[0].offset.top);
        console.log('Bottom:', this.level.coins[0].y + this.level.coins[0].height - this.level.coins[0].offset.bottom);
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
        wo.drawInnerFrame(this.ctx);
        if (wo.otherDirection) {
            this.flipImgBack(wo);
        }
    }

    flipImg(wo) {
        this.ctx.save();
        this.ctx.translate(wo.width, 0);
        this.ctx.scale(-1, 1)
        wo.x = wo.x * -1;
        wo.innerFrame.flippedX = wo.width - (wo.innerFrame.x + wo.innerFrame.width);
    }

    flipImgBack(wo) {
        wo.x = wo.x * -1;
        wo.innerFrame.flippedX = wo.width - (wo.innerFrame.x + wo.innerFrame.width);
        this.ctx.restore();
    }

    /* Alternative (quick and dirty), um alle Intervalle zu beenden. */
    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
    }
}
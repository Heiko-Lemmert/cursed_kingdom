class World extends Checker {
    character = new Character();
    level = levelOne;
    healthbar = new Heahltbar();
    energybar = new Energybar();
    coinbar = new Coinbar();
    checker = new Checker();
    arrows = [];
    screenBtn = new ClickableButton('asset/img/6_UI/btn/Default@Fullscreen.png', 1075, 'fullscreen');
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    currentCoins = 0;
    currentEnergy = 0;

    constructor(canvas, keyboard) {
        super();
        this.ctx = canvas.getContext('2d');
        this.ctx.font = '48px Eagle Lake'
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.run();
        this.level.bgAudio.loop = true;
    }

    setWorld() {
        this.character.world = this;
        this.checker.world = this;
        this.coinbar.ctx = this;
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
        this.screenBtn.draw(this.ctx);
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
        this.level.bgAudio.play();
        this.checker.checkClickableButton();
        setInterval(() => {
            this.checker.checkCollison();
            this.checker.checkCoinCollison();
            this.checker.checkAppleCollison();
            this.checker.checkShootableObject();
            this.checker.checkCloseBy();
        }, 100);
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
        // wo.drawFrame(this.ctx);
        // if (wo instanceof Character || wo instanceof Skeleton || wo instanceof Ghoul || wo instanceof Endboss || wo instanceof CollectibleObject) {
        //     wo.drawInnerFrame(this.ctx);
        // }
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

    async importSprites() {
        sprites = await fetch('models/sprites.json').then(r => r.json());
    }
}
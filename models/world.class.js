class World extends Checker {
    level = createLevelOne();
    music = new Music(this.level.bgAudio);
    character = new Character(this.music);
    healthbar = new Heahltbar(10);
    healthbarEndboss = new Heahltbar(850);
    energybar = new Energybar();
    coinbar = new Coinbar();
    checker = new Checker();
    arrows = [];
    apples = [];
    screenBtn = new ClickableButton('asset/img/6_UI/btn/Default@Fullscreen.png', 1075, 'fullscreen');
    volumeBtn;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    currentCoins = 0;
    currentEnergy = 0;
    bgMusic = this.music.findAudioSrc('backgroundMusic');
    isEndFight = false;
    gameWon = false;
    gameLost = false;


    constructor(canvas, keyboard) {
        super();
        this.ctx = canvas.getContext('2d');
        this.ctx.font = fontStyle;
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.setVolumeBtnImage();
        this.draw();
        this.run();
        this.bgMusic.loop = true;
    }

    setWorld() {
        this.character.world = this;
        this.level.enemies.forEach(enemy => {
            if (enemy instanceof Lich) {
                enemy.world = this;
            }
        });
    }

    setVolumeBtnImage() {
        if (localStorage.getItem('mute') === 'true') {
            this.volumeBtn = new ClickableButton('asset/img/6_UI/btn/Default@Sound_Off.png', 965, 'volume-off');
        } else {
            this.volumeBtn = new ClickableButton('asset/img/6_UI/btn/Default@Sound_On.png', 965, 'volume-on');
        }
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
        if (this.isEndFight) {
            this.healthbarEndboss.draw(this.ctx);
        }
        this.energybar.draw(this.ctx);
        this.coinbar.draw(this.ctx);
        this.coinbar.fillText(this.ctx);
        this.screenBtn.draw(this.ctx);
        this.volumeBtn.draw(this.ctx);
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);
        this.addObjectsToMap(this.arrows)
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.apples);
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(() => { // Mit dieser Funktion wird die Draw() 30-60 mal pro Sekunde ausgeführt
            self.draw();
        })
    }

    run() {
        this.bgMusic.play();
        this.checkClickableButton();
        setInterval(() => {
            this.checkCollison();
            this.checkArrowCollison();
            this.checkCoinCollison();
            this.checkAppleCollison();
            this.checkShootableObject();
            this.checkCloseBy();
            this.checkFullscreen();
            this.setPauseStatus();
            this.checkEnemyRemover();
            this.setGameStatus();
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
}
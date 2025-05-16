/**
 * Main game world class that manages all game objects and their interactions
 * @extends Checker
 */
class World extends Checker {
    music = new Music();
    level = createLevelOne(this.music);
    character = new Character(this.music);
    healthbar = new Healthbar(10);
    healthbarEndboss = new Healthbar(850);
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
    bgMusic;
    isEndFight = false;
    gameWon = false;
    gameLost = false;

    /**
     * Creates a new game world instance
     * @param {HTMLCanvasElement} canvas - The game's canvas element
     * @param {Keyboard} keyboard - The keyboard input controller
     */
    constructor(canvas, keyboard) {
        super();
        this.ctx = canvas.getContext('2d');
        this.ctx.font = fontStyle;
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.music.setBackgroundMusic(this.level.bgAudio);
        this.bgMusic = this.music.findAudioSrc('backgroundMusic');
        this.bgMusic.loop = true;
        this.bgMusic.volume = 0.2;
        this.setWorld();
        this.setVolumeBtnImage();
        this.draw();
        this.run();
    }

    /**
     * Sets up world references for character and specific enemies
     */
    setWorld() {
        this.character.world = this;
        this.level.enemies.forEach(enemy => {
            if (enemy instanceof Lich) {
                enemy.world = this;
            }
        });
    }

    /**
     * Initializes the volume button state based on localStorage
     */
    setVolumeBtnImage() {
        if (localStorage.getItem('mute') === 'true') {
            this.volumeBtn = new ClickableButton('asset/img/6_UI/btn/Default@Sound_Off.png', 965, 'volume-off');
        } else {
            this.volumeBtn = new ClickableButton('asset/img/6_UI/btn/Default@Sound_On.png', 965, 'volume-on');
        }
    }

    /**
     * Main drawing function that renders all game objects
     * Runs 30-60 times per second using requestAnimationFrame
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
        if (!isMobile) { 
            this.screenBtn.draw(this.ctx); 
        }
        this.volumeBtn.draw(this.ctx);
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);
        this.addObjectsToMap(this.arrows)
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.apples);
        this.ctx.translate(-this.camera_x, 0);
    }

    /**
     * Main game loop that handles all checks and updates
     */
    run() {
        this.checkClickableButton();
        
        // Critical game mechanics - 60fps
        setInterval(() => {
            this.checkArrowCollison();
            this.checkCollison();
            this.checkShootableObject();
        }, 1000 / 60);

        // Important game interactions - 30fps
        setInterval(() => {
            this.checkCoinCollison();
            this.checkAppleCollison();
            this.checkCloseBy();
            this.checkEnemyRemover();
        }, 1000 / 30);

        // UI and status updates - 100ms
        setInterval(() => {
            this.checkFullscreen();
            this.setPauseStatus();
            this.setGameStatus();
            this.checkMusicStatus();
        }, 100);

        const update = () => {
            this.draw();
            requestAnimationFrame(update);
        };
        update();
    }

    /**
     * Adds an array of objects to the game world
     * @param {Object[]} objects - Array of drawable objects to add
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    /**
     * Adds a single object to the game world
     * @param {DrawableObjects} wo - The world object to add
     */
    addToMap(wo) {
        if (wo.otherDirection) {
            this.flipImg(wo);
        }
        wo.draw(this.ctx);
        if (wo.otherDirection) {
            this.flipImgBack(wo);
        }
    }

    /**
     * Flips an image horizontally for left-facing animations
     * @param {DrawableObjects} wo - The world object to flip
     */
    flipImg(wo) {
        this.ctx.save();
        this.ctx.translate(wo.width, 0);
        this.ctx.scale(-1, 1)
        wo.x = wo.x * -1;
        wo.innerFrame.flippedX = wo.width - (wo.innerFrame.x + wo.innerFrame.width);
    }

    /**
     * Restores the original image orientation after flipping
     * @param {DrawableObjects} wo - The world object to restore
     */
    flipImgBack(wo) {
        wo.x = wo.x * -1;
        wo.innerFrame.flippedX = wo.width - (wo.innerFrame.x + wo.innerFrame.width);
        this.ctx.restore();
    }

    /**
     * Clears all active intervals in the game
     * Used when stopping or resetting the game
     */
    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
    }
}
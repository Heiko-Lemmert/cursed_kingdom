/**
 * Main game world class that manages all game objects and their interactions
 * @extends GameController
 */
class World extends GameController {
    music = new Music();
    level = createLevelOne(this.music);
    character = new Character(this.music);
    healthbar = new Healthbar(10);
    healthbarEndboss = new Healthbar(850);
    energybar = new Energybar();
    coinbar = new Coinbar();
    arrowUI = new ShootableObject(115, 90, false);
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
    loadingComplete = false;

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
        this.drawGame();
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
    drawGame() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.drawBackgroundObj();
        this.drawUIObj();
        this.drawInteractiveObj();
        this.ctx.translate(-this.camera_x, 0);
    }

    /**
     * Draws background objects for the current level by adding background and cloud objects to the map.
     * Utilizes the `addObjectsToMap` method to render both backgrounds and clouds.
     */
    drawBackgroundObj() {
        this.addObjectsToMap(this.level.backgrounds);
        this.addObjectsToMap(this.level.clouds);
    }

    /**
     * Draws the user interface (UI) elements on the canvas context.
     * Translates the context based on the camera position, then draws various UI components
     * such as health bars, energy bar, coin bar, arrow UI, screen button (if not on mobile), and volume button.
     * Restores the context translation after drawing.
     *
     * @method
     */
    drawUIObj() {
        this.ctx.translate(-this.camera_x, 0);
        this.healthbar.draw(this.ctx);
        if (this.isEndFight) { this.healthbarEndboss.draw(this.ctx); }
        this.energybar.draw(this.ctx);
        this.coinbar.draw(this.ctx);
        this.coinbar.fillText(this.ctx);
        this.arrowUI.draw(this.ctx);
        if (!isMobile) { this.screenBtn.draw(this.ctx); }
        this.volumeBtn.draw(this.ctx);
        this.ctx.translate(this.camera_x, 0);
    }

    /**
     * Draws all Interactiv objects onto the map, including arrows, enemies, coins, apples, and the main character.
     * This method adds each group of objects to the map in a specific order to ensure correct rendering.
     *
     * @method
     */
    drawInteractiveObj() {
        this.addObjectsToMap(this.arrows)
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.apples);
        this.addToMap(this.character);
    }

    /**
     * Executes the main update cycle for the world.
     * 
     * This method performs a series of checks and updates in the following order:
     * 1. Checks for clickable buttons.
     * 2. Executes high priority checks.
     * 3. Executes medium priority checks.
     * 4. Executes low priority checks.
     * 5. Updates the game state.
     */
    run() {
        this.checkClickableButton();
        this.highPriorityCheck();
        this.mediumPriorityCheck();
        this.lowPriorityCheck();
        this.gameUpdater();
    }

    /**
     * Starts a high-priority interval that performs frequent game state checks.
     * The following actions are executed approximately 60 times per second:
     * - Checks for arrow collisions.
     * - Checks for general collisions.
     * - Checks for shootable objects.
     * - Updates the character's arrow readiness state.
     *
     * @returns {void}
     */
    highPriorityCheck() {
        setInterval(() => {
            this.checkEnemyCollisions();
            this.checkShootableObject();
            this.character.updateArrowReadiness();
        }, 1000 / 60);
    }

    /**
     * Starts a recurring interval that performs several medium-priority checks
     * related to game state, such as coin and apple collisions, proximity checks,
     * enemy removal, and past enemy checks. The checks are executed approximately
     * 30 times per second.
     *
     * @returns {void}
     */
    mediumPriorityCheck() {
        setInterval(() => {
            this.checkCoinCollison();
            this.checkAppleCollison();
            this.checkCloseBy();
            this.checkEnemyRemover();
            this.checkPastEnemy()
        }, 1000 / 30);
    }

    /**
     * Periodically performs low-priority checks related to the game state.
     * Executes the following methods every 100 milliseconds:
     * - checkFullscreen: Checks and updates fullscreen status.
     * - setPauseStatus: Updates the game's pause status.
     * - setGameStatus: Updates the overall game status.
     * - checkMusicStatus: Checks and updates the music status.
     */
    lowPriorityCheck() {
        setInterval(() => {
            this.checkFullscreen();
            this.setPauseStatus();
            this.setGameStatus();
            this.checkMusicStatus();
        }, 100);
    }

    /**
     * Continuously updates and redraws the game by calling drawGame,
     * and schedules the next update using requestAnimationFrame.
     * This creates a game loop that keeps the game state and visuals in sync.
     */
    gameUpdater() {
        this.drawGame();
        requestAnimationFrame(this.gameUpdater.bind(this));
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
/**
 * Handles all collision and state checks in the game
 */
class GameController {
    /**
    * Checks for collisions between the character or arrows and enemies.
    * Handles damage, jumping on enemies, and arrow impact logic.
    */
    checkEnemyCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !enemy.isDead() && this.character.lastHitAgo()) {
                this.characterCollisions(enemy);
            }

            this.arrows.forEach((arrow, index) => {
                this.arrowCollisions(enemy, arrow, index);
            });
        });
    }

    /**
     * Checks for collisions between character and enemies
     * Handles damage and jumping on enemies
     */
    characterCollisions(enemy) {
        if (this.character.isJumping && this.character.isLandingOn(enemy) && !(enemy instanceof Endboss)) {
                this.character.speedY = 10;
                enemy.hit(100);
                enemy.audioHit.play();
            } else {
                const damage = (enemy instanceof Endboss) ? 40 : 20;
                this.character.hit(damage);
                this.healthbar.setPercent(this.character.health, this.healthbar.IMAGES_HEALTH);
                this.character.audioHit.play();
            }
    }

    /**
     * Checks for collisions between arrows and enemies
     * Handles different damage amounts for different enemy types
     */
    arrowCollisions(enemy, arrow, index) {
        if (arrow.isColliding(enemy) && !enemy.isDead()) {
            if (enemy instanceof Endboss) {
                enemy.hit(20);
                enemy.hitCount++;
                this.healthbarEndboss.setPercent(enemy.health, this.healthbarEndboss.IMAGES_HEALTH);
            } else if (enemy instanceof Lich) {
                enemy.hit(50);
            } else {
                enemy.hit(100);
            }
            this.arrows.splice(index, 1);
            this.character.audioArrow.pause();
            enemy.audioHit.play();
        }
    }

    /**
     * Removes dead enemies from the game
     */
    checkEnemyRemover() {
        this.level.enemies.forEach((enemy, i) => {
            if (!(enemy instanceof Endboss) && enemy.isDead() && enemy.animationFinished) {
                this.level.enemies.splice(i, 1)
            }
        });
    }

    /**
     * Checks for collisions between character and coins
     * Handles coin collection and sound effects
     */
    checkCoinCollison() {
        let coinAudio = this.music.findAudioSrc('collectedCoin');
        this.level.coins.forEach((collectible, i) => {
            if (this.character.isColliding(collectible)) {
                coinAudio.play()
                this.level.coins.splice(i, 1)
                this.coinbar.currentCoins++
            }
        });
    }

    /**
     * Checks for collisions between character and apples
     * Handles energy restoration
     */
    checkAppleCollison() {
        this.apples.forEach((collectible, i) => {
            if (this.character.isColliding(collectible)) {
                this.apples.splice(i, 1);
                this.character.increasesEnergy();
                this.energybar.setPercent(this.character.energy, this.energybar.IMAGES_ENERGY);
            }
        });
    }

    /**
     * Handles character shooting mechanics
     * Controls shooting animation and energy consumption
     */
    checkShootableObject() {
        if (this.keyboard.fire && !this.character.isAboveGround() && this.character.hasEnergy() && this.character.lastShootAgo() && !this.character.isShooting && this.character.isGameReady) {
            this.setShootVariables();
            clearInterval(this.character.animationInterval) 
            this.character.shoot(this.getShootPosition('X'), this.getShootPosition('Y'), this.character.otherDirection);
            this.character.startShootAnimation(this.chooseImagesArray());
            this.character.lostEnergy();
            this.energybar.setPercent(this.character.energy, this.energybar.IMAGES_ENERGY);
        }
    }

    /**
     * Sets the variables related to the shooting state of the character.
     * Marks the character as currently shooting and updates the arrow UI to indicate that shooting is not ready.
     */
    setShootVariables() {
        this.character.isShooting = true;
        this.arrowUI.isShootReady = false;
    }

    /**
     * Calculates the shoot position based on the given coordinate axis.
     *
     * @param {'X'|'Y'} coordinate - The axis for which to get the shoot position ('X' or 'Y').
     * @returns {number|undefined} The calculated shoot position for the specified axis, or undefined if the axis is invalid.
     */
    getShootPosition(coordinate) {
        switch (coordinate) {
            case 'Y':
                return this.character.y + 125;
            case 'X':
                return this.character.otherDirection ? this.character.x : this.character.x + 160;
            default:
                break;
        }
    }

    /**
     * Determines and returns the appropriate array of images for the character
     * based on the current keyboard input (left or right movement).
     *
     * @returns {Array<string>} The array of image paths for running and shooting or just shooting.
     */
    chooseImagesArray() {
        const chooseImages = this.character.world.keyboard.right || this.character.world.keyboard.left ? this.character.IMAGES_RUN_SHOOTING : this.character.IMAGES_SHOOTING;
        return chooseImages;
    }


    /**
     * Checks if enemies are close to the character
     * Triggers enemy reactions and boss fight conditions
     */
    checkCloseBy() {
        this.level.enemies.forEach(enemy => {
            if (this.character.closeBy(enemy, 275) && !enemy.isDead()) {
                enemy.isSlashing = true;
                enemy.audioGrowl.play();
            } else {
                enemy.isSlashing = false;
            }
            if (enemy instanceof Endboss && this.character.closeBy(enemy, 1000)) {
                this.isEndFight = true;
                this.bgMusic.pause();
                enemy.startEndFight = true;
                enemy.audioWisper.play();
            }
        });
    }

    /**
     * Checks each enemy in the current level to determine if they are a "past enemy"
     * relative to the character. Sets the `otherDirection` property of each enemy
     * to `false` if they are a past enemy, otherwise sets it to `true`.
     *
     * @method
     */
    checkPastEnemy() {
        this.level.enemies.forEach(enemy => {
            if (enemy.otherDirection && this.character.pastRightEnemy(enemy)) {
                enemy.otherDirection = false;
            } else if (!enemy.otherDirection && this.character.pastLeftEnemy(enemy)) {
                enemy.otherDirection = true;
            }
        });
    }

    /**
     * Sets up click event listeners for UI buttons
     * Handles screen and volume button interactions
     */
    checkClickableButton() {
        this.canvas.addEventListener('click', (event) => {
            const rect = this.canvas.getBoundingClientRect();
            const mouseX = (event.clientX - rect.left) * (this.canvas.width / rect.width);
            const mouseY = (event.clientY - rect.top) * (this.canvas.height / rect.height);
            const screenBtn = this.screenBtn;
            const volumeBtn = this.volumeBtn;

            if (this.checkBtn(mouseX, mouseY, screenBtn)) {
                this.setScreenBtn(screenBtn);
            }
            if (this.checkBtn(mouseX, mouseY, volumeBtn)) {
                this.setVolumeBtn(volumeBtn);
            }
        });
    }

    /**
     * Checks if a mouse click is within a button's boundaries
     * @param {number} mouseX - X coordinate of mouse click
     * @param {number} mouseY - Y coordinate of mouse click
     * @param {Object} btn - Button object to check
     * @returns {boolean} True if click is within button boundaries
     */
    checkBtn(mouseX, mouseY, btn) {
        if (btn.id !== 'fullscreen') {
            return mouseX >= btn.x * scale && mouseX <= (btn.x + btn.width) * scale && mouseY >= btn.y * scale && mouseY <= (btn.y + btn.height) * scale;
        } else {
            return mouseX >= btn.x && mouseX <= btn.x + btn.width && mouseY >= btn.y && mouseY <= btn.y + btn.height;
        }

    }

    /**
     * Monitors fullscreen state and updates screen button accordingly
     */
    checkFullscreen() {
        if (!document.fullscreenElement && this.screenBtn.id === 'smallscreen') {
            exitFullscreen();
            this.screenBtn = new ClickableButton('asset/img/6_UI/btn/Default@Fullscreen.png', 1075, 'fullscreen');
        } else if (document.fullscreenElement && this.screenBtn.id === 'fullscreen') {
            this.screenBtn = new ClickableButton('asset/img/6_UI/btn/Default@Smallscreen.png', 1075, 'smallscreen');
        }
    }

    /**
     * Updates screen button state and triggers fullscreen changes
     * @param {Object} screenBtn - The screen button object to update
     */
    setScreenBtn(screenBtn) {
        if (screenBtn.id === 'fullscreen') {
            screenBtn.onClick(1);
            this.screenBtn = new ClickableButton('asset/img/6_UI/btn/Default@Smallscreen.png', 1075, 'smallscreen');
        } else if (screenBtn.id === 'smallscreen') {
            screenBtn.onClick(2);
            this.screenBtn = new ClickableButton('asset/img/6_UI/btn/Default@Fullscreen.png', 1075, 'fullscreen');
        }
    }

    /**
     * Updates volume button state and triggers sound changes
     * @param {Object} volumeBtn - The volume button object to update
     */
    setVolumeBtn(volumeBtn) {
        if (volumeBtn.id === 'volume-on') {
            this.volumeBtn = new ClickableButton('asset/img/6_UI/btn/Default@Sound_Off.png', 965, 'volume-off');
            this.music.muteVolume();
        } else if (volumeBtn.id === 'volume-off') {
            this.volumeBtn = new ClickableButton('asset/img/6_UI/btn/Default@Sound_On.png', 965, 'volume-on');
            this.music.setVolume();
        }
    }

    /**
     * Sets pause state for all game elements
     * Updates game ready status based on pause menu visibility
     */
    setPauseStatus() {
        if (this.loadingComplete) {
            const isGamePaused = offcanvas.classList.contains('show');

            this.character.isGameReady = isGamePaused === false ? true : false;

            const gameElements = [
                ...this.level.enemies,
                ...this.level.clouds,
                ...this.level.coins
            ];

            gameElements.forEach(element => element.isGameReady = isGamePaused === false ? true : false);
        }
    }

    /**
     * Checks and updates game win/loss conditions
     */
    setGameStatus() {
        if (this.character.isDead() && this.character.animationFinished) {
            this.gameLost = true;
            setTimeout(stopGame, 100);
        }
        this.level.enemies.forEach(enemy => {
            if (enemy instanceof Endboss && enemy.isDead() && enemy.animationFinished) {
                this.gameWon = true;
                setTimeout(stopGame, 100);
            }
        });
    }

    /**
     * Controls background music playback based on game state
     */
    checkMusicStatus() {
        if (localStorage.getItem('mute') === 'false' && !this.isEndFight && !this.gameWon && !this.gameLost
        ) {
            this.bgMusic.play();
        } else {
            this.bgMusic.pause();
        }
    }
}
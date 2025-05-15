/**
 * Handles all collision and state checks in the game
 */
class Checker {
    /**
     * Checks for collisions between character and enemies
     * Handles damage and jumping on enemies
     */
    checkCollison() {
        this.level.enemies.forEach((enemy, i) => {
            if (this.character.isColliding(enemy) && !enemy.isDead() && this.character.lastHitAgo()) {
                if (this.character.isJumping && this.character.isLandingOn(enemy)) {
                    this.character.speedY = 10;
                    enemy.hit(100);
                    enemy.audioHit.play();
                } else {
                    this.character.hit(20);
                    this.healthbar.setPercent(this.character.health, this.healthbar.IMAGES_HEALTH);
                    this.character.audioHit.play();
                }
            }
        });
    }

    /**
     * Checks for collisions between arrows and enemies
     * Handles different damage amounts for different enemy types
     */
    checkArrowCollison() {
        this.level.enemies.forEach((enemy, i) => {
            this.arrows.forEach((arrow) => {
                if (arrow.isColliding(enemy) && !enemy.isDead()) {
                    if (enemy instanceof Endboss) {
                        enemy.hit(20);
                        this.healthbarEndboss.setPercent(enemy.health, this.healthbarEndboss.IMAGES_HEALTH);
                    } else if (enemy instanceof Lich) {
                        enemy.hit(50);
                    } else {
                        enemy.hit(100);
                    }
                    this.arrows.splice(arrow, 1);
                    this.character.audioArrow.pause();
                    enemy.audioHit.play();
                }
            });
        });
    }

    /**
     * Removes dead enemies from the game
     */
    checkEnemyRemover() {
        this.level.enemies.forEach((enemy, i) => {
            if (enemy.isDead() && enemy.animationFinished) {
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
        if (
            this.keyboard.fire && 
            !this.character.isAboveGround() &&
            this.character.hasEnergy() &&
            this.character.lastShootAgo() &&
            !this.character.isShooting &&
            this.character.isGameReady
        ) {
            this.character.isShooting = true;
            clearInterval(this.character.animationInterval) 
            const shootX = this.character.otherDirection ? this.character.x : this.character.x + 160;
            const shootY = this.character.y + 125
            this.character.shoot(shootX, shootY, this.character.otherDirection);
            if (this.keyboard.right || this.keyboard.left) {
                this.character.startShootAnimation(this.character.IMAGES_RUN_SHOOTING);
            } else {
                this.character.startShootAnimation(this.character.IMAGES_SHOOTING);
            }
            this.character.lostEnergy();
            this.energybar.setPercent(this.character.energy, this.energybar.IMAGES_ENERGY);
        }
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
     * Debug function to log collision frame coordinates
     * Displays boundaries for character, enemies, and coins
     */
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
            console.log('X:' + mouseX, 'Y:' + mouseY);
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
        const isGamePaused = offcanvas.classList.contains('show');

        this.character.isGameReady = isGamePaused === false ? true : false;

        const gameElements = [
            ...this.level.enemies,
            ...this.level.clouds,
            ...this.level.coins
        ];

        gameElements.forEach(element => element.isGameReady = isGamePaused === false ? true : false);
    }

    /**
     * Checks and updates game win/loss conditions
     */
    setGameStatus() {
        if (this.character.isDead() && this.character.animationFinished) {
            this.gameLost = true;
            stopGame();
        }
        this.level.enemies.forEach(enemy => {
            if (enemy instanceof Endboss && enemy.isDead()) {
                this.gameWon = true;
                stopGame();
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
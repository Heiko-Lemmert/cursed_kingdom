class Checker {
    world;

    checkCollison() {
        this.world.level.enemies.forEach((enemy, i) => {
            if (this.world.character.isColliding(enemy) && !enemy.isDead()) {
                if (this.world.character.isJumping && this.world.character.isLandingOn(enemy)) {
                    this.world.character.speedY = 10; // Der Charakter wird "zurückprallen".
                    enemy.hit(100); // Gegner besiegen (z. B. mit 100 Schaden).
                    setTimeout(() => {
                        this.world.level.enemies.splice(i, 1)
                    }, 1500)
                    console.log(i)
                } else {
                    this.world.character.hit(20); // Schaden für den Charakter, wenn er nicht auf dem Gegner landet.
                    this.world.healthbar.setPercent(this.world.character.health, this.world.healthbar.IMAGES_HEALTH);
                }
            }
        });
    }

    checkArrowCollison() {
        this.world.level.enemies.forEach((enemy, i) => {
            this.world.arrows.forEach((arrow) => {
                if (arrow.isColliding(enemy) && !enemy.isDead()) {
                    if (enemy instanceof Endboss) {
                        enemy.hit(20);
                        this.world.healthbarEndboss.setPercent(enemy.health, this.world.healthbarEndboss.IMAGES_HEALTH);
                    } else if (enemy instanceof Lich) {
                        enemy.hit(50);
                    } else {
                        enemy.hit(100); // Gegner erleidet schaden durch Pfeil.
                    }
                    this.world.arrows.splice(arrow, 1); // Pfeil entfernen.
                    this.world.character.audioArrow.pause();
                    if (enemy.isDead()) {
                        setTimeout(() => {
                            this.world.level.enemies.splice(i, 1)
                        }, 1500)
                    }
                }
            });
        });
    }

    checkCoinCollison() {
        let coinAudio = this.world.music.findAudioSrc('collectedCoin');
        this.world.level.coins.forEach((collectible, i) => {
            if (this.world.character.isColliding(collectible)) {
                coinAudio.play()
                this.world.level.coins.splice(i, 1)
                this.world.coinbar.currentCoins++
            }
        });
    }

    checkAppleCollison() {
        this.world.apples.forEach((collectible, i) => {
            if (this.world.character.isColliding(collectible)) {
                this.world.apples.splice(i, 1);
                this.world.character.increasesEnergy();
                this.world.energybar.setPercent(this.world.character.energy, this.world.energybar.IMAGES_ENERGY);
            }
        });
    }

    checkShootableObject() {
        if (
            this.world.keyboard.fire && // Taste F wird gedrückt
            !this.world.character.isAboveGround() && // Charakter steht auf dem Boden
            this.world.character.hasEnergy() && // Charakter hat Energie
            this.world.character.lastShootAgo() && // Zeit seit letztem Schuss ist ausreichend
            !this.world.character.isShooting // Animation läuft noch nicht
        ) {
            this.world.character.isShooting = true; // Blockiere weiteren Schuss
            clearInterval(this.world.character.animationInterval) // Beeende Animations Intervall

            // Setze die Richtung und Postion des Schusses
            const shootX = this.world.character.otherDirection ? this.world.character.x : this.world.character.x + 160;
            const shootY = this.world.character.y + 125

            // Schuss erzeugen
            this.world.character.shoot(shootX, shootY, this.world.character.otherDirection);

            // Schussanimation starten
            if (this.world.keyboard.right || this.world.keyboard.left) {
                this.world.character.startShootAnimation(this.world.character.IMAGES_RUN_SHOOTING);
            } else {
                this.world.character.startShootAnimation(this.world.character.IMAGES_SHOOTING);
            }


            // Energieverlust und Anzeige aktualisieren
            this.world.character.lostEnergy();
            this.world.energybar.setPercent(this.world.character.energy, this.world.energybar.IMAGES_ENERGY);
        }
    }

    checkCloseBy() {
        this.world.level.enemies.forEach(enemy => {
            if (this.world.character.closeBy(enemy, 275)) {
                enemy.isSlashing = true;
            } else {
                enemy.isSlashing = false;
            }
            if (enemy instanceof Endboss && this.world.character.closeBy(enemy, 1000)) {
                enemy.startEndFight = true;
                this.world.isEndFight = true;
            }
        });
    }

    checkCollisonFrame() {
        console.log('Objekt Character - Berechnete Grenzen:');
        console.log('Left:', this.world.character.x + this.world.character.offset.left);
        console.log('Right:', this.world.character.x + this.world.character.width - this.world.character.offset.right);
        console.log('Top:', this.world.character.y + this.world.character.offset.top);
        console.log('Bottom:', this.world.character.y + this.world.character.height - this.world.character.offset.bottom);

        console.log('Objekt Enemy - Berechnete Grenzen:');
        console.log('Left:', this.world.level.enemies[0].x + this.world.level.enemies[0].offset.left);
        console.log('Right:', this.world.level.enemies[0].x + this.world.level.enemies[0].width - this.world.level.enemies[0].offset.right);
        console.log('Top:', this.world.level.enemies[0].y + this.world.level.enemies[0].offset.top);
        console.log('Bottom:', this.world.level.enemies[0].y + this.world.level.enemies[0].height - this.world.level.enemies[0].offset.bottom);

        console.log('Objekt Coin - Berechnete Grenzen:');
        console.log('Left:', this.world.level.coins[0].x + this.world.level.coins[0].offset.left);
        console.log('Right:', this.world.level.coins[0].x + this.world.level.coins[0].width - this.world.level.coins[0].offset.right);
        console.log('Top:', this.world.level.coins[0].y + this.world.level.coins[0].offset.top);
        console.log('Bottom:', this.world.level.coins[0].y + this.world.level.coins[0].height - this.world.level.coins[0].offset.bottom);
    }

    checkClickableButton() {
        this.world.canvas.addEventListener('click', (event) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = (event.clientX - rect.left) * (this.world.canvas.width / rect.width);
            const mouseY = (event.clientY - rect.top) * (this.world.canvas.height / rect.height);
            const screenBtn = this.world.screenBtn;
            const volumeBtn = this.world.volumeBtn;

            if (this.checkBtn(mouseX, mouseY, screenBtn)) {
                this.setScreenBtn(screenBtn);
            }
            if (this.checkBtn(mouseX, mouseY, volumeBtn)) {
                this.setVolumeBtn(volumeBtn);
            }
        });
    }

    checkBtn(mouseX, mouseY, btn) {
        return mouseX >= btn.x && mouseX <= btn.x + btn.width && mouseY >= btn.y && mouseY <= btn.y + btn.height
    }


    checkFullscreen() {
        if (!document.fullscreenElement && this.world.screenBtn.id === 'smallscreen') {
            this.world.screenBtn = new ClickableButton('asset/img/6_UI/btn/Default@Fullscreen.png', 1075, 'fullscreen');
        } else if (document.fullscreenElement && this.world.screenBtn.id === 'fullscreen') {
            this.world.screenBtn = new ClickableButton('asset/img/6_UI/btn/Default@Smallscreen.png', 1075, 'smallscreen');
        }
    }

    setScreenBtn(screenBtn) {
        if (screenBtn.id === 'fullscreen') {
            screenBtn.onClick(1);
            this.world.screenBtn = new ClickableButton('asset/img/6_UI/btn/Default@Smallscreen.png', 1075, 'smallscreen');
        } else if (screenBtn.id === 'smallscreen') {
            screenBtn.onClick(2);
            this.world.screenBtn = new ClickableButton('asset/img/6_UI/btn/Default@Fullscreen.png', 1075, 'fullscreen');
        }
    }

    setVolumeBtn(volumeBtn) {
        if (volumeBtn.id === 'volume-on') {
            this.world.volumeBtn = new ClickableButton('asset/img/6_UI/btn/Default@Sound_Off.png', 965, 'volume-off');
            this.world.music.muteVolume();
        } else if (volumeBtn.id === 'volume-off') {
            this.world.volumeBtn = new ClickableButton('asset/img/6_UI/btn/Default@Sound_On.png', 965, 'volume-on');
            this.world.music.setVolume();
        }
    }
}
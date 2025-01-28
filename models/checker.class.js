class Checker {
    world;

    checkCollison() {
        this.world.level.enemies.forEach(enemy => {
            if (this.world.character.isColliding(enemy) && !enemy.isDead()) {
                if (this.world.character.isLandingOn(enemy)) {
                    console.log('Ich lande auf dem Gegner');
                    console.log('Aktuelle Höhe ist', + this.world.character.y)
                    this.world.character.speedY = 10; // Der Charakter wird "zurückprallen".f
                    enemy.hit(100); // Gegner besiegen (z. B. mit 100 Schaden).
                    setTimeout(() => {
                        this.world.level.enemies.splice(enemy, 1)
                    }, 1500)
                } else {
                    this.world.character.hit(20); // Schaden für den Charakter, wenn er nicht auf dem Gegner landet.
                    this.world.healthbar.setPercent(this.world.character.health, this.world.healthbar.IMAGES_HEALTH);
                }
            }
            this.world.arrows.forEach((arrow) => {
                if (arrow.isColliding(enemy) && !enemy.isDead()) {
                    enemy.hit(100); // Gegner erleidetd schaden durch Pfeil.
                    this.world.arrows.splice(arrow, 1); // Pfeil entfernen.
                    this.world.character.audioArrow.pause();
                    setTimeout(() => {
                        this.world.level.enemies.splice(enemy, 1)
                    }, 1500)
                }
            });
        });
    }

    checkCoinCollison() {
        this.world.level.coins.forEach((collectible, i) => {
            if (this.world.character.isColliding(collectible)) {
                this.world.level.coins.splice(i, 1)
                this.world.coinbar.currentCoins++
            }
        });
    }

    checkAppleCollison() {
        this.world.level.apples.forEach((collectible, i) => {
            if (this.world.character.isColliding(collectible)) {
                this.world.level.apples.splice(i, 1);
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
                console.log('Run and Shoot Animation')
                console.log("isShooting:", this.world.character.isShooting);
            } else {
                this.world.character.startShootAnimation(this.world.character.IMAGES_SHOOTING);
            }


            // Energieverlust und Anzeige aktualisieren
            // this.world.character.lostEnergy();                        <----------------------------------------------------- RETURN
            this.world.energybar.setPercent(this.world.character.energy, this.world.energybar.IMAGES_ENERGY);
        }
    }

    checkCloseBy() {
        this.world.level.enemies.forEach(enemy => {
            if (this.world.character.closeBy(enemy, 275)) {
                console.log('Gegner in der Nähe')
                enemy.isSlashing = true;
            } else {
                enemy.isSlashing = false;
            }
            if (enemy instanceof Endboss && this.world.character.closeBy(enemy, 1000)) {
                console.log('Endboss Animation starten')
                enemy.startEndFight = true;
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

}
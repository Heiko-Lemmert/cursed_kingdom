class DrawableObjects {
    img;
    imageCache = {};
    currentImages = 0;
    animationFinished = false;
    currentOnceImages = 0;
    isGameReady = false;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Skeleton || this instanceof Ghoul  || this instanceof Lich || this instanceof Endboss || this instanceof CollectibleObject || this instanceof ClickableButton) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = this.frameColor;
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();  
        }
    }

    drawInnerFrame(ctx) {
        ctx.beginPath();
        ctx.lineWidth = '4';
        ctx.strokeStyle = 'yellow';
        let drawX = this.otherDirection ? this.innerFrame.flippedX : this.innerFrame.x;
        ctx.rect(drawX, this.innerFrame.y, this.innerFrame.width, this.innerFrame.height);
        ctx.stroke();
    }

    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left && // Hier wird festgestellt, ob das aktuelle Objekt auf der horizontalen Achse weiter rechts liegt als das linke Ende von mo.
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top && // Diese Bedingung überprüft die vertikale Überlappung nach unten. -> oben nach unten
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right && // Hier wird festgestellt, ob das aktuelle Objekt auf der horizontalen Achse weiter links liegt als das rechte Ende vom mo.
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom; // Diese Bedingung überprüft die vertikale Überlappung nach oben. -> unten nach oben
    }

    isLandingOn(mo) {
        return this.y + this.height - this.offset.bottom < mo.y + mo.offset.top + 50 &&
               this.y + this.height > mo.y; // Überprüft, ob der Charakter knapp auf dem Gegner landet
    }

    calculateOffset(outerFrame, innerFrame) {
        return {
            left: Math.abs(innerFrame.x - outerFrame.x),
            top: Math.abs(innerFrame.y - outerFrame.y),
            right: Math.abs((outerFrame.x + outerFrame.width) - (innerFrame.x + innerFrame.width)),
            bottom: Math.abs((outerFrame.y + outerFrame.height) - (innerFrame.y + innerFrame.height))
        };
    }

    playAnimation(images) {
        let i = this.currentImages % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImages++
    }

    playOnceAnimation(images) {
        // Abbruchbedingung: Wenn die Animation abgeschlossen ist, bleibt das letzte Bild stehen
        if (this.animationFinished) return;
    
        let i = this.currentOnceImages;
        if (i >= images.length) { // Animation abgeschlossen
            this.animationFinished = true;
            this.img = this.imageCache[images[images.length - 1]]; // Letztes Bild anzeigen
        } else {
            let path = images[i];
            this.img = this.imageCache[path];
            this.currentOnceImages++; 
        }
    }
}
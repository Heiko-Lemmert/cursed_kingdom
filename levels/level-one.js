function createLevelOne(music) {
    let backgrounds = [];
    fillBackgroundArr(backgrounds);

    return new Level(
        [
            new Skeleton(1000, music),
            new Lich(2000, music),
            new Ghoul(1500, music),
            new Skeleton(2000, music),
            new Ghoul(2500, music),
            new Skeleton(3000, music),
            new Ghoul(3500, music),
            new Skeleton(4000, music),
            new Ghoul(5000, music),
            new Skeleton(5500, music),
            new Lich(6000, music),
            new Ghoul(6000, music),
            new Skeleton(6500, music),
            new Ghoul(7000, music),
            new Endboss(music),
        ],
        [
            new Cloud(1000),
            new Cloud(3000),
            new Cloud(5000),
            new Cloud(7000),
        ],
        backgrounds,
        [
            // First Section
            new Coin(1000, 25),
            new Coin(1150, 25),
            new Coin(1300, 25),
            new Coin(1450, 25),
            new Coin(1600, 25),

            // Two Section 
            new Coin(3000, 25),
            new Coin(3150, 25),
            new Coin(3300, 25),
            new Coin(3450, 25),
            new Coin(3600, 25),

            // Three Section
            new Coin(5000, 25),
            new Coin(5150, 25),
            new Coin(5300, 25),
            new Coin(5450, 25),
            new Coin(5600, 25),

            // Three Section
            new Coin(6000, 25),
            new Coin(6150, 25),
            new Coin(6300, 25),
            new Coin(6450, 25),
            new Coin(6600, 25),

        ],
        new Audio('asset/audio/medieval-life.mp3')
    )
}

function fillBackgroundArr(backgrounds) {
    let xpostion = -1200;
    let bridgeImg = 'bridge';
    for (let i = 0; i < 10; i++) {
        backgrounds.push(new BackgroundObject(`asset/img/5_Levels/SKY-BRIDGE/Backgrounds/tower.png`, 0, xpostion, 348)); // 310 -> 370
        backgrounds.push(new BackgroundObject(`asset/img/5_Levels/SKY-BRIDGE/Backgrounds/${bridgeImg}.png`, 338, xpostion, 338)); // 300 300 -> 360 360
        backgrounds.push(new BackgroundObject(`asset/img/5_Levels/SKY-BRIDGE/Backgrounds/grass.png`, 318, xpostion, 338)); // 280  300 -> 340 360
        bridgeImg = bridgeImg === 'bridge' ? 'bridge-180' : 'bridge';
        xpostion += 1200;
    }
}
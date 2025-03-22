let backgrounds = [];
fillBackgroundArr();

const levelOne = new Level(
    [
        // new Skeleton(1000),
        // new Lich(2000),
        // new Ghoul(1500),
        // new Skeleton(2000),
        // new Ghoul(2500),
        // new Skeleton(3000),
        // new Ghoul(3500),
        // new Skeleton(4000),
        // new Ghoul(5000),
        // new Skeleton(5500),
        // new Lich(6000),
        // new Ghoul(6000),
        // new Skeleton(6500),
        // new Ghoul(7000),
        // new Endboss(),
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

function fillBackgroundArr() {
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
let backgrounds = [];
fillBackgroundArr();

const levelOne = new Level(
    [
        new Enemy(),
        // new Enemy(),
        // new Enemy(),
        new Endboss(),
    ],
    [
        new Cloud(),
    ],
    backgrounds,
    [
        // First Section
        new Coin(1000, 200),
        new Coin(1080, 140),
        new Coin(1160, 80),
        new Coin(1240, 140),
        new Coin(1320, 200),
        

        // Two Section 
        new Coin(3000, 200),
        new Coin(3080, 140),
        new Coin(3160, 80),
        new Coin(3240, 140),
        new Coin(3320, 200),

        // Three Section
        new Coin(5000, 200),
        new Coin(5080, 140),
        new Coin(5160, 80),
        new Coin(5240, 140),
        new Coin(5320, 200),

        // Arrows
        new Arrow(450, 400)
    ],
    // [
    //     new Arrow(450, 400),
    // ]
)

function fillBackgroundArr() {
    let xpostion = -1200;
    let bridgeImg = 'bridge';
    for (let i = 0; i < 8; i++) {
        backgrounds.push(new BackgroundObject(`asset/img/5_Levels/SKY-BRIDGE/Backgrounds/tower.png`, 0, xpostion, 310));
        backgrounds.push(new BackgroundObject(`asset/img/5_Levels/SKY-BRIDGE/Backgrounds/${bridgeImg}.png`, 300, xpostion, 300));
        backgrounds.push(new BackgroundObject(`asset/img/5_Levels/SKY-BRIDGE/Backgrounds/grass.png`, 280, xpostion, 300)); 
        bridgeImg = bridgeImg === 'bridge' ? 'bridge-180' : 'bridge';
        xpostion += 1200; 
    }
}

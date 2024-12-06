let backgrounds = [];
fillBackgroundArr();

const levelOne = new Level(
    [
        new Enemy(),
        new Enemy(),
        new Enemy(),
    ],
    [
        new Cloud(),
    ],
    backgrounds
)

function fillBackgroundArr() {
    let xpostion = -1200;
    let bridgeImg = 'bridge';
    for (let i = 0; i < 4; i++) {
        backgrounds.push(new BackgroundObject(`asset/img/5_Levels/SKY-BRIDGE/Backgrounds/tower.png`, 0, xpostion, 310));
        backgrounds.push(new BackgroundObject(`asset/img/5_Levels/SKY-BRIDGE/Backgrounds/${bridgeImg}.png`, 300, xpostion, 300));
        backgrounds.push(new BackgroundObject(`asset/img/5_Levels/SKY-BRIDGE/Backgrounds/grass.png`, 280, xpostion, 300)); 
        bridgeImg = bridgeImg === 'bridge' ? 'bridge-180' : 'bridge';
        xpostion += 1200; 
    }
}

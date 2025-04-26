const fontStyle = '48px Eagle Lake';
let canvas;
let world;
let keyboard = new Keyboard();
let title;
let description;
let explanation;
let originalWidth = 1200;
let originalHeight = 675;
let scale = 1;
let resizeWidth = 1920;
let resizeHeight = 1080;

function init() {
    canvas = document.getElementById('canvas');
    title = document.getElementById('title');
    description = document.getElementById('description');
    explanation = document.getElementById('explanation');
}

window.addEventListener('keydown', event => {
    switch (event.keyCode) {
        case 87:
            keyboard.up = true;
            break;
        case 38:
            keyboard.up = true;
            break;
        case 83:
            keyboard.down = true;
            break;
        case 40:
            keyboard.down = true;
            break;
        case 68:
            keyboard.right = true;
            break;
        case 39:
            keyboard.right = true;
            break;
        case 65:
            keyboard.left = true;
            break;
        case 37:
            keyboard.left = true;
            break;
        case 32:
            keyboard.space = true;
            break;
        case 70:
            keyboard.fire = true;
            break;
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.keyCode) {
        case 87:
            keyboard.up = false;
            break;
        case 38:
            keyboard.up = false;
            break;
        case 83:
            keyboard.down = false;
            break;
        case 40:
            keyboard.down = false;
            break;
        case 68:
            keyboard.right = false;
            break;
        case 39:
            keyboard.right = false;
            break;
        case 65:
            keyboard.left = false;
            break;
        case 37:
            keyboard.left = false;
            break;
        case 32:
            keyboard.space = false;
            break;
        case 70:
            keyboard.fire = false;
            break;
    }
})

window.addEventListener('keydown', function (e) {
    if (e.keyCode == 32 && e.target == document.body || e.keyCode == 27 && e.target == document.body || e.keyCode == 40 && e.target == document.body || e.keyCode == 38 && e.target == document.body || e.keyCode == 37 && e.target == document.body || e.keyCode == 39 && e.target == document.body) {
        e.preventDefault();
    }
});

function fullscreen() {
    let canvas = document.getElementById('canvas');
    if (canvas.requestFullscreen) {
        canvas.requestFullscreen();
    } else if (canvas.mozRequestFullScreen) {
        canvas.mozRequestFullScreen();
    } else if (canvas.webkitRequestFullScreen) {
        canvas.webkitRequestFullScreen();
    } else if (canvas.msRequestFullscreen) {
        canvas.msRequestFullscreen();
    }
    resizeCanvas();
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
    resizeCanvas();
}

function resizeCanvas() {
    if (world.screenBtn.id == 'fullscreen') {
        maximizeCanvas();
    }
    if (world.screenBtn.id === 'smallscreen') {
        minimizeCanvas();
    }
}

function maximizeCanvas() {
    canvas.width = resizeWidth;
    canvas.height = resizeHeight;
    let scaleX = canvas.width / originalWidth;
    let scaleY = canvas.height / originalHeight;
    canvas.classList.add('fullCanvas');
    scale = Math.min(scaleX, scaleY);
    world.ctx.setTransform(scale, 0, 0, scale, 0, 0);
    world.ctx.font = fontStyle;
}

function minimizeCanvas() {
    canvas.width = originalWidth;
    canvas.height = originalHeight;
    canvas.classList.remove('fullCanvas');
    scale = 1;
    world.ctx.setTransform(scale, 0, 0, scale, 0, 0);
    world.ctx.font = fontStyle;
}

function startGame() {
        world = new World(canvas, keyboard);
        document.getElementById('start-screen').classList.add('d-none');
}

function restartGame() {
        world = new World(canvas, keyboard);
        document.getElementById('lost-screen').classList.add('d-none');
        document.getElementById('won-screen').classList.add('d-none');
}

function stopGame() {
    stopMusic();
    world.clearAllIntervals();
    if (world.gameLost) {
        document.getElementById('lost-screen').classList.remove('d-none');
    } else if (world.gameWon) {
        document.getElementById('won-screen').classList.remove('d-none');
    }
}

function stopMusic() {
    world.music.sounds.forEach(sound => {
        sound.file.pause();
        sound.currentTime = 0;
    });
}

function generateHTML(string) {
    if (string === 'controls') {
        generateControlHTML();
    }
    if (string === 'instructions') {
        generateInstructionHTML();
    }
}

function generateControlHTML() {
    title.innerText = `Controls`;
    description.innerText = `
        “To turn the fate of the Cursed Kingdom, you must first master the art of control.
        Only those who wield the controller with skill will pass the tests and emerge as a true hero.”`;
    explanation.innerHTML = `
    <div class="controls">
        <div class="el-left">
            <p>W / &uarr; ~ Move Up</p>
            <p>A / &larr; ~ Move Left</p>
            <p>S / &darr; ~ Move Down</p>
            <p>D / &rarr; ~ Move Right</p>
        </div>
        <div class="el-right">
            <p>F ~ Shoot Arrow</p>
            <p>Space ~ Jump</p>
        </div>
    </div>
        `;
}

function generateInstructionHTML() {
    title.innerText = `Instructions`;
    description.innerText = `
        “The Cursed Kingdom is a dangerous place. Only those who are prepared will survive.
        Read the instructions carefully and you will have a chance to save the kingdom.”`;
    explanation.innerHTML = `
        <p>1. Collect coins to increase your score.</p>
        <p>2. Avoid the enemies and their attacks.</p>
        <p>3. Collect apples to regain Energy.</p>
        <p>4. Defeat the endboss to save the kingdom.</p>
        <p>5. Use the arrows or jumping to defeat the enemies.</p>
        <p>6. ATTENTION: Be careful with the Arrows... sometimes you need more than one to kill an enemy.</p>
        `;
}

document.addEventListener('DOMContentLoaded', init);
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
let isMobile = false;

function init() {
    canvas = document.getElementById('canvas');
    title = document.getElementById('title');
    description = document.getElementById('description');
    explanation = document.getElementById('explanation');
}

// Refactored key press handling to properly update the keyboard object
window.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
        case 37: // Left arrow
        case 65: // 'A'
            keyboard.left = true;
            break;
        case 39: // Right arrow
        case 68: // 'D'
            keyboard.right = true;
            break;
        case 38: // Up arrow
        case 87: // 'W'
            keyboard.up = true;
            break;
        case 40: // Down arrow
        case 83: // 'S'
            keyboard.down = true;
            break;
        case 32: // Space
            keyboard.space = true;
            break;
        case 70: // 'F'
            keyboard.fire = true;
            break;
    }
});

window.addEventListener('keyup', (event) => {
    switch (event.keyCode) {
        case 37: // Left arrow
        case 65: // 'A'
            keyboard.left = false;
            break;
        case 39: // Right arrow
        case 68: // 'D'
            keyboard.right = false;
            break;
        case 38: // Up arrow
        case 87: // 'W'
            keyboard.up = false;
            break;
        case 40: // Down arrow
        case 83: // 'S'
            keyboard.down = false;
            break;
        case 32: // Space
            keyboard.space = false;
            break;
        case 70: // 'F'
            keyboard.fire = false;
            break;
    }
});

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
        document.getElementById('game-screen').classList.remove('d-none');
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

function initTouchControls() {
    const btnLeft = document.getElementById('btn-left');
    const btnRight = document.getElementById('btn-right');
    const btnUp = document.getElementById('btn-up');
    const btnDown = document.getElementById('btn-down');
    const btnJump = document.getElementById('btn-jump');
    const btnFire = document.getElementById('btn-fire');
    const btnStart = document.getElementById('btn-start');
    const btnRestart = document.getElementById('btn-restart-1');
    const btnRestart2 = document.getElementById('btn-restart-2');

    // Improved touch handling to ensure better responsiveness
    const handleTouch = (el, onStart, onEnd) => {
        if (!el) return;
        el.addEventListener('touchstart', (e) => {
            e.preventDefault();
            onStart();
        }, { passive: false });
        el.addEventListener('touchend', (e) => {
            e.preventDefault();
            onEnd();
        }, { passive: false });
        el.addEventListener('click', (e) => {
            e.preventDefault();
            onStart();
            setTimeout(onEnd, 100); // Simulate touchend for click
        });
    };

    // Apply improved touch handling to all buttons
    handleTouch(btnLeft, () => keyboard.left = true, () => keyboard.left = false);
    handleTouch(btnRight, () => keyboard.right = true, () => keyboard.right = false);
    handleTouch(btnUp, () => keyboard.up = true, () => keyboard.up = false);
    handleTouch(btnDown, () => keyboard.down = true, () => keyboard.down = false);
    handleTouch(btnJump, () => keyboard.space = true, () => keyboard.space = false);
    handleTouch(btnFire, () => keyboard.fire = true, () => keyboard.fire = false);

    // Ensure touch buttons are not highlighted or selected
    const preventHighlight = (el) => {
        if (!el) return;
        el.addEventListener('touchstart', (e) => {
            e.preventDefault();
        }, { passive: false });
    };

    // Apply to all touch buttons
    preventHighlight(btnLeft);
    preventHighlight(btnRight);
    preventHighlight(btnUp);
    preventHighlight(btnDown);
    preventHighlight(btnJump);
    preventHighlight(btnFire);
    preventHighlight(btnStart);
    preventHighlight(btnRestart);
    preventHighlight(btnRestart2);

    const addTouchAndClick = (el, fn) => {
        if (!el) return;
        el.addEventListener('click', fn);
        el.addEventListener('touchstart', (e) => {
            console.log('Touchstart funktioniert!');
            e.preventDefault();
            fn();
        }, { passive: false });
    };

    addTouchAndClick(btnStart, startGame);
    addTouchAndClick(btnRestart, restartGame);
    addTouchAndClick(btnRestart2, restartGame);
}

function getScreenSize() {
    screenWidth = screen.width;
    screenOrientation = screen.orientation;

    if (screenWidth < 1194 && screenOrientation.type === 'landscape-primary') {
        isMobile = true;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    init();
    initTouchControls();
    getScreenSize();
});
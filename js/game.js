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

/**
 * Initializes the game by getting DOM elements
 */
function init() {
    canvas = document.getElementById('canvas');
    title = document.getElementById('title');
    description = document.getElementById('description');
    explanation = document.getElementById('explanation');
    detectDeviceType()
}

window.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
        case 37:
        case 65:
            keyboard.left = true;
            break;
        case 39:
        case 68:
            keyboard.right = true;
            break;
        case 38:
        case 87:
            keyboard.up = true;
            break;
        case 40:
        case 83:
            keyboard.down = true;
            break;
        case 32:
            keyboard.space = true;
            break;
        case 70:
            keyboard.fire = true;
            break;
    }
});

window.addEventListener('keyup', (event) => {
    switch (event.keyCode) {
        case 37:
        case 65:
            keyboard.left = false;
            break;
        case 39:
        case 68:
            keyboard.right = false;
            break;
        case 38:
        case 87:
            keyboard.up = false;
            break;
        case 40:
        case 83:
            keyboard.down = false;
            break;
        case 32:
            keyboard.space = false;
            break;
        case 70:
            keyboard.fire = false;
            break;
    }
});

window.addEventListener('keydown', function (e) {
    if (e.keyCode == 32 && e.target == document.body || e.keyCode == 27 && e.target == document.body || e.keyCode == 40 && e.target == document.body || e.keyCode == 38 && e.target == document.body || e.keyCode == 37 && e.target == document.body || e.keyCode == 39 && e.target == document.body) {
        e.preventDefault();
    }
});

/**
 * Requests fullscreen mode for the canvas element
 */
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

/**
 * Exits fullscreen mode
 */
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

/**
 * Resizes the canvas based on screen mode
 */
function resizeCanvas() {
    if (world.screenBtn.id == 'fullscreen') {
        maximizeCanvas();
    }
    if (world.screenBtn.id === 'smallscreen') {
        minimizeCanvas();
    }
}

/**
 * Maximizes the canvas to full screen dimensions
 */
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

/**
 * Minimizes the canvas to original dimensions
 */
function minimizeCanvas() {
    canvas.width = originalWidth;
    canvas.height = originalHeight;
    canvas.classList.remove('fullCanvas');
    scale = 1;
    world.ctx.setTransform(scale, 0, 0, scale, 0, 0);
    world.ctx.font = fontStyle;
}

/**
 * Starts a new game session
 */
function startGame() {
        world = new World(canvas, keyboard);
        document.getElementById('start-screen').classList.add('d-none');
        document.getElementById('game-screen').classList.remove('d-none');
        document.getElementById('touch-controls').classList.remove('d-none');
}

/**
 * Restarts the game after winning or losing
 */
function restartGame() {
        world = new World(canvas, keyboard);
        document.getElementById('lost-screen').classList.add('d-none');
        document.getElementById('won-screen').classList.add('d-none');
        document.getElementById('touch-controls').classList.remove('d-none');
}

/**
 * Stops the current game session
 */
function stopGame() {
    stopMusic();
    world.clearAllIntervals();
    if (world.gameLost) {
        document.getElementById('lost-screen').classList.remove('d-none');
    } else if (world.gameWon) {
        setTimeout(() => {
            document.getElementById('won-screen').classList.remove('d-none');
        }, 1000);
    }
    document.getElementById('touch-controls').classList.add('d-none');
}

/**
 * Returns to the start screen
 */
function backToStart() {
    document.getElementById('lost-screen').classList.add('d-none');
    document.getElementById('won-screen').classList.add('d-none');
    document.getElementById('start-screen').classList.remove('d-none');
}

/**
 * Stops all game music
 */
function stopMusic() {
    world.music.sounds.forEach(sound => {
        sound.file.pause();
        sound.currentTime = 0;
    });
}

/**
 * Generates HTML content based on the provided string
 * @param {string} string - Type of content to generate ('controls' or 'instructions')
 */
function generateHTML(string) {
    if (string === 'controls') {
        generateControlHTML();
    }
    if (string === 'instructions') {
        generateInstructionHTML();
    }
}

/**
 * Generates the control instructions HTML
 */
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

/**
 * Generates the game instructions HTML
 */
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

/**
 * Sets up touch and click event handlers for a given element
 * @param {HTMLElement} el - The DOM element to attach events to
 * @param {Function} onStart - The callback function for touch/click start
 * @param {Function} onEnd - The callback function for touch/click end
 */
function setupTouchHandler(el, onStart, onEnd) {
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
        setTimeout(onEnd, 100);
    });
}

/**
 * Sets up all control buttons for movement and actions
 */
function setupControlButtons() {
    const buttons = {
        left: { el: document.getElementById('btn-left'), action: () => keyboard.left = true, reset: () => keyboard.left = false },
        right: { el: document.getElementById('btn-right'), action: () => keyboard.right = true, reset: () => keyboard.right = false },
        up: { el: document.getElementById('btn-up'), action: () => keyboard.up = true, reset: () => keyboard.up = false },
        down: { el: document.getElementById('btn-down'), action: () => keyboard.down = true, reset: () => keyboard.down = false },
        jump: { el: document.getElementById('btn-jump'), action: () => keyboard.space = true, reset: () => keyboard.space = false },
        fire: { el: document.getElementById('btn-fire'), action: () => keyboard.fire = true, reset: () => keyboard.fire = false }
    };

    Object.values(buttons).forEach(btn => {
        setupTouchHandler(btn.el, btn.action, btn.reset);
        preventHighlight(btn.el);
    });
}

/**
 * Sets up game control buttons (start/restart)
 */
function setupGameButtons() {
    const gameButtons = [
        { el: document.getElementById('btn-start'), action: startGame },
        { el: document.getElementById('btn-restart-1'), action: restartGame },
        { el: document.getElementById('btn-restart-2'), action: restartGame },
        { el: document.getElementById('btn-home-1'), action: backToStart },
        { el: document.getElementById('btn-home-2'), action: backToStart }
    ];

    gameButtons.forEach(btn => {
        if (btn.el) {
            btn.el.addEventListener('click', btn.action);
            btn.el.addEventListener('touchstart', (e) => {
                e.preventDefault();
                btn.action();
            }, { passive: false });
            preventHighlight(btn.el);
        }
    });
}

/**
 * Prevents highlight effect on touch for mobile devices
 * @param {HTMLElement} el - The DOM element to prevent highlighting on
 */
function preventHighlight(el) {
    if (!el) return;
    el.addEventListener('touchstart', (e) => {
        e.preventDefault();
    }, { passive: false });
}

/**
 * Initializes all touch controls for the game
 */
function initTouchControls() {
    setupControlButtons();
    setupGameButtons();
}

document.addEventListener('DOMContentLoaded', () => {
    init();
    initTouchControls();
});
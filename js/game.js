let canvas;
let world;
let keyboard = new Keyboard();
let sprites;

function init() {
    canvas = document.getElementById('canvas');
   //world = new World(canvas, keyboard);
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

window.addEventListener('keydown', function(e) {
    if(e.keyCode == 32 && e.target == document.body || e.keyCode == 27 && e.target == document.body || e.keyCode == 40 && e.target == document.body || e.keyCode == 38 && e.target == document.body || e.keyCode == 37 && e.target == document.body || e.keyCode == 39 && e.target == document.body) {
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
}

function startGame() {
    world = new World(canvas, keyboard);
    document.getElementById('start-screen').classList.add('d-none');
}
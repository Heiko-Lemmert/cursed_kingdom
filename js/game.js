let canvas;
let world;
let keyboard = new Keyboard();
let sprites;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

    // console.log('My Character is', world.character)
    // console.log('The First Coin is:', world.level.coins[0])f
}

window.addEventListener('keydown', event => {
    switch (event.keyCode) {
        case 87:  
            // console.log('Up is pressend')
            keyboard.up = true;
            break;
        case 83:
            // console.log('Down is pressend')
            keyboard.down = true;
            break;
        case 68:
            // console.log('Right is pressend')
            keyboard.right = true;
            break;
        case 65:
            // console.log('Left is pressend')
            keyboard.left = true;
            break;
        case 32:
            // console.log('Space is pressend')
            keyboard.space = true;
            break;
        case 70:
            // console.log('Space is pressend')
            keyboard.fire = true;
            break;
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.keyCode) {
        case 87:
            // console.log('Up is lossing')
            keyboard.up = false;
            break;
        case 83:
            // console.log('Down is lossing')
            keyboard.down = false;
            break;
        case 68:
            // console.log('Right is lossing')
            keyboard.right = false;
            break;
        case 65:
            // console.log('Left is lossing')
            keyboard.left = false;
            break;
        case 32:
            // console.log('Space is lossing')
            keyboard.space = false;
            break;
        case 70:
            keyboard.fire = false;
            break;
    }
})

window.addEventListener('keydown', function(e) {
    if(e.keyCode == 32 && e.target == document.body || e.keyCode == 27 && e.target == document.body) {
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

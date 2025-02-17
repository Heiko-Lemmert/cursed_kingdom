class Music {
    sounds = [
        {name: 'backgroundMusic', file: ''},
        {name: 'characterWalking', file: new Audio('asset/audio/walking3.mp3')},
        {name: 'characterJumping', file: new Audio('asset/audio/jump.mp3')},
        {name: 'characterShooting', file: new Audio('asset/audio/arrow.mp3')},
        {name: 'collectedCoin', file: new Audio('/asset/audio/collectedCoin.mp3')}   
    ];


    constructor(soundfile) {
        this.setBackgroundMusic(soundfile);
        this.loadMuteStatus();
    }

    setBackgroundMusic(soundfile) {
        this.sounds.forEach(sound => {
            if (sound.name === 'backgroundMusic') {
                sound.file = soundfile
            }
        })
    }

    muteVolume() {
        this.sounds.forEach(sound => {
            sound.file.volume = 0;
        })
        localStorage.setItem('mute', 'true');
    }

    setVolume() {
        this.sounds.forEach(sound => {
            if(sound.name === 'backgroundMusic') {
                sound.file.volume = 0.05;
            } else {
                sound.file.volume = 1;
            }         
        })
        localStorage.setItem('mute', 'false');
    }

    findAudioSrc(audioName) {
        return this.sounds.find(sound => sound.name === audioName).file
    }

    loadMuteStatus() {
        const isMuted = localStorage.getItem('mute') === 'true';
        if (isMuted) {
            this.muteVolume();
        } else {
            this.setVolume();
        }
    }
}
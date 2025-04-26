class Music {
    sounds = [
        {name: 'backgroundMusic', file: ''},
        {name: 'characterWalking', file: new Audio('asset/audio/walking3.mp3')},
        {name: 'characterJumping', file: new Audio('asset/audio/jump.mp3')},
        {name: 'characterShooting', file: new Audio('asset/audio/arrow.mp3')},
        {name: 'characterHit', file: new Audio('asset/audio/hit.mp3')},
        {name: 'collectedCoin', file: new Audio('asset/audio/collectedCoin.mp3')},
        {name: 'lichHit', file: new Audio('asset/audio/monsterHit.mp3')},
        {name: 'skeletonHit', file: new Audio('asset/audio/monsterHit2.mp3')},
        {name: 'ghoulHit', file: new Audio('asset/audio/monsterHit3.mp3')},
        {name: 'enemyGrowl', file: new Audio('asset/audio/monsterGrowl.mp3')},  
        {name: 'endbossHit', file: new Audio('asset/audio/bossHit.mp3')},
        {name: 'endbossWisper', file: new Audio('asset/audio/bossWisper.mp3')},  
        {name: 'endbossGrowl', file: new Audio('asset/audio/bossGrowl.mp3')},  
    ];


    constructor(soundfile = null) {
        if (soundfile) {
            this.setBackgroundMusic(soundfile);
        }
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
            if (sound.file && typeof sound.file.volume === 'number') {
                sound.file.volume = 0;
            }
        })
        localStorage.setItem('mute', 'true');
    }

    setVolume() {
        this.sounds.forEach(sound => {
            if (sound.file && typeof sound.file.volume === 'number') {
                if (sound.name === 'backgroundMusic') {
                    sound.file.volume = 0.2;
                } else {
                    sound.file.volume = 1;
                }
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
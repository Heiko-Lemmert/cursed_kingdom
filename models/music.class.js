/**
 * Manages all game audio and sound effects
 * Handles volume control and mute state persistence
 */
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

    /**
     * Creates a new Music instance
     * @param {Audio} soundfile - Optional background music file
     */
    constructor(soundfile = null) {
        if (soundfile) {
            this.setBackgroundMusic(soundfile);
        }
        this.loadMuteStatus();
    }

    /**
     * Sets the background music track
     * @param {Audio} soundfile - The audio file to use as background music
     */
    setBackgroundMusic(soundfile) {
        this.sounds.forEach(sound => {
            if (sound.name === 'backgroundMusic') {
                sound.file = soundfile
            }
        })
    }

    /**
     * Mutes all game sounds and saves state to localStorage
     */
    muteVolume() {
        this.sounds.forEach(sound => {
            if (sound.file && typeof sound.file.volume === 'number') {
                sound.file.volume = 0;
            }
        })
        localStorage.setItem('mute', 'true');
    }

    /**
     * Unmutes all game sounds and sets appropriate volume levels
     * Background music plays at 20% volume, other sounds at 100%
     */
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

    /**
     * Finds and returns an audio source by name
     * @param {string} audioName - Name of the audio source to find
     * @returns {Audio} The audio file matching the given name
     */
    findAudioSrc(audioName) {
        return this.sounds.find(sound => sound.name === audioName).file
    }

    /**
     * Loads and applies the saved mute state from localStorage
     */
    loadMuteStatus() {
        const isMuted = localStorage.getItem('mute') === 'true';
        if (isMuted) {
            this.muteVolume();
        } else {
            this.setVolume();
        }
    }
}
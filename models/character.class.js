class Character extends MovableObject {
    IMAGES_IDLE = [
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_000.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_001.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_002.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_003.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_004.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_005.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_006.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_007.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_008.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_009.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_010.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_011.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_012.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_013.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_014.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_015.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_016.png',
        'asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_017.png'
    ]
    currentImages = 0;

    constructor() {
        super().loadImage('asset/img/1_Main_character/Archer/PNG Sequences/Idle Blinking/0_Archer_Idle Blinking_000.png');
        this.loadImages(this.IMAGES_IDLE);

        this.animate()
    }

    animate() {
        setInterval(() => {
            let i = this.currentImages % this.IMAGES_IDLE.length;
            let path = this.IMAGES_IDLE[i];
            this.img = this.imageCache[path];
            this.currentImages++
        }, 150)
    }

    jump() {

    }
}
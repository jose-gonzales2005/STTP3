class Toad extends Phaser.Scene {
    constructor() {
        super("loadScene")
    }

    preload() {
        this.load.path = "./assets/"
        this.load.image("backG", "imgs/images.jpeg")
        this.load.image("torkey", "imgs/turkey.png")
        this.load.image("ponch", "imgs/fist.png")
        this.load.image("bigPonch", "imgs/beegArm.png")
        this.load.image("gun", "imgs/gunSprite.png")
        this.load.image('feadder', 'imgs/turkeyFeather.png')
        this.load.image('background', "imgs/background.png")
        this.load.image('title', "imgs/titleCard.png")
        this.load.audio('punch1', "audio/punch1.mp3")
        this.load.audio('punch2', "audio/punch2.mp3")
        this.load.audio('punch3', "audio/punch3.mp3")
        this.load.audio('torkeyNoise', "audio/turkeyGobble.mp3")
        this.load.audio('squawk', "audio/SQUAWK.mp3")
        this.load.bitmapFont('newFont', 'font/texttext.png', 'font/texttext.xml')

    }

    update() {
        console.log('moving from toad')
        this.scene.start("menuScene")
        //this.scene.launch("shopScene")
        
    }
}
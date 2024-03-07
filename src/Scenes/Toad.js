class Toad extends Phaser.Scene {
    constructor() {
        super("loadScene")
    }

    preload() {
        this.load.path = "./assets/"
        this.load.image("backG", "imgs/images.jpeg")
        this.load.image("torkey", "imgs/turkey.png")
        this.load.image("ponch", "imgs/fist.png")

    }

    update() {
        console.log('moving from toad')
        this.scene.start("menuScene")
    }
}
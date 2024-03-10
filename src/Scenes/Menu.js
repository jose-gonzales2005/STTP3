class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }

    create() {
        //this.KEYS = this.scene.get('sceneKeys').KEYS
        //this.add.bitmapText(0, 0, 'BurgerBoss\n\nMain Menu\n\nArrows move, F jumps\n\nF to play\n\n', 5)
        //this.add.image(0, 0, 100, 'backG')

        let title02 = this.add.text(centerX, centerY + 100, 'Space to Play, Arrow Keys to Fly, Make it All the Way', 64).setOrigin(0.5).setTint(0xff00ff)
    }

    update() {


        /*const { KEYS } = this

        if (KEYS.JUMP.isDown) {
            this.scene.start('scenePlay')
        }*/
        this.scene.start("playScene")
        this.scene.launch("shopScene")
        console.log("moving from Menu")
        
    }
}
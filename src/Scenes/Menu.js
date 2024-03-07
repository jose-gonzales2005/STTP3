class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }

    create() {
        
        //this.add.image(0, 0, 100, 'backG')
    }

    update() {
        console.log("moving from Menu")
        this.scene.start("playScene")
    }
}
class Instruct extends Phaser.Scene {
    constructor() {
        super("instructScene")
    }

    create() {
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        let title02 = this.add.text(centerX, centerY - 200, "Turkey Feathers have become the new currency of the land! \n Beat the crap out of Turkeys to become richer than your wildest dreams (100 feathers) as fast as possible!!!!", 64).setOrigin(0.5).setTint(0xff00ff)
        let title03 = this.add.text(centerX - 125, centerY - 100, "Click the turkey to generate feather cash, use M to open the store and buy upgrades!", 64).setOrigin(0.5).setTint(0xff00ff)
        let title04 = this.add.text(centerX - 190, centerY, "Credit to: Nathan Altice for particle emitter code and also teaching me \n Jack Morehart for helping with HTML DOM shop setup", 64).setOrigin(0.5).setTint(0xff00ff)
        let title05 = this.add.text(centerX, centerY + 100, "PRESS SPACE TO START", 64).setOrigin(0.5).setTint(0xff00ff)
        
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start("playScene")
            this.scene.launch("shopScene")
            console.log("moving from Menu")
        }

    }


}
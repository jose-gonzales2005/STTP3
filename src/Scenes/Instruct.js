class Instruct extends Phaser.Scene {
    constructor() {
        super("instructScene")
    }

    create() {
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

        this.instructionText = this.add.bitmapText(centerX, centerY - 100, 'newFont', 'Turkey Feathers have become the new currency of the land! \n\n Beat the crap out of Turkeys to become richer than your wildest dreams \n(200 feathers) as fast as possible!! \n\n Click the turkey to generate feather cash, use M to open \nthe store and buy upgrades!\n\n Credit to: Nathan Altice for particle emitter code and also teaching me \n\n                   Jack Morehart for helping with HTML DOM shop setup\n\n\n\n PRESS SPACE TO START', 30).setOrigin(0.5).setTint(0xff00ff)

    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start("playScene")
            this.scene.launch("shopScene")
            console.log("moving from Menu")
        }

    }


}
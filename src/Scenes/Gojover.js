class Gojover extends Phaser.Scene {
    constructor() {
        super("gojoverScene")
    }

    create() {
        let playScene = this.scene.get('playScene')
        let title01 = this.add.text(centerX, centerY, `You Win!! Congrats!\n Time: ${Math.round(playScene.totalTime / 100)}`, 64).setOrigin(0.5).setTint(0xff00ff)
        let title02 = this.add.text(centerX, centerY + 150, 'PRESS R TO TRY AGAIN').setOrigin(0.5).setTint(0xff00ff)

        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)


    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start("playScene")
            this.scene.launch("shopScene")
        }
    }


}
class Gojover extends Phaser.Scene {
    constructor() {
        super("gojoverScene")
    }

    create() {
        let playScene = this.scene.get('playScene')
        let title01 = this.add.text(centerX, centerY + 100, `You Win!! Congrats!\n Time: ${Math.round(playScene.totalTime / 100)}`, 64).setOrigin(0.5).setTint(0xff00ff)
    }


}
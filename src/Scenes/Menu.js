class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }

    create() {
        //this.KEYS = this.scene.get('sceneKeys').KEYS
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        let title01 = this.add.sprite(centerX, centerY, 'title')
        let title02 = this.add.text(centerX - 50, centerY + 100, "Press Space To View Instructions", 64).setOrigin(0.5).setTint(0xff00ff)
        
        let titleTween = this.tweens.add({
            targets: title01,
            alpha: { from: 0, to: 1 },
            scale: { from: 0.1, to: 1 },
            angle: { from: 0, to: 360 },
            ease: 'Sine.easeInOut',
            duration: 2000,
            repeat: 0,
            yoyo: false,
            hold: 5000,
        })

        let instrucTween = this.tweens.add({
            targets: title02,
            alpha: { from: 0, to: 1 },
            scale: { from: 0.01, to: 1 },
            angle: { from: 0, to: 720},
            duration: 2000,
            hold: 5000

        })

       


    }


    update() {


        /*const { KEYS } = this

        if (KEYS.JUMP.isDown) {
            this.scene.start('scenePlay')
        }*/
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            //his.scene.start("playScene")
            //this.scene.launch("shopScene")
            this.scene.start("instructScene")
            console.log("moving from Menu")
        }
      
        
    }
}
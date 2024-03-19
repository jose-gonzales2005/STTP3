class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }

    create() {
        //this.KEYS = this.scene.get('sceneKeys').KEYS
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        let title02 = this.add.text(centerX, centerY, 'TURKERY TIME WOOOO (PRESS SPACE TO GET STARTED IG) \n Punch(click) The Turkey and Collect 75 Feathers ASAP \n Buy upgrades using M to open the Shop ', 64).setOrigin(0.5).setTint(0xff00ff)
    }

    update() {


        /*const { KEYS } = this

        if (KEYS.JUMP.isDown) {
            this.scene.start('scenePlay')
        }*/
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start("playScene")
            this.scene.launch("shopScene")
            console.log("moving from Menu")
        }
      
        
    }
}
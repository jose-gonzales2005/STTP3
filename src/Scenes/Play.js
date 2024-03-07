class Play extends Phaser.Scene {
    constructor() {
        super("playScene")

    }

    create() {
        this.torkey = new Torkey(this, centerX, centerY, 'torkey').setInteractive()
        this.fist = new Fisticuff(this, centerX, centerY, 'ponch')
        this.torkeyFeathers = 0 

        this.scoreDisplay = this.add.text(100, 50, 'Torkey Feadders: ', {fontSize: '14px', color: '#FFFFFF'}).setOrigin(0.5).setTint(0xff00ff)
        

        //timer setup
        //timer = game.time.create(false)
        let totalTime = 0
        this.timeScore = this.add.text(w - 100, 50, 'TIME: ', {fontSize: '30px', color: '#FFFFFF'}).setOrigin(0.5).setTint(0xff00ff)
        //this.timer.start()
        
        //change score display and time spawn cords to work on diff screen types


        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)
        
        this.torkey.on('pointerdown', (pointer) => {
            this.torkeyFeathers += 1 
            this.scoreDisplay.setText(`Torkey Feadders: ${this.torkeyFeathers} `)
            
        })

        let scene = this 

        /*this.input.keyboard.on('keydown-M', function (e) {
            scene.start('shopScene')
        })*/

        //ADD TWEEN FOR SCORE BEING ADDED, talk to nate or jimmy if need
        //Particle Emitter (phaser.game.particles) for punching turkey 
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyM)) {
            this.scene.start('shopScene')

            
        }

        totalTime += 1
        this.timeScore.setText(`Time: ${totalTime} `)

    }


}


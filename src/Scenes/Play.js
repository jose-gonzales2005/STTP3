class Play extends Phaser.Scene {
    constructor() {
        super("playScene")

    }

    preload() {
        this.load.html("shop", "./src/Scenes/shop.html")
    }

    create() {
        this.torkey = new Torkey(this, centerX, centerY, 'torkey').setInteractive()
        this.fist = new Fisticuff(this, centerX, centerY, 'ponch')
        this.torkeyFeathers = 0
        this.torkeyFeatherIncrement = 1

        this.scoreDisplay = this.add.text(centerX - 400, 50, 'Torkey Feadders: ', {fontSize: '30px', color: '#FFFFFF'}).setOrigin(0.5).setTint(0xff00ff)
        

        //timer setup
        //timer = game.time.create(false)
        this.totalTime = 0
        this.timeScore = this.add.text(w - 100, 50, 'TIME: ', {fontSize: '30px', color: '#FFFFFF'}).setOrigin(0.5).setTint(0xff00ff)
        //this.timer.start()
        
        //change score display and time spawn cords to work on diff screen types


        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)
        
        this.torkey.on('pointerdown', (pointer) => {
            this.torkeyFeathers += this.torkeyFeatherIncrement 
            this.scoreDisplay.setText(`Torkey Feadders: ${this.torkeyFeathers} `)
            
        })
     

        //ADD TWEEN FOR SCORE BEING ADDED, talk to nate or jimmy if need
        //Particle Emitter (phaser.game.particles) for punching turkey 
    }

    update() {
        
        //itemClicked(back2Menu)

        this.totalTime += 1
        this.timeScore.setText(`Time: ${Math.round(this.totalTime / 100)} `)

        

    }


    bigHandPurchased() {
        this.torkeyFeatherIncrement += 2
        //this.fist.destroy(false, true)
        this.fist = new Fisticuff(this, centerX, centerY, 'bigPonch')
        console.log("bigHandPurchased")
    }

    powerFistPurchased() {
        
    }

    
    
    

 
}



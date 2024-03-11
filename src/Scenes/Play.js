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

        this.ppBool = false         

        //timer setup
        //timer = game.time.create(false)
        this.totalTime = 0
        this.timeScore = this.add.text(w - 100, 50, 'TIME: ', {fontSize: '30px', color: '#FFFFFF'}).setOrigin(0.5).setTint(0xff00ff)
        //this.timer.start()
        
        //change score display and time spawn cords to work on diff screen types


        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)
        
        this.torkey.on('pointerdown', (pointer) => {
            this.torkeyFeathers += this.torkeyFeatherIncrement 
            
            if (this.powerFistUsed()) {
                console.log("powerfist is true")
                this.torkeyFeathers += this.torkeyFeatherIncrement + 10
            }
            this.scoreDisplay.setText(`Torkey Feadders: ${this.torkeyFeathers} `)
        })
     

        //ADD TWEEN FOR SCORE BEING ADDED, talk to nate or jimmy if need
        //Particle Emitter (phaser.game.particles) for punching turkey 
    }

    update() {
        
        //itemClicked(back2Menu)
        this.totalTime += 1
        this.timeScore.setText(`Time: ${Math.round(this.totalTime / 100)} `)

        if (this.torkeyFeathers >= 75) {
            this.scene.start("gojoverScene")
            this.finalTime = this.totalTime
            console.log("going to end")
        }       

    }


    bigHandPurchased() {
        this.torkeyFeatherIncrement += 2
        this.fist.destroy()
        this.fist = new Fisticuff(this, centerX, centerY, 'bigPonch')
        this.torkeyFeathers -= 10
        this.scoreDisplay.setText(`Torkey Feadders: ${this.torkeyFeathers} `)

    }

    powerFistPurchased() {
        console.log("purchased")
        this.ppBool = true
        this.ppTime = Date.now()        
    }

    powerFistUsed() {
        if (Date.now() - this.ppTime >= 5000 && this.ppBool) {
            console.log(Date.now() - this.ppTime)
            this.ppTime = Date.now()
            return true
        } else {
            return false
        }
    }

    autoPuncherPurchased() {
        

    }

    gunPurchased() {
        this.torkeyFeatherIncrement += 6
        if (this.fist.active){ 
            this.fist.destroy()
        }
        this.gun = new Fisticuff(this, centerX, centerY, 'gun')
        this.torkeyFeathers -= 50
        this.scoreDisplay.setText(`Torkey Feadders: ${this.torkeyFeathers} `)
    }
    
    

 
}



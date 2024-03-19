class Play extends Phaser.Scene {
    constructor() {
        super("playScene")

    }

    preload() {
        //this.load.path = "./assets/"
        this.load.html("shop", "./src/Scenes/shop.html")
        //this.load.image('feadder', 'imgs/turkeyFeather.png')
    }

    create() {
        this.torkey = this.physics.add.sprite(centerX, centerY, 'torkey').setInteractive()
        this.torkey.body.setCollideWorldBounds(true)
        this.torkey.body.setBounce (1)
        this.torkey.body.setVelocityX(50)
        this.torkeyVelocityScale = 500

        

        let torkeyTimer = this.time.addEvent({
            delay: 1000,    
            callback: this.torkeyMovement,
            //args: [],
            callbackScope: this,
        })

        this.fist = new Fisticuff(this, centerX, centerY, 'ponch')

        this.input.on('pointermove', (pointer) => {
            this.fist.x = pointer.x
            this.fist.y = pointer.y
        })
    
        this.torkeyFeathers = 0
        this.torkeyFeatherIncrement = 1

        this.scoreDisplay = this.add.text(centerX - 400, 50, 'Torkey Feathers: ', { fontSize: '30px', color: '#FFFFFF' }).setOrigin(0.5).setTint(0xff00ff)

        this.ppBool = false

        this.totalTime = 0
        this.timeScore = this.add.text(w - 100, 50, 'TIME: ', { fontSize: '30px', color: '#FFFFFF' }).setOrigin(0.5).setTint(0xff00ff)

        this.deathZone = new Phaser.Geom.Circle(centerX - 400, 50, 50)
        this.movingEmitter = this.add.particles(0, 0, 'feadder', {
            speed: 50,
            scale: { start: 0.3, end: 1 },
            //alpha: { start: 1, end: 0 },
            // higher steps value = more time to go btwn min/max
            lifespan: { min: 7000, max: 10000, steps: 10000 },
            deathZone: {type: 'onEnter', source: this.deathZone},
        })

        this.movingEmitter.startFollow(this.torkey, 0, 0, false)

        // "The force applied is inversely proportional to the square of the distance from the particle to the point, in accordance with Newton's law of gravity."
        this.movingEmitter.createGravityWell({
            x: centerX - 400,
            y: 50,
            power: 40,       // strength of gravitational force (larger = stronger)
            epsilon: 100,   // min. distance for which gravitational force is calculated
            gravity: 30,    // gravitational force of this well (creates "whipping" effect) [also try negatives!]
        })
        this.movingEmitter.stop()


        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)

        this.torkey.on('pointerdown', (pointer) => {
            this.torkeyFeathers += this.torkeyFeatherIncrement
            this.movingEmitter.start()
            let featherTimer = this.time.addEvent({
                delay: 50,
                callback: this.stopFeadders,
                //args: [],
                callbackScope: this,
            })
            

            let randomNoise = Math.floor(Math.random() * 3)
            if (randomNoise == 0) {
                this.sound.play('punch1')
            } else if (randomNoise == 1) {
                this.sound.play('punch2')
            } else {
                this.sound.play("punch3")
            }

            if (Math.floor(Math.random() * 100) == 1) {
                this.sound.play('squawk')
            } else {
                this.sound.play("torkeyNoise")
            }


            if (this.powerFistUsed()) {
                //console.log("powerfist is true")
                this.torkeyFeathers += 10
            }
            this.scoreDisplay.setText(`Torkey Feadders: ${this.torkeyFeathers} `)
            this.torkey.torkeyHealth -= this.torkeyFeatherIncrement
            //console.log(this.torkey.torkeyHealth)

            this.movingEmitter.emitParticleAt(this.torkey.x, this.torkey.y)           

          
            
        })
        //ADD TWEEN FOR SCORE BEING ADDED, talk to nate or jimmy if need
    }

    torkeyMovement() {
        let torkeyTimer = this.time.addEvent({
            delay: Math.floor(Math.random() * 5000),  
            callback: this.torkeyMovement,
            //args: [],
            callbackScope: this,
        })
        this.torkey.body.setVelocityX((Math.random() - 0.5) * this.torkeyVelocityScale)
        this.torkey.body.setVelocityY((Math.random() - 0.5) * this.torkeyVelocityScale)
    }

    stopFeadders() {
        this.movingEmitter.stop()
    }

    update() {
        this.torkey.update()

        //itemClicked(back2Menu)
        this.totalTime += 1
        //console.log(this.totalTime)
        this.timeScore.setText(`Time: ${Math.round(this.totalTime / 100)} `)

        if (this.torkeyFeathers >= 75) {
            this.scene.start("gojoverScene")
            this.finalTime = this.totalTime
            console.log("going to end")
        }

    }

    scoreTween() {
        this.scoreDisplay.setText('Score: 0')
        if (this.scoreDisplay) {
            this.torkeyFeathers = 0
            var pointsTween = this.add.tween(this)
            pointsTween.to({ torkeyFeathers: this._scoreDisplay }, 1000, Phaser.Easing.Linear.None, true, 500)
            pointsTween.onUpdateCallback(function () {
                this.scoreDisplay.setText('Score: ' + Math.floor(this.torkeyFeathers))
            }, this)
            pointsTween.onComplete.addOnce(function () {
                this.scoreDisplay.setText('Score: ' + this._score)
            }, this)
            pointsTween.start()
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

    tranquilizerPurchased() {
        this.torkeyVelocityScale = 250
        this.torkeyFeatherIncrement -= 0.5
    }

    steroidsPurchased() {
        this.torkeyVelocityScale = 800
        this.torkeyFeatherIncrement += 2

    }

    gunPurchased() {
        if (this.torkeyFeatherIncrement == 3) {
            this.torkeyFeatherIncrement += 4
        } else {
            this.torkeyFeatherIncrement += 6
        }

        //if (this.fist.active) {
        this.fist.destroy()
        this.gun = new Fisticuff(this, centerX, centerY, 'gun')
        this.torkeyFeathers -= 50
        this.scoreDisplay.setText(`Torkey Feadders: ${this.torkeyFeathers} `)
        this.gun.setScale(0.5)
        this.input.on('pointermove', (pointer) => {
            this.gun.x = pointer.x
            this.gun.y = pointer.y
        })
    }




}



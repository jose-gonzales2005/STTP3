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
        this.torkey = new Torkey(this, centerX, centerY, 'torkey').setInteractive()
        this.fist = new Fisticuff(this, centerX, centerY, 'ponch')
        this.torkeyFeathers = 0
        this.torkeyFeatherIncrement = 1

        this.scoreDisplay = this.add.text(centerX - 400, 50, 'Torkey Feadders: ', { fontSize: '30px', color: '#FFFFFF' }).setOrigin(0.5).setTint(0xff00ff)

        this.ppBool = false

        let punchSounds = ["punch1", "punch2", "punch3"]

        this.totalTime = 0
        this.timeScore = this.add.text(w - 100, 50, 'TIME: ', { fontSize: '30px', color: '#FFFFFF' }).setOrigin(0.5).setTint(0xff00ff)
        //this.timer.start()

        //change score display and time spawn cords to work on diff screen types


        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)

        this.torkey.on('pointerdown', (pointer) => {
            this.torkeyFeathers += this.torkeyFeatherIncrement

            let randomNoise = Math.floor(Math.random() * punchSounds.length);
            //this.randomNoise.play()
            console.log(randomNoise)

            if (this.powerFistUsed()) {
                console.log("powerfist is true")
                this.torkeyFeathers += 10
            }
            this.scoreDisplay.setText(`Torkey Feadders: ${this.torkeyFeathers} `)
            this.torkey.torkeyHealth -= this.torkeyFeatherIncrement
            console.log(this.torkey.torkeyHealth)
        })

        // create an emitter
        this.movingEmitter = this.add.particles(0, 0, 'feadder', {
            speed: 50,
            scale: { start: 0.1, end: 1 },
            alpha: { start: 1, end: 0 },
            // higher steps value = more time to go btwn min/max
            lifespan: { min: 10, max: 7000, steps: 1000 }
        })

        // note: setting the emitter's initial position to 0, 0 seems critical to get .startFollow to work
        this.movingEmitter.startFollow(this.torkey, 0, 0, false)

        // create gravity well
        // "The force applied is inversely proportional to the square of the distance from the particle to the point, in accordance with Newton's law of gravity."
        this.movingEmitter.createGravityWell({
            x: centerX - 400,
            y: 50,
            power: 40,       // strength of gravitational force (larger = stronger)
            epsilon: 100,   // min. distance for which gravitational force is calculated
            gravity: 100    // gravitational force of this well (creates "whipping" effect) [also try negatives!]
        })

        //this.input.on('pointerdown', (pointer) => {
            //this.punch1.play()
       //})


        //ADD TWEEN FOR SCORE BEING ADDED, talk to nate or jimmy if need
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

    gunPurchased() {
        if (this.torkeyFeatherIncrement == 3) {
            this.torkeyFeatherIncrement += 4
        } else {
            this.torkeyFeatherIncrement += 6
        }

        if (this.fist.active) {
            this.fist.destroy()
        }
        this.gun = new Fisticuff(this, centerX, centerY, 'gun')
        this.torkeyFeathers -= 50
        this.scoreDisplay.setText(`Torkey Feadders: ${this.torkeyFeathers} `)
    }




}



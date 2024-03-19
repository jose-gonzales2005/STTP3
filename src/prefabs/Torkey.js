class Torkey extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture)

        scene.add.existing(this)
        this.torkeyHealth = 50 

        
        //this.body.setCollideWorldBounds(true)

    }

    create() {

    }

    update() {
        this.x -= 2
        //console.log(this.torkeyHealth)

        if(this.x <= 0 - this.width) {
            this.x = game.config.width
        }

        
    }
}
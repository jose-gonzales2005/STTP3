class Shop extends Phaser.Scene {
    constructor() {
        super("shopScene")
    }

    preload() {
        this.load.html("shop", "./src/Scenes/shop.html")
    }

    create() {
        let store = this.add.dom(600, 400).createFromCache("shop")
        let playScene = this.scene.get('playScene')
        store.addListener('click')
        store.on('click', function (e) {
            itemClicked(e.target, playScene)
        })

        keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)

        this.shopMoveChain = this.tweens.chain({
            targets: store,
            loop: 0,
            paused: false,
            tweens: [
                {
                    x: w - 10000,
                    //ease: "Bounce.easeOut",
                    duration: 1,
                    //angle: { from: 0, to: 90 },
                },
            ]
        })
        this.shopShowChain = this.tweens.chain({
            targets: store,
            loop: 0,
            paused: true,
            tweens: [
                {
                    x: centerX,
                    duration: 100,
                    ease: "Bounce.eastOut"
                },
            ]
        })

        
    }


    update() {
        if (Phaser.Input.Keyboard.JustDown(keyESC)) {
            console.log(this.shopMoveChain)
            this.shopMoveChain.restart()
        }

        if (Phaser.Input.Keyboard.JustDown(keyM)) {
            console.log('shop opening')
            this.shopShowChain.restart()

            
        }
        //xconsole.log(this.store.getElementById("shop"))
        
    }

}

function itemClicked(item, playScene) {
    /* Note for diff "disabled" classes, 
    one for purchased, and one for unavailable*/
    let itemId = item.id
    if (itemId == 'back2Menu') {
        //Shop.Scene.shopMoveChain.restart()
    }
    else if (itemId == 'itemBigHand' && playScene.torkeyFeathers >= 5) {
        console.log('bighand clicked')
        playScene.bigHandPurchased()
        item.className = "disabled"
    }
    else if (itemId == "itemPowerFist") {

    }
    else if (itemId == "itemAutoPuncher") {

    }
}




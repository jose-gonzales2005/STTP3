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
            if (!e.target.className.includes("disabled")) {
                itemClicked(e.target, playScene, this)
            }
            
        })

        keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)

        store.setX(2000)
        this.shopShowChain = this.tweens.chain({
            targets: store,
            loop: 0,
            paused: true,
            tweens: [
                {
                    x: centerX,
                    duration: 1000,
                    ease: "Bounce.eastOut"
                },
            ]
        })
        this.shopHideChain = this.tweens.chain({
            targets: store,
            loop: 0,
            paused: true,
            tweens: [
                {
                    x: 2000,
                    //ease: "Bounce.easeOut",
                    duration: 1000,
                },
            ]
        })

    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyESC)) {
            console.log('shop go bye bye')
            this.shopHideChain.restart()
            //this.scene.setVisible(true, "playScene")
        }

        if (Phaser.Input.Keyboard.JustDown(keyM)) {
            console.log('shop opening')
            this.shopShowChain.restart()
            //this.scene.setVisible(false, "playScene")


        }
        //xconsole.log(this.store.getElementById("shop"))

    }

}

function itemClicked(item, playScene, storeScene) {
    /* Note for diff "disabled" classes, 
    one for purchased, and one for unavailable*/
    let itemId = item.id
    if (itemId == 'itemBigHand' && playScene.torkeyFeathers >= 15) {
        console.log('bighand clicked')
        playScene.bigHandPurchased()
        item.className = "disabled"
    }
    else if (itemId == "itemPowerFist" && playScene.torkeyFeathers >= 20) {
        playScene.powerFistPurchased()
        item.className = "disabled"
    }
    else if (itemId == "itemAutoPuncher") {

    }
    else if (itemId == "itemTranquilizer" && playScene.torkeyFeathers >= 25) {
        console.log("tranq bpought")
        playScene.tranquilizerPurchased()
        item.className = "disabled"
    }
    else if (itemId == "itemSteroids" && playScene.torkeyFeathers >= 25) {
        console.log("roids bougth")
        playScene.steroidsPurchased()
        item.className = "disabled"
    }
    else if (itemId == "itemGun" && playScene.torkeyFeathers >= 50) {
        playScene.gunPurchased()
        item.className = "disabled"
    }
}




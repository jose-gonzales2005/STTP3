class Shop extends Phaser.Scene {
    constructor() {
        super("shopScene")
    }

    preload() {
        this.load.html("shop", "./src/Scenes/shop.html")
    }

    create() {
        let store = this.add.dom(600, 400).createFromCache("shop")
        store.addListener('click')
        store.on('click', function (e) {
            console.log(e)
            //let id = e.target.id

        })
    }

    update() {
        //xconsole.log(this.store.getElementById("shop"))
    }


}
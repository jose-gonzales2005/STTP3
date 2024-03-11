// Created by Noah Dane
// Super Turbo Turkey Puncher 3 Adaptation

'use strict'

let config = {
    type: Phaser.AUTO,
    parent: 'parent',
    backgroundColor: "#eeeeee",
    width: 1200,
    height: 750,
    render: {
        pixelArt: true
    },
    dom: {
        createContainer: true,
    },
    //zoom: 4,
    scene: [Toad, Menu, Shop, Play, Gojover]
}

let game = new Phaser.Game(config)
let keyM, keyESC, keySPACE

let centerX = game.config.width / 2
let centerY = game.config.height / 2
let w = game.config.width
let h = game.config.height


// Created by Noah Dane
// Super Turbo Turkey Puncher 3 Adaptation
/* credit mentioned in the instruction scene as well
Credit to: Nathan Altice, for moving particle emitter, gravity well, and particle death zone code
Jack Morehart (friend) for significant assistance in setting up HTML Dom code for shop
Credit to 
*/

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
    physics: {
        default: 'arcade',
        arcade: {
            //debug: true,
            gravity: {
                //y: 1000
            }
        },
    },
    //zoom: 4,
    scene: [Toad, Instruct, Menu, Shop, Play, Gojover]
}

let game = new Phaser.Game(config)
let keyM, keyESC, keySPACE, keyR 

let centerX = game.config.width / 2
let centerY = game.config.height / 2
let w = game.config.width
let h = game.config.height


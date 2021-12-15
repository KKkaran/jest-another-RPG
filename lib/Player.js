const Potion = require("./Potion")

function Player(name =""){
    this.name = name
    this.health = Math.floor(Math.random() * 5 + 6)
    this.strength = Math.floor(Math.random() * 5 + 6)
    this.agility = Math.floor(Math.random() * 5 + 6)
    this.inventory = [new Potion('health'), new Potion()];

}

module.exports = Player;
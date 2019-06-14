// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = "Harald";
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    vikingAttack(){
        let chosenSaxon = this.saxonArmy [ Math.floor ( Math.random(this.saxonArmy) * this.saxonArmy.length ) ];
        let chosenViking = this.vikingArmy [ Math.floor ( Math.random(this.vikingArmy) * this.vikingArmy.length ) ];
        
        let deadSaxon = chosenSaxon.receiveDamage(chosenViking.strength);

        if (chosenSaxon.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(chosenSaxon), 1);
            return deadSaxon;
        }
        else {
            return deadSaxon;
        }
    }

    saxonAttack() {
        let chosenSaxon = this.saxonArmy [ Math.floor ( Math.random(this.saxonArmy) * this.saxonArmy.length ) ];
        let chosenViking = this.vikingArmy [ Math.floor ( Math.random(this.vikingArmy) * this.vikingArmy.length ) ];
        
        let deadViking = chosenViking.receiveDamage(chosenSaxon.strength);

        if (chosenViking.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(chosenViking), 1);
            return deadViking;
        }
        else {
            return deadViking;
        }
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
        else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day...";
        }
        else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
};


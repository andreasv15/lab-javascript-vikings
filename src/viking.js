// Soldier
class Soldier {
  constructor(healthParam, strengthParam) {
    this.health = healthParam;
    this.strength = strengthParam;
  }

  attack = () => {
    return this.strength;
  }

  receiveDamage = (damageParam) => {
    this.health = this.health - damageParam;
  }

}

// Viking
class Viking extends Soldier {
  
  constructor(nameParam, healthParam, strengthParam) {
    super(healthParam, strengthParam);
    this.name = nameParam;
  }

  receiveDamage = (damageParam) => {
    this.health = this.health - damageParam;

    if (this.health !== 0) {
      return `${this.name} has received ${damageParam} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  } 

  battleCry = () => {
    return "Odin Owns You All!";
  }

}

// Saxon
class Saxon extends Soldier {

  receiveDamage = (damageParam) => {
    this.health = this.health - damageParam;

    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${damageParam} points of damage`;
    }
  }

}

// War
class War {
  
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];  
  }

  addViking = ( vikingObj ) => {
    this.vikingArmy.push(vikingObj);
  }

  addSaxon = ( saxonObj ) => {
    this.saxonArmy.push(saxonObj);
  }


  vikingAttack = () => {
    let randomSaxIndex = Math.floor(Math.random()*this.saxonArmy.length);
    let randomVikIndex = Math.floor(Math.random()*this.vikingArmy.length);

    let saxonAzar = this.saxonArmy[randomSaxIndex];
    let vikingoAzar = this.vikingArmy[randomVikIndex];

    let ataqueVikingo = saxonAzar.receiveDamage(vikingoAzar.attack());

    if (saxonAzar.health <= 0 ) {
      this.saxonArmy.splice(randomSaxIndex, 1);
    }
    
    return ataqueVikingo;
  }

  saxonAttack = () => {
    let randomSaxIndex = Math.floor(Math.random()*this.saxonArmy.length);
    let randomVikIndex = Math.floor(Math.random()*this.vikingArmy.length);

    let saxonAzar = this.saxonArmy[randomSaxIndex];
    let vikingoAzar = this.vikingArmy[randomVikIndex];

    let ataqueSaxon = vikingoAzar.receiveDamage(saxonAzar.attack());

    if (vikingoAzar.health <= 0 ) {
      this.vikingArmy.splice(randomVikIndex, 1);
    }
    
    return ataqueSaxon;
  }

  showStatus = () => {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }

}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

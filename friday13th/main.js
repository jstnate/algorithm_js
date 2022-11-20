'use strict'

class Killer {
    constructor(name, health) {
        this.name = name;
        this.health = health
    }
}

let Jason = new Killer('Jason', 100)

class Type {
    constructor (name, death, dodge, attackDeath){
        this.name = name;
        this.death = death;
        this.dodge = dodge;
        this.attackDeath = attackDeath;

    }
}

let character = [
    new Type('nerd', 30/100, 60/100, 40/100),
    new Type('trisomique', 60/100, 30/100, 80/100),
    new Type('sportif', 20/100, 90/100, 20/100),
    new Type('gros', 70/100, 20/100, 50/100),
    new Type('boxeur', 10/100, 80/100, 20100)];

class Survivor {
    constructor(name, type){
        this.name = name;
        this.type = type;

    }

    isDead() {
        let death = Math.random(0,1)
        return death < this.type.death;
    }
    isDodge() {
        let dodge = Math.random(0,1)
        return dodge < this.type.dodge;
    }
    isDeadByHit() {
        let deadByHit = Math.random(0,1)
        return deadByHit < this.type.attackDeath;
    }

    Move(){
        while (Jason.health > 0 ) {
            if (this.isDead() === true) {
                console.log(Jason.name + " a attaquer " + this.name + ", le " + this.type.name + " qui est mort !")
                return false
            } else if (this.isDodge() === true) {
                console.log(Jason.name + " a attaquer " + this.name + ", le " + this.type.name + ", qui a esquivé et lui à infligé des dégats.")
                Jason.health -= 10
                console.log(Jason.name + ' à maintenant ' + Jason.health + 'pv')
                return true
            } else if (this.isDeadByHit() === true) {
                console.log(Jason.name + " a attaquer " + this.name + ", le " + this.type.name + ", qui est mort en lui infligeant des dégats.")
                Jason.health -= 15
                console.log(Jason.name + ' à maintenant' + Jason.health + 'pv')
                return false
            }
        }
    }
}

let randomType = selectType()
let randomName = selectName()

let myTeam = [
    new Survivor (randomName[0], randomType[0]),
    new Survivor (randomName[1], randomType[1]),
    new Survivor (randomName[2], randomType[2]),
    new Survivor (randomName[3], randomType[3]),
    new Survivor (randomName[4], randomType[4])
]

function selectName(){
    let name =["Armand" , "Bertrand" , "Tristan" , "Titouan" , "Claudette" , "Dinette" , "Bernadette" , "Georgette" , "Paulette" , "Gontrand"];
    let nameList = []
    for(let i = 0; i < 5; i++){
        let selectedName = getRandomInt(name.length)
        nameList.push(name[selectedName]);
    }
    return nameList
}

function selectType(){
    let typeList = []
    for(let i = 0; i < 5; i++){
        let selectedType = getRandomInt(character.length)
        typeList.push(character[selectedType]);
    }
    return typeList
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function selectSurvivor(team){
    let currentSurvivor = 1
    let Event = true

    while(currentSurvivor < 5){
        Event = team[currentSurvivor].Move()
        if(Event === false){
            currentSurvivor += 1
        }
        if(Jason.health <= 0) {
            break
        }
    }

    if(Jason.health <= 0) {
        console.log("Les survivants ont survécu, Le tueur à le seum !");
    }
    if (currentSurvivor === 5) {
        console.log("Le tueur à gagné et à tué tout les survivants");
    }
}

selectSurvivor(myTeam)




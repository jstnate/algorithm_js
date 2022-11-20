'use strict'

class Personnage {
    constructor(name, health)
    {
        this.name = name;
        this.health = health;
    }
}

let Pierrick = new Personnage('Pierrick', 10)
let musique = ['Anissa - Wejdene', "Montero - Lil Nas X", "Blinding Lights - The Weekend", "In My Bones - Ray Dalton", "Oseille - Albert Tawil"]

let rest = 30
let pass = 0
let change = 0

while (Pierrick.health > 0) {
    for (let i = 0; i < rest; i++) {
        let radio = musique[Math.floor(Math.random()*musique.length)]
        console.log('Le taxi est à un feu rouge, on entend à la radio "' + radio + '"')
        if (radio === 'Anissa - Wejdene') {
            Pierrick.health -= 1
            change += 1
            rest -= 1
            pass += 1

        } else {
            rest -= 1
            pass += 1
        }
        if (Pierrick.health === 0) {
            console.log('Pierrick est mort d\'une overdose de Anissa, il à passé ' + pass + ' feux rouge et à fait ' + (change-1) + ' changement de taxi.')
            break
        }
        if (rest === 0) {
            console.log('Pierrick est arrivé en vie chez lui, avec seulement ' + change + ' changement de taxi')
            break
        }

    }
}


'use strict'

/*let a = 4
let b = 4
let c = 3



if(a==b){
    console.log("c'est égal")
}

if(c<b && a+c != 3){
    console.log("ok")
}else{
    console.log("raté")
}*/


/*switch (a) {
    case b:
        console.log('égal à b')
        break

    case c:
        console.log('égal à c')
        break

    default:
        console.log('égal à rien')
        break
}

for (let i = 0; i < a; i++) {
    console.log('oklm')
}*/



/*let d = 3
while (d < 9) {
    d++
    if(d == 8){
        break
    }else if(d == 7){
        continue
    }
    console.log(d)
}

/*let e = "Jean"
let f = "Paul"
let result = identic(e,f)

function identic(e,f) {
    return e==f
}
console.log(result)

let names = []

names.push("Vincent", "Paul", "Arthur")

for(i=0 ; i<names.length ; i++){
    names[i]+=' va à la pêche'
}
console.log(names);*/




class Pokemon{
    constructor(name,attack,defense,hp,luck){
        this.name = name ;
        this.attack = attack ;
        this.defense = defense ;
        this.hp = hp;
        this.luck = luck;
    }

    isLucky(){
        let chance = Math.random()
        if(chance<this.luck){
            return true
        }else{
            return false
        }
    }

    attackPokemon(Poke){

        if(this.isLucky()){
            let degats = this.attack - Poke.defense
            Poke.hp -= degats
            console.log(Poke.name + ' a subi ' + degats + ' dégats, ' + ' il lui reste' + Poke.hp + ' hp')
        }else{
            console.log('Attaque manquée')
        }
    }
}


let Pika = new Pokemon('Pikachu',50,20,100,0.70);
let Sala = new Pokemon('Salamèche',30,20,100,0.60);
let Cara = new Pokemon('Carapuce',60,20,100,0.70);
let Bob = new Pokemon('Bob the duck',40,30,150,0.60);
let Jose = new Pokemon('José',20,10,100,0.70);
let Bulb = new Pokemon('Bulbizard',30,20,120,0.60);


let myTeam = []
myTeam.push(Pika,Sala,Cara,Bob,Jose,Bulb)

let i = 0
let score = 0
while(myTeam.length != 0){
    let randomEnemy = new Pokemon('randomPoke',40,Math.floor(Math.random() * 17),125,Math.random())
    while (myTeam[i].hp > 0 && randomEnemy.hp > 0) {
        myTeam[i].attackPokemon(randomEnemy)
        if (randomEnemy.hp <= 0) {
            console.log(randomEnemy.name + ' est mort')
            score += 1
        }
        randomEnemy.attackPokemon(myTeam[i])
        if (myTeam[i].hp <= 0) {
            console.log(myTeam[i].name + ' est mort')
            if(myTeam.length>1){
                myTeam.shift()
            }else{
                console.log('Vous ne possédez plus de Pokémon, vous avez battu ' + score + ' Pokémon')
                break
            }

        }

    }
}







/*
while (Pika.hp > 0 && Sala.hp > 0) {
    Pika.attackPokemon(Sala)
    if (Sala.hp <= 0) {
        console.log(Sala.name + ' est mort')
        break
    }
    Sala.attackPokemon(Pika)
    if (Pika.hp <= 0) {
        console.log(Pika.name + ' est mort')
        break
    }
} */

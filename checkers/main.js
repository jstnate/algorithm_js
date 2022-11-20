const board = document.querySelector('.checker-board')

let i = 0
for(let rows = 0; rows < 10; rows++) {
    for (let columns = 0; columns < 10; columns++) {
        let boxColor = (rows+columns) % 2 === 0 ? '#ffdbb5' : '#9f5501';

        const box = document.createElement('div')
        box.id = i;
        i++
        box.style.width = board.clientWidth / 10 + 'px'
        box.style.height = board.clientHeight / 10 + 'px'
        box.style.backgroundColor = boxColor;

        board.append(box);

        box.addEventListener('click', (e) => {
            Movement(e.target)
        })
    }
}

let blackPawns = []
for (i = 0; i <= 39; i+=2) {
    if (i % 10 === 0) {
        i+=1
    } else if (i % 10 === 1) {
        i-=1
    }
    let pawnContainer = document.getElementById(i)
    let pawn = document.createElement('div')
    pawn.classList.add('black_pawn')
    pawn.id = i
    pawn.addEventListener('click', (e) => {
        Select(e.target)
    })
    pawnContainer.appendChild(pawn)
    blackPawns.push(pawn)
}

let whitePawns =[]
for (i = 60; i <= 99; i+=2) {
    if (i % 10 === 0) {
        i+=1
    } else if (i % 10 === 1) {
        i-=1
    }
    let pawnContainer = document.getElementById(i)
    let pawn = document.createElement('div')
    pawn.classList.add('white_pawn')
    pawn.id = 'square' + i
    pawn.addEventListener('click', (e) => {
        Select(e.target)
    })
    pawnContainer.appendChild(pawn)
    whitePawns.push(pawn)
}

console.log(blackPawns)
console.log(whitePawns)

let turn = 0
let targetClass = 'white_pawn'
while (blackPawns.length > 0 && whitePawns > 0) {
}



function convertId(id) {
    let y = Math.floor(id / 10)
    let x = Math.floor(id % 10)
    return [x, y]
}

function convertCoordo(x, y) {
    return y * 10 + x
}
let position = []
let selectedPawn = 0
let square = 0
function Select(e) {
    if (e.classList.contains(targetClass)) {
        square = e.parentNode.id
        convertId(square)
        position = square
        selectedPawn = e
        e.remove()

        moveVerify(e)
        if (turn === 0) {
            targetClass = 'black_pawn'
            turn = 1
        } else {
            targetClass = 'white_pawn'
            turn = 0
        }
    }
}

function Movement(e) {
    try {
        if (selectedPawn != 0) {
            e.appendChild(selectedPawn)
            selectedPawn = 0
        }
    }catch {

    }
}

function moveVerify(e) {
    if (e.id === square - 9 || e.id === square - 11) {
        Movement(e)
    }
}




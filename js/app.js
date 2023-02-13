let rand = []

for (let i=0; i<5; i++) {
    rand [i] = parseInt(Math.floor(Math.random()*99+1))
}

alert(rand)

let counter = 30

const timeout = setTimeout(timerRicorsivo, 1000)


function timerRicorsivo() {     //so che esiste set interval volevo divertirmi un po XD
    console.log (counter)
    counter--
    if (counter > 0) {
        return setTimeout(timerRicorsivo, 1000)
    }
    else {
        richiestaNumeri ()
    }
}

function richiestaNumeri () {
    let n = []
    for (let i=0; i<5; i++) {
        n [i] = parseInt(prompt('inserire numero:'))
    }
    console.log ((verificaNumeri (rand, n)).length + ' numeri corretti: ' + (verificaNumeri (rand, n)))     //un po poco leggibile... (verificaNumeri (rand, n)) restituisce l'array coi numeri corretti
}

function verificaNumeri (r, n) {    //ho dato per scontato che i numeri andassero anche inseriti nella posizione corretta, in alternativa si poteva controllare con una funzione se r[i] fosse presente nell'intero n
    let corretti = []
    for (let i=0; i<5; i++) {
        if (r [i] == n [i]) {
            corretti.push (n [i])
        }
    }
    return corretti
}

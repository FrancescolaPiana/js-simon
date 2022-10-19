


// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. FATTO


// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite una casella di input e un bottone  FATTO


// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.    FATTO


// var num
let numcas = [];
let numvar = 5;

// var time
const time = 1;
let timer = time * 1000;
let cutdown = 5;

// var input
let casella;
let btn;
let arrayinput = [];
let arrayinputCorrect = [];


const Timer = setInterval(fx, timer);
while (numcas.length < numvar) {
    let num = randomNumber(0,100)
    if (!numcas.includes(num)) {
        numcas.push(num);
    }
}
let span1 = document.getElementById('numcas').innerHTML = (`${numcas}`) 

//  timer

function fx() {
    document.getElementById('timer').innerHTML = (``);
    document.getElementById('timer').innerHTML = (`${cutdown}`);
    cutdown--;

    if (cutdown < -1) {
        clearInterval(Timer);
        span1 = document.getElementById('numcas').innerHTML = (`?`)
        setTimeout (document.getElementById('timer').innerHTML = `
        <span><input type="number" name="" id="casella"></span> <span><button id="btn" type="submit"><i class="fa-solid fa-upload"></i></button></span>
        ` , 7000 )
        
        casella = document.getElementById('casella');
        casella.value = 0;   
        btn = document.getElementById('btn');
        btn.addEventListener('click' , fx3);
    }
}

function fx3() {
    
    let Momval = parseInt(casella.value);
    console.log(Momval);
        if (isNaN(Momval)) {
            Momval = 0
        }
        if (!arrayinput.includes(Momval) ) {
            document.getElementById('err').innerHTML = ``
            arrayinput.push(Momval);
            if ( numcas.includes(Momval) ) {
                arrayinputCorrect.push(Momval)
            }
            if (arrayinput.length === 5) {
                document.getElementById('timer').innerHTML = ``;
                document.getElementById('timer').innerHTML = `
                <h1 id="numcas">${numcas}</h1>
                <h1 id="">Numeri Inseriti: ${arrayinput}</h1>
                <h1 id="corr" >Numeri Corretti: ${arrayinputCorrect}</h1>
                `;
            }
        }
        else{
            document.getElementById('err').innerHTML = `<span id="red" >Non puoi inserire due volte lo stesso Valore</span> `
        }
    document.getElementById('tit').innerHTML = ''
    document.getElementById('tit').innerHTML = '<a id="restart" href=""><i class="fa-solid fa-rotate-right"></i></a>'
        // console.log('numeri corretti' , numcas);
        // console.log('array numeri inseriti' , arrayinput);
        // console.log('array numeri inseriti corretti' ,arrayinputCorrect);
}
console.log('numeri corretti' , numcas)



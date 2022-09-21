let nomeTimeA = prompt("Enter the name of the first team: ");
let nomeTimeB = prompt("enter the name of the second team: ");
let pontoA = 0;
let pontoB = 0;
let setA = 0;
let setB = 0;

const nomeA_HTML = document.getElementById("nomeTimeA");
const nomeB_HTML = document.getElementById("nomeTimeB");
const pontoA_HTML = document.getElementById("pontuacaoA");
const pontoB_HTML = document.getElementById("pontuacaoB");
const setA_HTML = document.getElementById("setA");
const setB_HTML = document.getElementById("setB");

nomeA_HTML.innerText = nomeTimeA;
nomeB_HTML.innerText = nomeTimeB;
pontoA_HTML.innerText = pontoA;
pontoB_HTML.innerText = pontoB;
setA_HTML.innerText = setA;
setB_HTML.innerText = setB;

pontoA_HTML.addEventListener("click", AlertarEComputarPontoTimeA);
pontoB_HTML.addEventListener("click", AlertarEComputarPontoTimeB);

function AlertarEComputarPontoTimeA () {
    pontoA = pontoA + 1;
    // alert(`O time ${nomeTimeA} fez ${pontoA} ponto(s)`);
    pontoA_HTML.innerText = pontoA;
    VerificarFimDoSet();
    MarcarFimDoSet ();
}

function AlertarEComputarPontoTimeB () {
    pontoB = pontoB + 1;
    // alert(`O time ${nomeTimeB} fez ${pontoB} ponto(s)`);
    pontoB_HTML.innerText = pontoB;
    VerificarFimDoSet ();
}

function VerificarFimDoSet () {
    // Verifica se A ganhou o set
    if (pontoA >= 21 && pontoA - pontoB >= 2 ) {
    //A Ganhou o set.
        alert (`Team ${nomeTimeA} won the set!`);
        setA = setA + 1;
        setA_HTML.innerText = setA;
        ZerarOPlacarDePontosEVerificarFimDeJogo ();
    }
    if (pontoB >= 21 && pontoB - pontoA >= 2) {
        alert (`Team ${nomeTimeB} won the set!`);
        setB = setB + 1;
        setB_HTML.innerText = setB;
        ZerarOPlacarDePontosEVerificarFimDeJogo ();
    }
}

function ZerarOPlacarDePontosEVerificarFimDeJogo () {
    pontoA = 0;
    pontoB = 0;
    pontoA_HTML.innerText = pontoA;        
    pontoB_HTML.innerText = pontoB;

    if (setA === 2 || setB === 2) {
        alert("End of the game!")
    }
}

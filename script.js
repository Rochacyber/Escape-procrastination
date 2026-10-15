const botao = document.getElementById("botao-desafio");
const botaoFinalizar = document.getElementById("botao-finalizar");
const modal = document.getElementById("modal");

const TEMPO_INICIAL = 1500;
let tempoRestante = TEMPO_INICIAL;
let intervalo;

function mostrarTempo() {
    let minutos = Math.floor(tempoRestante / 60);
    let segundos = tempoRestante % 60;
    document.getElementById("timer").textContent =
        `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
}

function atualizarTimer() {
    tempoRestante = tempoRestante - 1;
    mostrarTempo();

    if (tempoRestante <= 0) {
        clearInterval(intervalo);
        modal.classList.remove("escondido");
    }
}

mostrarTempo();

botao.addEventListener("click", function () {
    botao.disabled = true;
    intervalo = setInterval(atualizarTimer, 1000);
});

botaoFinalizar.addEventListener("click", function () {
    modal.classList.add("escondido");
    tempoRestante = TEMPO_INICIAL;
    mostrarTempo();
    botao.disabled = false;
});
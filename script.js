const botao = document.getElementById("botao-desafio");

botao.addEventListener("click", function () {

    alert("Desafio iniciado! 🌱");

});
let tempoRestante= 1500;

function atualizarTimer () {
    let minutos  = Math.floor (tempoRestante/60);
    let segundos = tempoRestante%60;
    let tempoFormatado = `${minutos}:${segundos. toString().padStart(2, "0")}`;
    document.getElementById("timer"). textContent = tempoFormatado; 
    tempoRestante = tempoRestante - 1;
    
}   setInterval (atualizarTimer, 1000);

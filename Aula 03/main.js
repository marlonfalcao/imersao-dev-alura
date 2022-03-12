// Desafios desta aula!
// Adicionar um número de tentativas para a pessoa tentar acertar e imprimir a resposta no final.
// Quando a pessoa errar, deixar na mensagem se o número chutado é maior ou menor que o número secreto.
// Pesquisar e aprender a diferença entre == e ===

function reload() {
    document.location.reload(true);
}

//let numeroDesconhecido = 0

function numeroAleatório(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + 0;
}

numeroDesconhecido = numeroAleatório(0, 10);
console.log(numeroDesconhecido)

function Chutar() {
    const elemento = document.getElementById ("valor");
    const chute = elemento.value;
    const chuteNumber = parseInt(chute);
    let respostaPositiva = "";
    let respostaNegativa = "";
    let respostaDicaChuteMaior = "";
    let respostaDicaChuteMenor = "";
    let apagaDica = "";

    let elementoResposta = document.getElementById("resultado");
    let elementoRespostaDica = document.getElementById("respostaDica");

    elementoRespostaDica.innerHTML = apagaDica;

    if (numeroDesconhecido === chuteNumber){
        respostaPositiva = `Parabéns, você acertou. O computador pensou no número ${chuteNumber}`
        elementoResposta.innerText=respostaPositiva;
        return
        }        
    respostaNegativa = `Que pena, o computador não pensou no número ${chuteNumber}, tente de novo.`
    elementoResposta.innerText = respostaNegativa;
    
    if (numeroDesconhecido < chuteNumber){
        respostaDicaChuteMaior = `Ah, uma dica... O número do computador é menor que ${chuteNumber}`
        elementoRespostaDica.innerText = respostaDicaChuteMaior
        
    } if (numeroDesconhecido > chuteNumber) {
        respostaDicaChuteMenor = `Ah, uma dica... O número do computador é maior que ${chuteNumber}`
        elementoRespostaDica.innerText = respostaDicaChuteMenor

    } if (numeroDesconhecido  === chuteNumber) {
        elementoRespostaDica.innerHTML = apagaDica
    }

}



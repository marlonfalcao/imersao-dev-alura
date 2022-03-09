//CASAS DECIMAIS
// variável + ".toFixed(número de casas decimais)" para definir a quantidade de casas decimais
//Se colocar o número zero ele arrendonda pra cima

// Desafios desta aula!
// Dependendo da nota, mostrar se a aluna ou aluno foi aprovada(o) ou não
// Alterar o fundo da tela da maneira que achar mais legal
// Imprimir na própria página o resultado, ao invés do console
// Criar um conversor de temperaturas entre farenheit e celcius
// Colocar a conta inteira da média em apenas uma linha
function reload() {
    document.location.reload(true);
}

function CalcularMedia() {
    
    const element1 = document.getElementById("primeiroSemestre");
    const element2 = document.getElementById("segundoSemestre");
    const element3 = document.getElementById("terceiroSemestre");
    const element4 = document.getElementById("quartoSemestre");

    const valor1 = element1.value;
    const valor2 = element2.value;
    const valor3 = element3.value;
    const valor4 = element4.value;

    const nota1 = parseFloat(valor1);
    const nota2 = parseFloat(valor2);
    const nota3 = parseFloat(valor3);
    const nota4 = parseFloat(valor4);

    const media = ((Number(nota1 + nota2 + nota3 + nota4) / 4).toFixed(1));
    
    const elementoResultado = document.getElementById("resultado");
    const resultado = `Sua média é ${media}.`;
    elementoResultado.innerHTML = resultado;
    
    let mensagemResultado = ""

    const elementoMensagemAprovado = document.getElementById("mensagem-aprovado");
    const elementoMensagemReprovado = document.getElementById("mensagem-reprovado");

    if (media > 7){
        mensagemResultado = `Devido sua média ser ${media} e ficar acima de 7.0, você foi aprovado!`
        elementoMensagemAprovado.innerHTML = mensagemResultado
    } else {
        mensagemResultado = `Devido sua média ser ${media} e ficar abaixo de 7.0, você foi REPROVADO!`
        elementoMensagemReprovado.innerHTML = mensagemResultado
    }
}


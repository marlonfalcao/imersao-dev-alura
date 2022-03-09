//####  Desafios desta aula! #####

// Adicionar outras moedas para converter.
// Conversor de quilômetros para anos luz e verificar o tempo que demora para ir de uma estrela para outra.
// Conversor de temperaturas entre farenheit, kelvin e celcius.
// Adicionar uma linha ao projeto desenvolvido para que apareça o valor em bitcoin.


function ConverterDollar() {
    var clicar = document.getElementById ("valorDollar"); /*busca o element pelo ID*/
    var valorInserido = clicar.value; /*retira o valor digitado de dentro do elemento*/
    var valorEmNumero = parseFloat(valorInserido);/*transforma de string para número flutuante*/

    var resultado = Number(valorEmNumero * 5.06).toFixed(2); /*converte para o dollar e adiciona duas casas decimais*/
    var dollarBit = Number(resultado / 213253.70).toFixed(9); /*converte para o bitcoin e adiciona nove casas decimais*/

        
    var apresentaResultado = document.getElementById ("DollarConvertido"); /*busca o id do html (local) e trás para o js como variável*/
    var imprimirResultado = `O valor em real é R$${resultado}.`; /*altera a variavel para o valor da conversão concatenado com o texto */

    var apresentaResultado2 = document.getElementById ("DollarBitcoin");
    var imprimirResultado2 = `O valor em Bitcoin é R$${dollarBit}.`;

    apresentaResultado.innerHTML = imprimirResultado; /*insere a variavel modificada na página html*/
    apresentaResultado2.innerHTML = imprimirResultado2;
}

function ConverterCat() {
    var clicar2 = document.getElementById("valorCat");
    var numeroInserido2 = clicar2.value;
    var conversaoParaNumero = parseFloat(numeroInserido2);

    var conversaoParaReal = Number(conversaoParaNumero * 1.39).toFixed(2);
    var conversaoParaBit = Number(conversaoParaNumero / 213253.70).toFixed(9);

    var buscaHtml = document.getElementById("CatConvertido");
    var buscaHtml2 = document.getElementById("CatBitcoin");

    var resultado2 = `O valor em real é R$${conversaoParaReal}.`;
    var resultado3 = `O valor em real é R$${conversaoParaBit}.`;

    buscaHtml.innerHTML = resultado2;
    buscaHtml2.innerHTML = resultado3;
}
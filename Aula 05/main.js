//Desafios desta aula!
//Fazer a lógica de quando houver um empate, obrigatóriamente deveria já ajustar como empate para os demais jogadores
//Validar se todos os pontos estão fazendo sentido, tanto o número de empates, quanto derrotas e vitórias com os demais jogadores (impossível haver mais vitórias que derrotas, por exemplo)
//Adicionar a imagem de cada jogador
//Criar um botão para zerar todos os pontos
//Criar um botão e inputs (campos de texto) para adicionar novos jogadores, com seus respectivos dados
//Utilizar seu jogo preferido para se basear na pontuação da sua tabela de classificação

let grayce = {nome: "Grayce", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};
let marlon = {nome: "Marlon", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};

//grayce.pontos = calculaPontos(grayce);
//marlon.pontos = calculaPontos(marlon);


function calculaPontos(jogador) {
    let pontos = (jogador.vitorias * 3) + jogador.empates - jogador.derrotas;
    return pontos;
}

let jogadores = [grayce, marlon]

function exibeJogadoresNaTela(jogadores){
    var elemento = ""

    for (let i = 0; i < jogadores.length; i++){
        
        elemento += "<tr><td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>" + jogadores[i].empates + "</td>"
        elemento += "<td>" + jogadores[i].derrotas + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
        elemento += "</tr>"        
    }

    let tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
    let jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos (jogador)
    exibeJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
    let jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos (jogador)
    exibeJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
    let jogador = jogadores[i]
    jogador.derrotas++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}
//CASAS DECIMAIS
// variável + ".toFixed(número de casas decimais)" para definir a quantidade de casas decimais
//Se colocar o número zero ele arrendonda pra cima

// Desafios desta aula!
// Dependendo da nota, mostrar se a aluna ou aluno foi aprovada(o) ou não
// Alterar o fundo da tela da maneira que achar mais legal
// Imprimir na própria página o resultado, ao invés do console
// Criar um conversor de temperaturas entre farenheit e celcius
// Colocar a conta inteira da média em apenas uma linha

const form = document.querySelector("#form")
// variavel que busca os dados do id form, formulario
//console.log(form)

const inputs = form.querySelectorAll("input"); // armazena todos os inputs que estão dentro do form
//console.log(inputs)

const resultadoTexto = document.querySelector("#resultado")
const resultadoMensagem = document.querySelector("#mensagem")

//a funcao addEventListener adiciona um evento de escuta para captar os dados de inputs quando houver o submit (clique)
form.addEventListener("submit", event => {
    event.preventDefault()
    const inputValue = event.target.value
    
    let notas = []
    
    inputs.forEach((input) => {
        notas.push(Number(input.value)) // Pega todos os inputs e pra cada input ele adiciona o valor no array notas (declarado vazio)
        input.value = "" // limpa o input após adicionar os valores de cada input no array
    })

    const somaNotas = notas.reduce((acc, nota) => acc + nota, 0) // usado pra converter um tipo de dado em outro tipo de dado (acc = acumulator/pode ser qualquer letra ou expressao) - passa pelos valores do array somando e acumulando!

    const media = somaNotas / notas.length

    const resultadoFinal = Number(media).toFixed(1) //transforma em flutuante com somente uma casa decimal

    //console.log(resultadoFinal)

    resultadoTexto.textContent = resultadoFinal

    if (resultadoFinal < 7) {
        resultadoTexto.style.color = "red"
        resultadoMensagem.textContent = "Você foi reprovado!"
        resultadoMensagem.style.color = "red"
        return
    }

    resultadoTexto.style.color = "green"
    resultadoMensagem.style.color = "green"
    resultadoMensagem.textContent = "Parabéns, você foi aprovado!"
})






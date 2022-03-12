//https://www.omelete.com.br/imagens/cinema/artigos/dia_depois_amanha/poster.jpg

const addFilmes = document.querySelector("form")
const inputs = addFilmes.querySelectorAll('input');



addFilmes.addEventListener("submit", event => {
    event.preventDefault()
    
    //let imageFilme = ""

    inputs.forEach((input) => {
        imageFilme = (String(input.value))
        input.value = ""
        
        let pai = document.createElement("img");
        pai.src = imageFilme;
        
        document.getElementById("listaImagens").appendChild(pai)

    })

})

//let imagem = "https://www.omelete.com.br/imagens/cinema/artigos/dia_depois_amanha/poster.jpg";

//let mostraImagem = document.createElement("img");

//listaTeste = document.getElementById("listaImagens").appendChild()

//console.log()





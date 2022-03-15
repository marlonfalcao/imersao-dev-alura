//https://www.omelete.com.br/imagens/cinema/artigos/dia_depois_amanha/poster.jpg

const addFilmes = document.querySelector("#addFilme");
const inputs = addFilmes.querySelectorAll("input");


addFilmes.addEventListener("submit", event => {
    event.preventDefault()
    
    inputs.forEach((input) => {
        imageFilme = (String(input.value))
        input.value = ""
        
        if (imageFilme.endsWith(".jpg")){

            let filho = document.createElement("img");
            filho.src = imageFilme;
            
            document.getElementById("listaImagens").appendChild(filho)
        } else {
            alert("Imagem inválida!")
        }
    
    })

})

const removeFilmes = document.querySelector("#removerFilme");
const inputsRemover = removeFilmes.querySelectorAll("input");



removeFilmes.addEventListener("submit", event => {
    event.preventDefault()

    inputsRemover.forEach((input) => {
        imageFilme = (String(input.value))
        input.value = ""

    })
    
})



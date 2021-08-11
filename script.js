//seleciona o elemento pelo id
document.getElementById("titulo").innerHTML = "Opa, tudo bem"

//escreve algo na tela
document.write("algo na tela")

//seleciona todos os elementos pelo nome da classe
document.getElementsByClassName("")

//seleciona todos os elementos pelo nome da tag
document.getElementsByTagName("")

//seleiona todos os elementos pelo atributo name, mais ultilizado em campos de texto
document.getElementsByName("")

//função para subir o Scroll

function subirTela(){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
}

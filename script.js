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

//função para ocultar botão

function decidirBotaoScroll(){
    if(window.scrollY === 0){
        // ocultar o botão
        //document.querySelector('.scrollbutton').style.display = 'none'
    } else{
        // mostrar o botão
        //document.querySelector('.scrollbutton').style.display = 'block'
    }
}

// adiciona um evento que vai monitorar o scroll da janela
window.addEventListener('scroll', decidirBotaoScroll);

// função clicou

function clicou(){
    alert("Você clicou no botão")
    document.getElementById("titulo").innerHTML = "obrigado!!"
}

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

// declaração de arrays

let carros = ['Palio','Gol','Corolla','Ferrari']

// não muito usado hoje em dia
//let carros = new Array('Pali','Uno','Corolla')

// declaração de objetos

let carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligar: function(){
        console.log("VRUM VRUM")
    }
}

// função abrir menu

function abrir(){
    let menu = document.getElementById("menu-area")
    console.log(menu)
    if(menu.style.width == '200px'){
       menu.style.width = '0px'
    } else{
        console.log("cheguei aqui")
        menu.style.width = '200px'
    }
}

// usando switch

let dia = 3
let diaNome = ''

switch (dia) {
    case 1:
        diaNome = 'Segunda-feira'
        break
    case 2:
        diaNome = 'Terça-feira'
        break
    case 3:
        diaNome = 'Quarta-feira'
        break
    case 4:
        diaNome = 'Qinta-feira'
        break
    case 5:
        diaNome = 'Sexta-feira'
        break
    case 6:
        diaNome = 'Sábado'
        break
    case 7:
        diaNome = 'Domingo'
        break
}

//usando varios FORM
// FOR LOOP
// FOR LOOP ARRAYS

//FOR LOOP
let texto = ''

for(let i = 0; i < 50; i++) {
    texto += i
}

document.querySelector(".demo").innerHTML = texto

//FOR arrays

let veiculos = ['Ferrari','Fusca','Palio','Corolla','Lamborghini']

let html = '<ul>'

for(let i in veiculos) {
    html += '<li>'+ veiculos[i] + '</li>'
}

html += '</ul>'

document.querySelector(".demo").innerHTML = html

// usando o while

let c = 0

while(c < 10){
    html += "Número: "+c+"<br/>"
    c += 1
}

document.querySelector(".demo").innerHTML = html

// METODOS DE MANIPULAÇÃO DE ARRAYS

let lista = ['ovo','Trigo','Manteiga','Leite']

// transforma uma lista numa string separada por vírcula
let res = lista.toString()

console.log(res)

// remove o primeiro item de uma lista
lista.shift()

// remove o ultimo item de uma lista
lista.pop()

// adiciona um item no final de uma lista
lista.push()

// melhor forma pra remover qualquer item de uma lista
lista.push('Margarina')
lista.push('Lucas')
lista.splice(2,1)//define qual o indice do array e a quantidade
console.log(lista)

//metodo para juntar varios arrays

let lista2 = ['Forma','Forno','Fogo']

let re = lista.concat(lista2)

console.log(re)

//metodo para mapear todos os itens do array
let numeros = [2,3,4,5,6]
let mult = []

mult = numeros.map(function(item) {
    return item * 2
})

console.log(mult)

//metodo para encontrar qualquer coisa num arrays

let n = numeros.find(function(item){
    return (item == 5) ? true : false
})

let n1 = re.find(function(item){
    return (item == "Fogo") ? true : false
})

//metodo para encontrar a posição dentro do array
let n2 = re.findIndex(function(item){
    return (item == "Fogo") ? true : false
})

console.log(n1, "indice",n2)

//manipulando a classe new Date()

let d = new Date()

let resultado = d.getFullYear() // pega o ano
resultado = d.getMonth() //pega o mês

console.log(resultado)
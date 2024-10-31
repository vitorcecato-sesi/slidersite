// Seleciona as imagens do slider
const imagensSlider = document.querySelectorAll("#slider img")

// Mostrar uma imagem específica
function mostrarImagem(index) {
    imagensSlider.forEach(imagem => imagem.style.display = "none")  // Esconde as imagens
    imagensSlider[index].style.display = "block"  // Exibir imagem do index
}

let imagemAtual = 0

// Próxima imagem
function proximaImg() {
    imagemAtual = (imagemAtual + 1) % imagensSlider.length
    mostrarImagem(imagemAtual)
}

// Imagem Anterior
function anteriorImg() {
    imagemAtual = (imagemAtual - 1 + imagensSlider.length) % imagensSlider.length
    mostrarImagem(imagemAtual)
}

// Botão Próximo
function btnProx() {
    proximaImg()
    clearInterval(intervalo)
    intervalo = setInterval(proximaImg, 3000)
}

// Botão Anterior
function btnAnt() {
    anteriorImg()
    clearInterval(intervalo)
    intervalo = setInterval(proximaImg, 3000)
} 

// Troca automática de imagens
let intervalo = setInterval(proximaImg, 3000)
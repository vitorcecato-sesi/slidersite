// Seleciona as imagens do slider
const imagensSlider = document.querySelectorAll("#slider img")

// Mostrar uma imagem específica
function mostrarImagem(index) {
    imagensSlider.forEach(imagem => imagem.style.display = "none")  // Esconde as imagens
    imagensSlider[index].style.display = "block"  // Exibir imagem do index
}

let imagemAtual = 0

// Próxima imagem
function proximaImagem() {
    imagemAtual = ()
}
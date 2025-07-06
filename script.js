const btnPassarImagemDireita = document.querySelector('#btnImagem-Direita')
const btnPassarImagemEsquerda = document.querySelector('#btnImagem-esquerda')
const imagem1 = document.querySelector('.imagem1')
const imagem2 = document.querySelector('.imagem2')

const btnPassarImagemDireita2 = document.querySelector('#btnImagem-Direita2')
const btnPassarImagemEsquerda2 = document.querySelector('#btnImagem-esquerda2')
const imagem3 = document.querySelector('.imagem3')
const imagem4 = document.querySelector('.imagem4')

const btnPassarImagemDireita3 = document.querySelector('#btnImagem-Direita3')
const btnPassarImagemEsquerda3 = document.querySelector('#btnImagem-esquerda3')
const imagem5 = document.querySelector('.imagem5')
const imagem6 = document.querySelector('.imagem6')

const btnPassarImagemDireita4 = document.querySelector('#btnImagem-Direita4')
const btnPassarImagemEsquerda4 = document.querySelector('#btnImagem-esquerda4')
const imagem7 = document.querySelector('.imagem7')
const imagem8 = document.querySelector('.imagem8')



function passarImagemDireita() {
    imagem1.style.display = 'none'
    imagem2.style.display = 'block'
}

function passarImagemEsquerda() {
    imagem2.style.display = 'none'
    imagem1.style.display = 'block'
}



function passarImagemDireita2() {
    imagem3.style.display = 'none'
    imagem4.style.display = 'block'
}

function passarImagemEsquerda2() {
    imagem4.style.display = 'none'
    imagem3.style.display = 'block'
}



function passarImagemDireita3() {
    imagem5.style.display = 'none'
    imagem6.style.display = 'block'
}

function passarImagemEsquerda3() {
    imagem6.style.display = 'none'
    imagem5.style.display = 'block'
}



function passarImagemDireita4() {
    imagem7.style.display = 'none'
    imagem8.style.display = 'block'
}

function passarImagemEsquerda4() {
    imagem8.style.display = 'none'
    imagem7.style.display = 'block'
}

btnPassarImagemDireita.addEventListener('click', passarImagemDireita)
btnPassarImagemEsquerda.addEventListener('click', passarImagemEsquerda)

btnPassarImagemDireita2.addEventListener('click', passarImagemDireita2)
btnPassarImagemEsquerda2.addEventListener('click', passarImagemEsquerda2)

btnPassarImagemDireita3.addEventListener('click', passarImagemDireita3)
btnPassarImagemEsquerda3.addEventListener('click', passarImagemEsquerda3)

btnPassarImagemDireita4.addEventListener('click', passarImagemDireita4)
btnPassarImagemEsquerda4.addEventListener('click', passarImagemEsquerda4)


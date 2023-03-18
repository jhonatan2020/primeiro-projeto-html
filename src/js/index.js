/* 
OBJETIVO - quando clicar no botão temos que mostrar a imagem do fundo
*/

const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//passo 2 - dar um jeito de identificar o clique do usuario no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        //passo 3 - desmarcar botão selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        //passo 4 - marcar o botão clicado como se estivesse selecionado
        botao.classList.add('selecionado');

        //passo 5 - esconder a imagem ativa de fundo
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        //passo 6 - fazer aparecer a imagem de fundo do botão clicado
        console.log(imagens);
        imagens[indice].classList.add('ativa');
    })
})
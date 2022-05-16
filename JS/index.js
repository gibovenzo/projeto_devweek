/* 
OBJETIVO 1 - Mudar de personagem quando passar o mouse

- colocar a classe 'selecionado' no personagem que passamos o mouse em cima
- retirar a classe 'selecionado' que está selecionado

OBJETIVO 2 - Alterar a imagem e o nome do personagem grande

- alterar a imagem do personagem
- alterar o nome do personagem
*/

const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado')

        const idSelecionado = personagem.attributes.id.value;
        if(idSelecionado === 'midorya2') return;

        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./Imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1')
        const nomeSelecionado = personagem.getAttribute('data-name');

        nomeJogador1.innerHTML = nomeSelecionado;
    })
})
// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"])');

function toggleAtivo(event) {
    event.preventDefault();

    linksInternos.forEach((link) => {
        link.classList.remove('ativo');
    });

    event.currentTarget.classList.add('ativo');
}

linksInternos.forEach((link) => {
    link.addEventListener('click', toggleAtivo);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


const elementos = document.body;
// const elementos = document.querySelectorAll('body *');

function clicked(event) {
    console.log(event.currentTarget);
    // event.currentTarget.remove();
}

elementos.forEach((el) => {
    el.addEventListener('click', clicked);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function texto_maior(event) {
    if(event.key === 't') 
        document.documentElement.classList.toggle('texto-maior');
}

elementos.forEach((els) => {
    els.addEventListener('keydown', texto_maior);
});     
const img = document.querySelector('img');
const lista = document.querySelector('.lista');

// console.log(img);

function callback(event) {
    console.log(event);
}

// variavel.addEventListener(evento, função)
img.addEventListener('click', callback);

function targetLista(event) {
    // retorna a própria lista
    console.log(event.currentTarget); 
    
    // retorna o item da lista que foi clickado
    console.log(event.target); 
}

lista.addEventListener('click', targetLista);

// https://developer.mozilla.org/en-US/docs/Web/Events


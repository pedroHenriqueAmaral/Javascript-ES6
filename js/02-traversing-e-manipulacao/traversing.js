const lista = document.querySelector('.lista')

// selecionar elemento pai
lista.parentElement; 

// elemento anterior no mesmo nível
lista.previousElementSibling; 

// próximo elemento no mesmo nível
lista.nextElementSibling;

lista.children;
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

//---

const titulo = document.querySelector('.titulo');
const contato = document.querySelector('.contato');

// lista no final de contato
contato.appendChild(lista);

// insere a lista antes do título dentro de contato
contato.appendBefore(lista, titulo);

// substitui a lista pelo título
contato.replaceChild(lista, titulo);

// remove título de contato
contato.removeChild(titulo);

//---

/* clonar elemento para adicionar em outro lugar 
sem tirar o mesmo da onde se encontra */
const tituloClone = titulo.cloneNode(true);
contato.appendChild(tituloClone);
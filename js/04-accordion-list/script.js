function accordionList() {
    const classAtivo = 'ativo';
    const itensFaq = document.querySelectorAll(".faq dt");

    if(itemAtivo.length) {
        // Inicia com o primeiro item do FAQ aberto
        itensFaq[0].classList.add(classAtivo);
        itensFaq[0].nextElementSibling.classList.add(classAtivo);

        function itemAtivo() {
            this.classList.toggle(classAtivo);
            this.nextElementSibling.classList.toggle(classAtivo);
        }

        itensFaq.forEach((item) => {
            item.addEventListener('click', itemAtivo)
        });
    }
}
accordionList()
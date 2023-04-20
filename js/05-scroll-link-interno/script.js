const linksInternos = document.querySelectorAll('.menu a[href^="#"]');

function scrollToSection(event) {
    event.preventDefault();

    const linkHref = event.currentTarget.getAttribute('href');
    const section = document.querySelector(linkHref);

    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });

    /* Forma Alt.
    const topo = section.offsetTop; // topo de cada sessão
    window.scrollTo({
        top: topo,
        behavior: 'smooth',
    });
    */
}

linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
});
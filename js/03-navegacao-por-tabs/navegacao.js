const tabMenu = document.querySelectorAll('.tab-menu li');

const tabContent = document.querySelectorAll('tab-content section');
tabContent.classList.add('ativo');

if(tabMenu.length && tabContent.length) { 
    function activeTab(index) {
        tabContent.forEach((section) => {
            section.classList.remove('ativo');
        });
        tabContent[index].classList.add('ativo');
    }
    
    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index);
        });
    });
}

/*
HTML -> dar suporte para JS desabilitado:
<script>document.documentElement.className += (' js');</script>

Caso o JS esteja habilitado, vai adicionar a classe .js
para que a seleção no CSS funcione.
*/



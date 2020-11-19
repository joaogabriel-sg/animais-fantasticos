// TAB NAVIGATION
// Possui validação para caso não tenha os itens e para quando o js estiver desabilitado
export default function initTabNavigation() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  const activeClass = 'ativo';

  function activeTab(index) {
    tabContent.forEach((section) => section.classList.remove(activeClass));
    const direction = tabContent[index].dataset.anime;
    tabContent[index].classList.add(activeClass, direction);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activeClass);
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => activeTab(index));
    });
  }
}

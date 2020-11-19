// SCROLL ANIMATION
export default function initScrollAnimation() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const halfWindow = window.innerHeight * 0.7;

  function animeScroll() {
    sections.forEach((section) => {
      // Pega a distância até o topo da página
      const sectionTop = section.getBoundingClientRect().top;
      // Verifica se a distância até o topo meno 70% da página é menor que 0
      const isSectionVisible = sectionTop - halfWindow < 0;
      // Se for menor que 0 ele insere ou tira o elemento
      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  if (sections.length) {
    // Inicia pelo menos uma vez pra acessibilidade
    animeScroll();

    window.addEventListener('scroll', animeScroll);
  }
}

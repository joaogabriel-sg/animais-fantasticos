// SCROLL ANIMATION
export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.7;
    this.animeScroll = this.animeScroll.bind(this);
  }

  animeScroll() {
    this.sections.forEach((section) => {
      // Pega a distância até o topo da página
      const sectionTop = section.getBoundingClientRect().top;
      // Verifica se a distância até o topo meno 70% da página é menor que 0
      const isSectionVisible = sectionTop - this.halfWindow < 0;
      // Se for menor que 0 ele insere ou tira o elemento
      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  init() {
    this.animeScroll();
    window.addEventListener('scroll', this.animeScroll);
  }
}

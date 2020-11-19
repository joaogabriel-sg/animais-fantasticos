export default class Modal {
  constructor(btnOpen, btnClose, containerModal) {
    this.botaoAbrir = document.querySelector(btnOpen);
    this.botaoFechar = document.querySelector(btnClose);
    this.containerModal = document.querySelector(containerModal);

    // bind this ao callback para
    // fazer referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // Abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  // Adiciona o evento de toggle ao modal
  eventToggleModal(e) {
    e.preventDefault();
    this.toggleModal();
  }

  // Fecha o modal ao clicar do lado de fora
  cliqueForaModal(e) {
    if (e.target === this.containerModal) this.toggleModal();
  }

  // Adiciona os eventos aos elementos do modal
  addModalEvents() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}

export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // Bind do objeto da classee aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // Move a tooltip com base em seus estilos
  // dee acordo com a posição do mouse
  onMouseMove({ pageX, pageY }) {
    // a cada movimento do mouse no tooltip container (mapa), ele dá update no tooltipBox
    this.tooltipBox.style.top = `${pageY + 20}px`;
    if (pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${pageX - 180}px`;
    } else {
      this.tooltipBox.style.left = `${pageX + 20}px`;
    }
  }

  // Remove a tooltip e os eeventos de move e leave
  onMouseLeave({ currentTarget }) {
    // remove o tooltip, o evento de saída e o o evento de move
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  // Cria a tooltip box e coloca no body
  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  // Cria a tooltip e adiciona os eventos de move e leave
  // ao target
  onMouseOver({ currentTarget }) {
    // Cria a tooltip box e coloca em uma propriedade
    this.criarTooltipBox(currentTarget);

    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
    currentTarget.addEventListener('mousemove', this.onMouseMove);
  }

  // Adiciona o evento de over para cada tooltip
  addTooltipsEvent() {
    this.tooltips.forEach((tooltip) => {
      tooltip.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}

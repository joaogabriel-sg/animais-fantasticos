export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  const onMouseMove = {
    handleEvent(e) {
      // a cada movimento do mouse no tooltip container (mapa), ele dá update no tooltipBox
      this.tooltipBox.style.top = `${e.pageY + 20}px`;
      this.tooltipBox.style.left = `${e.pageX + 20}px`;
    },
  };

  const onMouseLeave = {
    handleEvent() {
      // remove o tooltip, o evento de saída e o o evento de move
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  function onMouseOver() {
    const tooltipBox = criarTooltipBox(this);

    // Digo que tooltipBox do meu objeto será a tooltip box criada
    onMouseLeave.tooltipBox = tooltipBox;
    // Digo que element do meu objeto será o this(nesse caso, a section mapa)
    onMouseLeave.element = this;
    // Dentro de um listener eu posso passar como segundo parâmetro um objeto
    // mas que esse deve conter exatamente uma função nomeada handleEvent
    this.addEventListener('mouseleave', onMouseLeave);

    onMouseMove.tooltipBox = tooltipBox;
    // Movimentar o mouse no this(nesse caso, na section mapa)
    this.addEventListener('mousemove', onMouseMove);
  }

  tooltips.forEach((tooltip) => {
    tooltip.addEventListener('mouseover', onMouseOver);
  });
}

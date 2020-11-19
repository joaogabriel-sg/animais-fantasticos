export default function outsideClick(element, events, callback) {
  // O element consiste no elemento que terá o data-outside
  const html = document.documentElement;
  const outside = 'data-outside';

  function handleOutsideClick(e) {
    // Caso meu element seja diferente do local que eu cliquei na página, ele "fecha" o element
    if (!element.contains(e.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  }

  // Caso o element contenha o atributo outside,
  // significa que ele está "aberto" e que eu poderei realizar meus events para fechá-lo
  if (!element.hasAttribute(outside)) {
    element.setAttribute(outside, '');
    events.forEach((userEvent) => {
      // Usamos isso para prevenir a ação do bubble para a parte do menu-mobile
      // que ao eu clicar no menu, que está fora do local do element, fechava automaticamente
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick);
      });
    });
  }
}

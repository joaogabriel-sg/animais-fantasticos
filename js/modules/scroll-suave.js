// INTERNAL LINKS
export default function initSmoothScrool() {
  const internalLinks = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scroolToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    // Scroll até tal elemento
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // Forma alternativa
    // const top = section.offsetTop
    // window.scrollTo({
    //     behavior: 'smooth',
    //     top
    // })
  }

  internalLinks.forEach((link) => {
    link.addEventListener('click', scroolToSection);
  });
}

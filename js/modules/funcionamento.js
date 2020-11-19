export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getUTCHours() - 3; // Brasília

  const semanaAberta = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (semanaAberta && horarioAberto) funcionamento.classList.add('aberto');
  else funcionamento.classList.add('fechado');
}

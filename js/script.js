import SmoothScroll from './modules/scroll-suave.js';
import AccordionNavigation from './modules/accordion.js';
import TabNavigation from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import DropdownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import ScrollAnima from './modules/scroll-anima.js';

const smoothScroll = new SmoothScroll('[data-menu="suave"] a[href^="#"]');
smoothScroll.init();

const accordionNav = new AccordionNavigation('[data-anime="accordion"] dt');
accordionNav.init();

const tabNav = new TabNavigation('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

initFuncionamento();

fetchAnimais('../../animaisapi.json', '.numeros-grid');

fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

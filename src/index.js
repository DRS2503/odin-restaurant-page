import './styles.css';
import { homePage } from './home.js';
import { aboutPage } from './about.js'
import { menuPage } from './Menu.js'
console.log('hello');

homePage();

const contentDiv = document.querySelector('#content');
const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', () => {
    contentDiv.textContent = ''
    homePage();
})

const aboutBtn = document.getElementById('about');
aboutBtn.addEventListener('click', () => {
    contentDiv.textContent = ''
    aboutPage();
})

const menuBtn = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
    contentDiv.textContent = ''
    menuPage();
})


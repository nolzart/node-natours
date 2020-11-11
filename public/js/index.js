/* eslint-disable */
import '@babel/polyfill';
import { login, logout } from './login';
import { displayMap } from './map';

// DOM elements
const loginForm = document.querySelector('.form');
const mapBox = document.getElementById('map');
const logoutBtn = document.querySelector('.nav__el--logout');

// Data
if (mapBox) {
    const locations = JSON.parse(mapBox.dataset.locations);
    displayMap(locations);
}

if (loginForm)
    document.querySelector('.form').addEventListener('submit', e => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        login(email, password);
    });

if (logoutBtn) logoutBtn.addEventListener('click', logout);

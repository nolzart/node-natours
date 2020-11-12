/* eslint-disable */
import '@babel/polyfill';
import { login, logout } from './login';
import { updateUserData } from './updateSettings';
import { displayMap } from './map';

// DOM elements
const loginForm = document.querySelector('.form--login');
const mapBox = document.getElementById('map');
const logoutBtn = document.querySelector('.nav__el--logout');
const formUpdateUserData = document.querySelector('.form-user-data');
// Data
if (mapBox) {
    const locations = JSON.parse(mapBox.dataset.locations);
    displayMap(locations);
}

if (loginForm)
    loginForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        login(email, password);
    });

if (logoutBtn) logoutBtn.addEventListener('click', logout);

if (formUpdateUserData)
    formUpdateUserData.addEventListener('click', e => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        updateUserData(name, email);
    });

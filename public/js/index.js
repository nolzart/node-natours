/* eslint-disable */
import '@babel/polyfill';
import { login, logout } from './login';
import { updateSettings } from './updateSettings';
import { displayMap } from './map';
import { getCheckoutSession } from './stripe';

// DOM elements
const loginForm = document.querySelector('.form--login');
const mapBox = document.getElementById('map');
const logoutBtn = document.querySelector('.nav__el--logout');
const userDataForm = document.querySelector('.form-user-data');
const userPasswordForm = document.querySelector('.form-user-password');
const bookingBtn = document.getElementById('book-tour');

// Data
if (mapBox) {
    const locations = JSON.parse(mapBox.dataset.locations);
    displayMap(locations);
}
// Login
if (loginForm)
    loginForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        login(email, password);
    });
// Logout
if (logoutBtn) logoutBtn.addEventListener('click', logout);

// Update
if (userDataForm)
    userDataForm.addEventListener('submit', e => {
        e.preventDefault();

        const form = new FormData();
        form.append('name', document.getElementById('name').value);
        form.append('email', document.getElementById('email').value);
        form.append('photo', document.getElementById('photo').files[0]);

        updateSettings(form, 'data');
    });

if (userPasswordForm)
    userPasswordForm.addEventListener('submit', async e => {
        e.preventDefault();
        // Get data
        const currentPassword = document.getElementById('password-current')
            .value;
        const password = document.getElementById('password').value;
        const passwordConfirm = document.getElementById('password-confirm')
            .value;

        document.querySelector('.btn--password').textContent = 'Updating...';
        await updateSettings(
            { currentPassword, password, passwordConfirm },
            'password'
        );
        document.querySelector('.btn--password').textContent = 'Save password';

        // Clean form
        document.getElementById('password-current').value = '';
        document.getElementById('password').value = '';
        document.getElementById('password-confirm').value = '';
    });

if (bookingBtn)
    bookingBtn.addEventListener('click', e => {
        const { tourId } = e.target.dataset;
        e.target.textContent = 'Processing...';
        getCheckoutSession(tourId);
    });

/* eslint-disable  */
const hideAlert = () => {
    const el = document.querySelector('.alert');
    if (el) el.parentElement.removeChild(el);
};

export const showAlert = (status, msg) => {
    hideAlert();
    const markup = `<div class='alert alert--${status}'>${msg}</div>`;
    document.querySelector('body').insertAdjacentHTML('afterbegin', markup);

    setTimeout(() => hideAlert(), 5000);
};

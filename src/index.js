import './css/style.scss';

let buttons = document.querySelectorAll('.footer__name-more');

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.target.closest('.footer__list').querySelector('.footer__menu-wrap').classList.toggle('hidden');
    })
});
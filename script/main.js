let buttonMenu = document.querySelector('.navigation__item__mobile-button');

buttonMenu.addEventListener('click', ()=>{
    let navigation = document.querySelector('.navigation__list');
    navigation.classList.toggle('visible');
})
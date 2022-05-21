let buttonMenu = document.querySelector('.navigation__item__mobile-button');
let navigation = document.querySelector('.navigation__list');

document.addEventListener('click', event => {
    let current =  navigation.classList.value;
    if(event.target.classList.value !== "" && current.includes('visible') &&event.target.classList!==navigation.classList){
        navigation.classList.remove('visible');
    }
})
buttonMenu.addEventListener('click', ()=> {
    navigation.classList.toggle('visible');
})


let buttonMenu = document.querySelector('.navigation__item__mobile-button');
let navigation = document.querySelector('.navigation__list');

document.addEventListener('click', event => {
    let current =  navigation.classList.value;
    if(event.target.classList.value !== "" && current.includes('visible') &&event.target.classList!==navigation.classList){
        navigation.classList.remove('visible');
        buttonMenu.classList.remove('animation');

    }
})
buttonMenu.addEventListener('click', ()=> {
    navigation.classList.toggle('visible');
    buttonMenu.classList.toggle('animation');

})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper = new Swiper(".mySwiper", {
      

      slidesPerView: 3,
      spaceBetween: 30,
      breakpoints: {
        319: {
          spaceBetween: 24,
          slidesPerView: 1.4
        },
        576: {
          spaceBetween: 30,
          slidesPerView: 2
        },
        1080: {
          spaceBetween: 40,
          slidesPerView: 3
        }
      },
      loop: true,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});



const menuButton = document.querySelector('.menu__btn'); // Выбираем один элемент кнопки
const menuList = document.querySelector('.menu__list'); // Выбираем один элемент списка
const bodyHidden = document.querySelector('body'); // Выбираем один элемент списка

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('menu__btn--active');
  menuList.classList.toggle('menu__list--active'); 
  bodyHidden.classList.toggle('body__hidden');
});




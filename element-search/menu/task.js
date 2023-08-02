let menuLink = document.querySelectorAll('.menu__link');
for(let link of menuLink){
   link.onclick = function(ev){
      let menuSub = link.closest('.menu__item').querySelector('.menu_sub');
      if(menuSub) {
         ev.preventDefault();
         menuSub.classList.toggle('menu_active');
      }
   }
}
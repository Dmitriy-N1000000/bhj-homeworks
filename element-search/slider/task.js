const left = document.querySelector('.slider__arrow_prev');
const right = document.querySelector('.slider__arrow_next');

const slider_items = Array.from(document.querySelectorAll('.slider__item'));
let activeIndex = 0;

left.onclick = function clickLeft() {
	slider_items[activeIndex].classList.remove('slider__item_active');
	activeIndex = (activeIndex - 1 + slider_items.length) % slider_items.length;
	slider_items[activeIndex].classList.add('slider__item_active');
}
right.onclick = function clickRight() {
	slider_items[activeIndex].classList.remove('slider__item_active');
	activeIndex = (activeIndex + 1) % slider_items.length;
	slider_items[activeIndex].classList.add('slider__item_active');
}
const tooltips = Array.from(document.getElementsByClassName('has-tooltip'));
const div = document.createElement('div');

div.className = 'tooltip';

tooltips.forEach(el => {
  el.addEventListener('click', ev => {
    ev.preventDefault();

    target = ev.target;

    if (target.title === div.innerText) {
      div.classList.toggle('tooltip_active');
      return;
    } 
    
    div.innerText = target.title;
    const { bottom, left } = target.getBoundingClientRect();
    div.style = `left: ${left}px; top: ${bottom}px`;
    target.insertAdjacentElement('afterEnd', div);
    div.classList.add('tooltip_active');
  })
})
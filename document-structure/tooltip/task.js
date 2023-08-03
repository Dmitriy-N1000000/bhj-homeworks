let tooltips = document.querySelectorAll('.has-tooltip');

for( let tip of tooltips) {
      tip.addEventListener('click', function(ev) {
      ev.preventDefault();
      let tooltipText = this.getAttribute('title');  
      let tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = tooltipText;
       
      tooltip.style.left = this.getBoundingClientRect().left + 'px';
      tooltip.style.top = this.getBoundingClientRect().bottom + 'px';

      let tooltipsActive = document.querySelector('.tooltip_active');
      let tooltipInactive = document.querySelector('.tooltip');

     if (tooltipsActive) {
      tooltipInactive.remove();
     }

      tip.appendChild(tooltip);
      tooltip.classList.add('tooltip_active');

    }); 
}
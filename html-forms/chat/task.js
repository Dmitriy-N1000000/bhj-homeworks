const chatWidget = document.querySelector('.chat-widget');
chatWidget.addEventListener('click', () => {
   chatWidget.classList.add('chat-widget_active');
})

const message = document.querySelector('.message');
const chatWidgetMessages = document.querySelector('.chat-widget__messages');
const chatWidgetInput = document.getElementById('chat-widget__input');

function checkTime(i) {
   if (i < 10) {
      i = "0" + i;
	}
	
	return i;
}

function startTime() {
   let today = new Date();
   let hours = today.getHours();
   let minutes = today.getMinutes();
   minutes = checkTime(minutes);
   return hours + ":" + minutes;
} 
let messageText = ['Извините, оператор временно укурен.',
	'Клиент-джан, приезжай к нам! У нас тут вообще кайф!',
	'У нас тут главного нету - потому и круто!',
	'Будешь такой злой букой - отвернётся от тебя Джа.'];
let messageTextRandom = function(el) {
   return Math.floor(Math.random() * el.length);
}
chatWidgetInput.addEventListener('keyup', ev => {
   if (ev.code === 'Enter') {
      if (chatWidgetInput.value.trim()) {
         chatWidgetMessages.innerHTML += '<div class="message message_client"><div class = "message__time">' + startTime() + '</div><div class = "message__text">' + chatWidgetInput.value + '</div></div>';
         chatWidgetInput.value = '';
         chatWidgetMessages.innerHTML += '<div class="message"><div class="message__time">' + startTime() + '</div><div class="message__text">' + messageText[messageTextRandom(messageText)] + '</div></div>';
      }
   }
})
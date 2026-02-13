const heartsContainer = document.querySelector('.hearts');
const rosesContainer = document.querySelector('.roses');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}

function createRose() {
  const rose = document.createElement('div');
  rose.classList.add('rose');
  rose.innerHTML = '🌹';
  rose.style.left = Math.random() * 100 + 'vw';
  rose.style.animationDuration = (Math.random() * 3 + 3) + 's';
  rosesContainer.appendChild(rose);
  setTimeout(() => rose.remove(), 6000);
}

setInterval(createHeart, 500);
setInterval(createRose, 800);

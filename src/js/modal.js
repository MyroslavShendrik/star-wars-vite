const cards = document.querySelectorAll('.cards__card');
const modal = document.getElementById('modal');
const modalTitle = document.querySelector('.modal__content__title');
const modalText = document.querySelector('.modal__content__text');
const modalClose = document.querySelector('.modal__content__close');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const name = card.dataset.name;
    const text = card.dataset.text;
    if(name && text){
      modalTitle.textContent = name;
      modalText.textContent = text;
      modal.classList.remove('hidden');
    }
  });
});

modalClose.addEventListener('click', () => {
  modal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
  if(e.target === modal){
    modal.classList.add('hidden');
  }
});

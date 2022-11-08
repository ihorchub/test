import Notiflix from 'notiflix';

let value = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function colorHeader() {
  // це типу функція запиту на бекенд
  const header = document.querySelector('.header');
  header.style.backgroundColor = getRandomHexColor();
}

const form = document.querySelector('.form');
const form2 = document.querySelector('.form2');

form.addEventListener('submit', handleSubmit);
form2.addEventListener('submit', handleSubmit);

form.addEventListener('change', handleChange);
form2.addEventListener('change', handleChange2);

function handleChange2(evt) {
  form.elements.input.value = evt.target.value;
}

function handleChange(evt) {
  form2.elements.input.value = evt.target.value;
}

function handleSubmit(evt) {
  evt.preventDefault();
  if (evt.target.elements.input.value === '') {
    Notiflix.Notify.failure('інпут порожній');
    return;
  }

  if (evt.target.elements.input.value === value) {
    Notiflix.Notify.failure('запит відпрацьовано');
    return;
  }

  colorHeader();
  value = evt.target.elements.input.value;
}

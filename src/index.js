import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();
  if (evt.target.elements.input.value === 'москва') {
    Notiflix.Report.failure(
      'РУСНЯВЫЙ КОНТЕНТ!',
      'Пожалуйста, подтвердите удаление всей информации с вашего девайса, иначе я запускаю функцию его самоуничтожения',
      'Удалить всю информацию',
      notify
    );
  } else {
    console.log(evt.target.elements.input.value);
  }
}

function notify() {
  Notiflix.Notify.failure('Удаляю весь контент');
  console.log('alarm');
  setTimeout(notify, 200);
}

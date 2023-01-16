import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми.
//  Нехай ключем для сховища буде рядок "feedback-form-state".
const onFormData = () => {
  const formData = { email: email.value, message: message.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};
//Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
const onSubmitForm = event => {
  event.preventDefault();

  if (email.value && message.value) {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
  }
};
// перевірка
(function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (data) {
    data.email ? (email.value = data.email) : {};
    data.message ? (message.value = data.message) : {};
  }
})();
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

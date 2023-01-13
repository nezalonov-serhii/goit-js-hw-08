import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('input'),
  textareaMessage: document.querySelector('textarea'),
};

const FEEDBACK_FORM = 'feedback-form-state';
const dataUser = {};

function setDataUser() {
  dataUser.email = refs.inputEmail.value;
  dataUser.message = refs.textareaMessage.value;

  localStorage.setItem(FEEDBACK_FORM, JSON.stringify(dataUser));
}

function getDataUser() {
  if (localStorage.getItem(FEEDBACK_FORM)) {
    const localDataUser = JSON.parse(localStorage.getItem(FEEDBACK_FORM));

    refs.inputEmail.value = localDataUser.email;
    refs.textareaMessage.value = localDataUser.message;
  }
}

function submitForm(e) {
  e.preventDefault();

  if (refs.inputEmail.value !== '' && refs.textareaMessage.value !== '') {
    console.log(dataUser);

    e.currentTarget.reset();

    localStorage.removeItem(FEEDBACK_FORM);
  }
}

getDataUser();

refs.form.addEventListener('input', throttle(setDataUser, 500));

refs.form.addEventListener('submit', submitForm);

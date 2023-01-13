import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('input'),
  textareaMessage: document.querySelector('textarea'),
};

const FEEDBACK_FORM = 'feedback-form-state';
const dataUser = {};

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

function setDataUser() {
  dataUser.email = refs.inputEmail.value;
  dataUser.message = refs.textareaMessage.value;

  // localStorage.setItem(FEEDBACK_FORM, JSON.stringify(dataUser));

  save(FEEDBACK_FORM, dataUser);
}

function getDataUser() {
  if (load(FEEDBACK_FORM)) {
    const localDataUser = load(FEEDBACK_FORM);

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

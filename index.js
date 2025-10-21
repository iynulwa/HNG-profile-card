// CLOCK
const timeElement = document.getElementById('clock');

function updateTime() {
  var currentTime = Date.now();
  timeElement.innerText = currentTime;
}

updateTime();

setInterval(updateTime, 1000);

// FORM INPUT

const fullname = document.getElementById('fullname');
const fullnameError = document.getElementById('fullname-error');

const email = document.getElementById('email');
const emailError = document.getElementById('email-error');

const subject = document.getElementById('subject');
const subjectError = document.getElementById('subject-error');

const message = document.getElementById('message');
const messageError = document.getElementById('message-error');


// FORM SUBMISSION

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const isValid = validateInput();

  if (isValid) {
    modal.showModal();
  }

  form.reset();
})

// VALIDATE INPUTS

function validateInput() {

  let isValid = true;

  const fullnameValue = fullname.value.trim();
  const messageValue = message.value.trim();

  if (!fullname.validity.valid && fullnameValue.length < 6){
    fullnameError.innerText = 'This field is required';
    isValid = false;
  } else if (fullnameValue.length < 6) {
    fullnameError.innerText = 'Fullname cannot be less than 6 characters';
    isValid = false;
  } else {
    fullnameError.innerText = '';
  }

  if (!email.validity.valid) {
    emailError.innerText = 'This field is required';
    isValid = false;
  }
  
  if (email.validity.typeMismatch) {
    emailError.innerText = 'Enter valid email';
    isValid = false;
  } 
  
  if (email.validity.valid && !email.validity.typeMismatch) {
    emailError.innerText = '';
  }

  if (!subject.validity.valid) {
    subjectError.innerText = 'This field is required';
    isValid = false;
  } else {
    subjectError.innerText = '';
  }

  if (!message.validity.valid && messageValue.length < 10) {
    messageError.innerText= 'This field is required';
    isValid = false;
  } else if (messageValue.length < 10) {
    messageError.innerText = 'Message should contain more than 10 charcaters';
    isValid = false;
  } else {
    messageError.innerText = '';
  }

  return isValid;
}

//MODAL POP-UP

const modal = document.querySelector('dialog');
const modalClose = document.querySelector('.modal-btn');

modalClose.addEventListener('click', () => {
  modal.close();
});


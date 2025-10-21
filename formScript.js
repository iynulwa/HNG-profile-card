
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
    form.reset();
  }
})

// VALIDATE INPUTS

function validateInput() {

  let isValid = true;

  const fullnameValue = fullname.value.trim();
  const messageValue = message.value.trim();

  if (!fullname.validity.valid && fullnameValue.length < 6){
        fullname.setAttribute('aria-invalid', 'true');
        
        fullnameError.innerText = 'This field is required';
        fullname.classList.add('error-border');

        isValid = false;
  } else if (fullnameValue.length < 6) {
        fullname.setAttribute('aria-invalid', 'true');

        fullnameError.innerText = 'Fullname cannot be less than 6 characters';
        fullname.classList.add('error-border');

        isValid = false;
  } else {
        fullname.setAttribute('aria-invalid', 'false');
        fullnameError.innerText = '';
        fullname.classList.remove('error-border');
  }

  if (!email.validity.valid) {
        email.setAttribute('aria-invalid', 'true');

        emailError.innerText = 'This field is required';
        email.classList.add('error-border');

        isValid = false;
  }
  
  if (email.validity.typeMismatch) {
        email.setAttribute('aria-invalid', 'true');

        emailError.innerText = 'Enter valid email';
        email.classList.add('error-border');

        isValid = false;
  } 
  
  if (email.validity.valid && !email.validity.typeMismatch) {
        email.setAttribute('aria-invalid', 'false');

        emailError.innerText = '';
        email.classList.remove('error-border');
  }

  if (!subject.validity.valid) {
        subject.setAttribute('aria-invalid', 'true');

        subjectError.innerText = 'This field is required';
        subject.classList.add('error-border');

        isValid = false;
  } else {
        subject.setAttribute('aria-invalid', 'false');

        subjectError.innerText = '';
        subject.classList.remove('error-border');
  }

  if (!message.validity.valid && messageValue.length < 10) {
        message.setAttribute('aria-invalid', 'true');

        messageError.innerText= 'This field is required';
        message.classList.add('error-border');

        isValid = false;
  } else if (messageValue.length < 10) {
        message.setAttribute('aria-invalid', 'true');

        messageError.innerText = 'Message should contain more than 10 charcaters';
        message.classList.add('error-border');

        isValid = false;
  } else {
        message.setAttribute('aria-invalid', 'false');
        
        messageError.innerText = '';
        message.classList.remove('error-border');
  }

  return isValid;
}

//MODAL POP-UP

const modal = document.querySelector('dialog');
const modalClose = document.querySelector('.modal-btn');

modalClose.addEventListener('click', () => {
  modal.close();
});
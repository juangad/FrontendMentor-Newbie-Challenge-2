const form = document.querySelector('#content form')
const email = document.querySelector('#content form input')

form.addEventListener('submit', e => {
  e.preventDefault();

  const emailValue = email.value
  if (validateEmail(emailValue)) {
    form.classList.remove('error')
    alert(`submitted: ${emailValue}`)
  } else {
    form.classList.add('error')
  }
})

function validateEmail (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
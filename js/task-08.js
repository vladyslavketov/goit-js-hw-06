const form = document.querySelector("form.login-form");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const password = formEl.password.value;
  const user = {
    email,
    password,
  }

  if (email === "" || password === "") {
    alert ('Всі поля повинні бути заповнені.')
  } else {
    console.log(user);
    form.reset();
  }
}
const form = document.querySelector(".login-form");

form.addEventListener("submit", onMainSubmit);

function onMainSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Вы заполнили не все поля формы!");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

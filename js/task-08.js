const form = document.querySelector(".login-form");

form.addEventListener("submit", onMainSubmit);

function onMainSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
     return alert("Ви заповнили не всі поля форми!");
  }

      const formData = {
        email: email.value,
        password: password.value,
    };
  console.log(formData);
  event.currentTarget.reset();
};
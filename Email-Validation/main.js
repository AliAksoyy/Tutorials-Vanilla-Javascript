function validation() {
  let form = document.getElementById("form");
  let email = document.getElementById("email");
  let text = document.getElementById("text");
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
console.log(email.value.match(pattern));

  if (email.value.match(pattern)) {
    console.log(email.match(pattern));
    form.classList.add("valid");
    form.classList.remove("invalid");
  } else {
    form.classList.add("invalid");
    form.classList.remove("valid");
  }
}
validation()
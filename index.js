const username = document.querySelector("input[type=text]");

const password = document.querySelector("input[type=password]");
// username.addEventListener("input", () => console.log(username.value));
// password.addEventListener("input", () => console.log(password.value));
// username.addEventListener("change", () => {
//   console.log(username.value);
// });

const staff = [
  {
    username: "Ahmed",
    password: "12345",
  },
  {
    username: "Ahme",
    password: "1234",
  },
  {
    username: "Ahm",
    password: "123",
  },
];

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  for (let i = 0; i < staff.length; i++) {
    if (
      username.value == staff[i].username &&
      password.value == staff[i].password
    ) {
      console.log(username.value + " is logged in");
      return;
    } else {
      console.log("incorrect");
      return;
    }
  }
});

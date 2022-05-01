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
  {
    username: "Sola",
    password: "12345",
  },
  {
    username: "Kabiru",
    password: "12345",
  },
  {
    username: "Ade",
    password: "12345",
  },
];

const username = document.querySelector("input[type=text]");

const password = document.querySelector("#password");
// username.addEventListener("input", () => console.log(username.value));
// password.addEventListener("input", () => console.log(password.value));
// username.addEventListener("change", () => {
//   console.log(username.value);
// });
let form = document.querySelector("form");
form.onsubmit = () => {
  return false;
};
const button = document.querySelector("button");
console.log(button);

let infoMismatched = document.querySelector("div + span");

button.onclick = () => {
  if (username.value != "" && password.value != "") {
    for (let i = 0; i < staff.length; i++) {
      if (
        username.value == staff[i].username &&
        password.value == staff[i].password
      ) {
        form.onsubmit = () => {
          return 1;
        };
      } else {
        if (
          username.value != staff[i].username ||
          password.value != staff[i].password
        ) {
          infoMismatched.textContent = "Username or Password not valid";
        }
      }
    }
  } else {
    if (username.value == "") {
      username.nextElementSibling.textContent = "Enter Username";
      setTimeout(() => {
        username.nextElementSibling.textContent = "";
      }, 3000);
    }
    if (password.value == "") {
      password.nextElementSibling.textContent = "Enter password";
      setTimeout(() => {
        password.nextElementSibling.textContent = "";
      }, 3000);
    }
  }
};

// button.addEventListener("click", (e) => {
//   for (let i = 0; i < staff.length; i++) {
//     if (
//       username.value == staff[i].username &&
//       password.value == staff[i].password
//     ) {
//       form.onsubmit = () => {
//         return true;
//       };
//       console.log("logged in");

//       return;
//     } else {
//       console.log("incorrect");
//       return;
//     }
//   }
// });

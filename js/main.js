function fetchfunction() {
  document.getElementById("i");
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

fetchfunction();

// const datatouse = data;
// const logdata = (el, index, arr) => {
//   console.log(el, index, arr);
// };

// const formatedArray = datatouse.map((el, index, arr) => {
//   return {
//     name: el.name,
//     email: el.email,
//     addres: el.addres,
//   };
// });

gettext("https://jsonplaceholder.typicode.com/users");
async function gettext(name, addres, email) {
  let x = await fetch(name, addres, email);
  let y = await x.text();
  document.getElementById("i").innerHTML = y;
}

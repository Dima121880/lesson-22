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

// gettext("https://jsonplaceholder.typicode.com/users");
// async function gettext(name, addres, email) {
//   let x = await fetch(name, addres, email);
//   let y = await x.text();
//   document.getElementById("i").innerHTML = y;
// }

// let file = "https://jsonplaceholder.typicode.com/users";
// fetch(file)
//   .then((x) => x.text(file.name))
//   .then((y) => (document.getElementById("i").innerHTML = file.name))
//   // document.getElementById("i").innerHTML = x;
//   // .then((response) => response.json())
//   .then((data) => console.log(data));
// // .catch((error) => console.error(error));

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const userList = document.getElementById("userList");

    const filteredData = data.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
      };
    });

    filteredData.forEach((user) => {
      userList.innerHTML += `
              <div class="user-card">
                  <p>ID: ${user.id}</p>
                  <p>სახელი: ${user.name}</p>
                  <p>ემაილი: ${user.email}</p>
                  <hr>
              </div>
          `;
    });
  })
  .catch((error) => console.error("Error:", error));

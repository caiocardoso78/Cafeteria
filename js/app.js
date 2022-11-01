const container = document.querySelector(".container");
const coffees = [
  {
    name: "Café expresso",
    image: "images/coffee1.jpg"
  },
  {
    name: "Café com leite",
    image: "images/coffee2.jpg"
  },
  {
    name: "Capuccino",
    image: "images/coffee3.jpg"
  },
  {
    name: "Mocha",
    image: "images/coffee4.jpg"
  },
  {
    name: "Café com chantilly",
    image: "images/coffee5.jpg"
  },
  {
    name: "Pingado",
    image: "images/coffee6.jpg"
  },
  {
    name: "Macchiato",
    image: "images/coffee7.jpg"
  },
  {
    name: "Café coado",
    image: "images/coffee8.jpg"
  },
  {
    name: "Pequeno",
    image: "images/coffee9.jpg"
  }
];

const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar"${image}/>
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Fazer pedido</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}

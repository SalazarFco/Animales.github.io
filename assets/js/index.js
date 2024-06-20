// archivo: index.js
import { Leon } from "./Leon.js";
import { Lobo } from "./Lobo.js";
import { Oso } from "./Oso.js";
import { Serpiente } from "./Serpiente.js";
import { Aguila } from "./Aguila.js";
import { Tigre } from "./Tigre.js";

const animales = [];

document.getElementById("btnRegistrar").addEventListener("click", () => {
  const animalSeleccionado = document.getElementById("animal").value;
  const edad = document.getElementById("edad").value;
  const comentarios = document.getElementById("comentarios").value;

  let nuevoAnimal;

  switch (animalSeleccionado) {
    case "Leon":
      nuevoAnimal = new Leon(
        "León",
        edad,
        "assets/imgs/Leon.png",
        comentarios,
        "assets/sounds/Rugido.mp3"
      );
      break;
    case "Lobo":
      nuevoAnimal = new Lobo(
        "Lobo",
        edad,
        "assets/imgs/Lobo.jpg",
        comentarios,
        "assets/sounds/Aullido.mp3"
      );
      break;
    case "Oso":
      nuevoAnimal = new Oso(
        "Oso",
        edad,
        "assets/imgs/Oso.jpg",
        comentarios,
        "assets/sounds/Gruñido.mp3"
      );
      break;
    case "Serpiente":
      nuevoAnimal = new Serpiente(
        "Serpiente",
        edad,
        "assets/imgs/Serpiente.jpg",
        comentarios,
        "assets/sounds/Siseo.mp3"
      );
      break;
    case "Aguila":
      nuevoAnimal = new Aguila(
        "Águila",
        edad,
        "assets/imgs/Aguila.png",
        comentarios,
        "assets/sounds/Chillido.mp3"
      );
      break;
    case "Tigre":
      nuevoAnimal = new Tigre(
        "Tigre",
        edad,
        "assets/imgs/lion.svg",
        comentarios,
        "assets/sounds/Tigre.mp3"
      );
      break;
    default:
      console.error("Animal no reconocido");
      return;
  }

  animales.push(nuevoAnimal);
  mostrarAnimales();
  document.getElementById("animalForm").reset();
});

function mostrarAnimales() {
  const contenedorAnimales = document.getElementById("Animales");
  contenedorAnimales.innerHTML = "";

  animales.forEach((animal) => {
    const animalDiv = document.createElement("div");
    animalDiv.className = "card m-2";
    animalDiv.style.width = "10rem";
    animalDiv.innerHTML = `
      <img src="${animal.Img}" class="card-img-top" alt="${animal.Nombre}">
      <div class="card-body">
        <h5 class="card-title">${animal.Nombre}</h5>
        <p class="card-text">Edad: ${animal.Edad}</p>
        <button class="btn btn-primary" onclick="reproducirSonido('${animal.Sonido}')">Sonido</button>
      </div>
    `;
    contenedorAnimales.appendChild(animalDiv);
  });
}

window.reproducirSonido = function (sonido) {
  const player = document.getElementById("player");
  player.src = sonido;
  player.play();
};

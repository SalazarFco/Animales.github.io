import { Animal } from "./Animal.js";

export class Tigre extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  rugir() {
    return this.sonido;
  }
}

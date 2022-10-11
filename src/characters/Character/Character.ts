import CharacterStructure from "./types.js";

class Character implements CharacterStructure {
  isAlive = true;
  series = "Juego de Tronos";
  imagePath: string;

  constructor(public name: string, public family: string, public age: number) {
    this.name = name;
    this.family = family;
    this.age = age;
  }

  communicate() {
    return `${this.name} dice: `;
  }

  die() {
    this.isAlive = false;
  }
}

export default Character;

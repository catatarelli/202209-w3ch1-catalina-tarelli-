import CharacterStructure from "./types.js";

class Character implements CharacterStructure {
  name;
  family;
  age;
  isAlive = true;
  series = "Juego de Tronos";

  constructor(name: string, family: string, age: number) {
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

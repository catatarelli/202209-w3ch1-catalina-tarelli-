import Character from "../Character/Character.js";

class Advisor extends Character {
  advises;
  constructor(
    name: string,
    family: string,
    age: number,
    assessedCharacter: string
  ) {
    super(name, family, age);
    this.advises = assessedCharacter;
  }

  communicate() {
    return `${super.communicate()}No sé por qué, pero creo que voy a morir pronto`;
  }
}

export default Advisor;

import Character from "../Character/Character.js";
import AdvisorStructure from "./types.js";

class Advisor extends Character implements AdvisorStructure {
  advises;
  constructor(
    name: string,
    family: string,
    age: number,
    advisedCharacter: string
  ) {
    super(name, family, age);
    this.advises = advisedCharacter;
  }

  communicate() {
    return `${super.communicate()}No sé por qué, pero creo que voy a morir pronto`;
  }
}

export default Advisor;

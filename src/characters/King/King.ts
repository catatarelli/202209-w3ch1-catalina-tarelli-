import Character from "../Character/Character.js";
import KingStructure from "./types.js";
class King extends Character implements KingStructure {
  constructor(
    name: string,
    family: string,
    age: number,
    public yearsOfReign: number
  ) {
    super(name, family, age);
  }

  communicate(): string {
    return `${super.communicate()}Vais a morir todos`;
  }
}

export default King;

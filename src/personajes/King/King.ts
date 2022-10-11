import Character from "../../characters/Character/Character.js";

class King extends Character {
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

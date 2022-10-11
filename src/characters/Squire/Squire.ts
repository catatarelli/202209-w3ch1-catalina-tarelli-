import Character from "../Character/Character.js";
import SquireStructure from "./types.js";

class Squire extends Character implements SquireStructure {
  serves;
  kissAssLevel;
  constructor(
    name: string,
    family: string,
    age: number,
    kissAssLevel: number,
    serves: string
  ) {
    super(name, family, age);
    this.kissAssLevel = this.filterKissAssLevel(kissAssLevel);
    this.serves = serves;
  }

  filterKissAssLevel(kissAssLevel: number) {
    if (kissAssLevel < 0) {
      return 0;
    } else if (kissAssLevel > 10) {
      return 10;
    } else {
      return kissAssLevel;
    }
  }

  communicate(): string {
    return `${super.communicate()}Soy un loser`;
  }
}

export default Squire;

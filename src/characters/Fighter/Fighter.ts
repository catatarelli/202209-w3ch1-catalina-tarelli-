import Character from "../Character/Character.js";

class Fighter extends Character {
  weapon;
  dexterity;

  constructor(
    name: string,
    family: string,
    age: number,
    weapon: string,
    dexterity: number
  ) {
    super(name, family, age);
    this.weapon = weapon;
    this.dexterity = this.filterDexterity(dexterity);
  }

  filterDexterity(dexterity: number) {
    if (dexterity < 0) {
      return 0;
    } else if (dexterity > 10) {
      return 10;
    } else {
      return dexterity;
    }
  }

  communicate() {
    return `${super.communicate()}Primero pego y luego pregunto`;
  }
}

export default Fighter;

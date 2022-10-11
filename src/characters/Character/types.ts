interface CharacterStructure {
  name: string;
  family: string;
  age: number;
  isAlive: true;
  series: string;
  communicate: () => string;
  die: () => void;
}

export default CharacterStructure;

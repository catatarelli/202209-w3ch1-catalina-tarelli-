interface CharacterStructure {
  name: string;
  family: string;
  age: number;
  isAlive: boolean;
  series: string;
  communicate: () => string;
  die: () => void;
}

export default CharacterStructure;

import Personaje from "./Personaje.js";

class Escudero extends Personaje {
  sirveA;
  pelotismo;
  constructor(
    nombreEscudero: string,
    familiaEscudero: string,
    edadEscudero: number,
    valorPelotismo: number,
    personajeSirve: string
  ) {
    super(nombreEscudero, familiaEscudero, edadEscudero);
    this.pelotismo = this.filtrarPelotismo(valorPelotismo);
    this.sirveA = personajeSirve;
  }

  filtrarPelotismo(gradoPelotismo: number) {
    if (gradoPelotismo < 0) {
      return 0;
    } else if (gradoPelotismo > 10) {
      return 10;
    } else {
      return gradoPelotismo;
    }
  }

  comunicar() {
    return `${super.comunicar()}Soy un loser`;
  }
}

export default Escudero;

import Personaje from "./Personaje.js";

class Rey extends Personaje {
  anyosReinado;

  constructor(
    nombreRey: string,
    familiaRey: string,
    edadRey: number,
    anyosReinadoRey: number
  ) {
    super(nombreRey, familiaRey, edadRey);
    this.anyosReinado = anyosReinadoRey;
  }

  comunicar() {
    return `${super.comunicar()}Vais a morir todos`;
  }
}

export default Rey;

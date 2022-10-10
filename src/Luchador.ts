import Personaje from "./Personaje.js";

class Luchador extends Personaje {
  arma;
  destreza;

  constructor(
    nombreLuchador: string,
    familiaLuchador: string,
    edadLuchador: number,
    armaLuchador: string,
    valorDestreza: number
  ) {
    super(nombreLuchador, familiaLuchador, edadLuchador);
    this.arma = armaLuchador;
    this.destreza = this.filtraDestreza(valorDestreza);
  }

  filtraDestreza(valorDestreza: number) {
    if (valorDestreza < 0) {
      return 0;
    } else if (valorDestreza > 10) {
      return 10;
    } else {
      return valorDestreza;
    }
  }

  comunicar() {
    return `${super.comunicar()}Primero pego y luego pregunto`;
  }
}

export default Luchador;

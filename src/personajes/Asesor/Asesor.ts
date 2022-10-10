import Personaje from "../../Personaje.js";

class Asesor extends Personaje {
  asesorado;
  constructor(
    nombreAsesor: string,
    familiaAsesor: string,
    edadAsesor: number,
    personajeAsesorado: string
  ) {
    super(nombreAsesor, familiaAsesor, edadAsesor);
    this.asesorado = personajeAsesorado;
  }

  comunicar() {
    return `${super.comunicar()}No sé por qué, pero creo que voy a morir pronto`;
  }
}

export default Asesor;

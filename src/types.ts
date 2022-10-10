interface EstructuraPersonaje {
  nombre: string;
  familia: string;
  edad: number;
  vivo: true;
  serie: string;
  comunicar: () => string;
  muere: () => void;
}

export default EstructuraPersonaje;

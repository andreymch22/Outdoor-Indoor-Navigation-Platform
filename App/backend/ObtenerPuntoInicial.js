import { PUNTOS } from "../db";

const encontrarPuntoCercano = (puntoInicial, puntosExistentes) => {
    let puntoCercano = null;
    let distanciaMinima = Infinity;

    for (const punto of puntosExistentes) {
        if (punto.nivel === puntoInicial.nivel) {
            const distancia = calcularDistancia(puntoInicial, punto);
            if (distancia < distanciaMinima) {
                puntoCercano = punto;
                distanciaMinima = distancia;
            }
        }
    }
    return puntoCercano;
}

// Función para calcular la distancia entre dos puntos utilizando la fórmula de la distancia euclidiana
function calcularDistancia(punto1, punto2) {
    const diferenciaLatitud = punto2.latitud - punto1.latitud;
    const diferenciaLongitud = punto2.longitud - punto1.longitud;
    return Math.sqrt(
        Math.pow(diferenciaLatitud, 2) + Math.pow(diferenciaLongitud, 2)
    );
}

// Ejemplo de uso
const puntoInicial = { latitud: 1.0, longitud: 1.0, nombre: "Punto X", nivel: 0 };
const puntosExistentes = [PUNTOS.puntoA, PUNTOS.puntoB, PUNTOS.puntoC, PUNTOS.puntoD];

console.log("Punto cercano:", encontrarPuntoCercano(puntoInicial, puntosExistentes));

export{encontrarPuntoCercano};
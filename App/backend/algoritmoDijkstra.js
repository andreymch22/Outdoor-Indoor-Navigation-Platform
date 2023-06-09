import { encontrarPuntoCercano } from "./ObtenerPuntoInicial";
import { PUNTOS } from "../db";
const puntoCercano = { latitud: 1.0, longitud: 1.0, nombre: "Partida", nivel: 0 }
const newPoint =  encontrarPuntoCercano(puntoPartida, PUNTOS)
// Función para encontrar la ruta más corta utilizando el algoritmo de Dijkstra
function encontrarRutaMasCorta(newPoint, puntoLlegada, rutas) {
    // Crear un mapa de nodos y distancias
    const nodos = new Map();
    nodos.set(puntoPartida, { distancia: 0, ruta: [puntoPartida] });

    // Crear un conjunto de nodos visitados
    const nodosVisitados = new Set();

    while (nodos.size > 0) {
        // Encontrar el nodo con la distancia mínima
        let nodoActual = null;
        let distanciaMinima = Infinity;
        for (const [nodo, info] of nodos.entries()) {
            if (!nodosVisitados.has(nodo) && info.distancia < distanciaMinima) {
                nodoActual = nodo;
                distanciaMinima = info.distancia;
            }
        }
        // Si no se encontró un nodo válido, salir del bucle
        if (nodoActual === null) {
            break;
        }
        // Marcar el nodo actual como visitado
        nodosVisitados.add(nodoActual);
        // Obtener las rutas que se conectan al nodo actual
        const rutasConectadas = rutas.filter(
            (ruta) =>
                ruta.puntoA === nodoActual || ruta.puntoB === nodoActual
        );
        // Actualizar las distancias y rutas de los nodos conectados
        for (const ruta of rutasConectadas) {
            const nodoVecino = ruta.puntoA === nodoActual ? ruta.puntoB : ruta.puntoA;
            if (nodosVisitados.has(nodoVecino)) {
                continue;
            }
            const pesoTotal = distanciaMinima + ruta.peso;
            if (!nodos.has(nodoVecino) || pesoTotal < nodos.get(nodoVecino).distancia) {
                nodos.set(nodoVecino, {
                    distancia: pesoTotal,
                    ruta: nodos.get(nodoActual).ruta.concat(nodoVecino),
                });
            }
        }
    }
    // Obtener la ruta más corta y su peso total
    const rutaMasCorta = nodos.get(puntoLlegada).ruta;
    const pesoTotalRuta = nodos.get(puntoLlegada).distancia;

    return { ruta: rutaMasCorta, pesoTotal: pesoTotalRuta };
}

// Llamar a la función para encontrar la ruta más corta
const resultado = encontrarRutaMasCorta(PUNTOS.puntoPartida, PUNTOS.puntoLlegada, RUTAS);

// Imprimir el resultado
console.log("Ruta más corta:", resultado.ruta);
console.log("Peso total:", resultado.pesoTotal);


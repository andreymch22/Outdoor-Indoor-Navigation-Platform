const PUNTOS_TEC = {
    puntoA: { latitud: 10.361434550039517, longitud: -84.50920962957525, nombre: "Colegio Cientifico de Costa Rica", nivel: 1 },
    puntoB: { latitud: 10.362575139808184, longitud: -84.51039965724325, nombre: "Baños del Laboratorio de Ingenieria en Computacion", nivel: 1 },
    puntoC: { latitud: 10.361419937916878, longitud: -84.5100667151496, nombre: "Escuela Ingenieria en Computacion", nivel: 2 },
    puntoD: { latitud: 10.362709877818935, longitud: -84.51040828354408, nombre: "Laboratorios Ingenieria en Computacion", nivel: 1 },
    puntoE: { latitud: 10.361864273539009, longitud: -84.51010047729717, nombre: "Comedor Institucional del TEC", nivel: 1 },
    puntoF: { latitud: 10.360725157673233, longitud: -84.50970053359863, nombre: "Baños Biblioteca", nivel: 1 },
    puntoG: { latitud: 10.360722762508287, longitud: -84.50887631127634, nombre: "CTEC Centro de Transferencia Tecnologia y Educacion Continua", nivel: 1 },
    puntoH: { latitud: 10.360349262491532, longitud: -84.50976158617898, nombre: "24/7", nivel: 1 },
    puntoI: { latitud: 10.360654788942538, longitud: -84.50965667564459, nombre: "Biblioteca", nivel: 1 },
    //Entradas
    puntoJ: { latitud: 10.360760724960363, longitud: -84.50748521172893, nombre: "Entrada Casetilla Guardas", nivel: 1 },
    puntoK: { latitud: 10.359985230975427, longitud: -84.50894951855557, nombre: "Entrada Principal Peatonal", nivel: 1 },
    //puntos de conexion
    puntoL: { latitud: 10.360376828916138, longitud: -84.50917685599053, nombre: "PuntoA", nivel: 1 },
    puntoM: { latitud: 10.36059780140954, longitud: -84.5088174399828, nombre: "PuntoB", nivel: 1 },

    puntoN: { latitud: 10.360693951699181, longitud: -84.50758639635288, nombre: "PuntoC", nivel: 1 },
    puntoP: { latitud: 10.361054634916025, longitud: -84.50833577199803, nombre: "PuntoD", nivel: 1 },
    puntoQ: { latitud: 10.360950751543145, longitud: -84.50856218990536, nombre: "PuntoE", nivel: 1 },
};

const PUNTOS_TEC_ENTRADAS = {
    puntoJ: { latitud: 10.360760724960363, longitud: -84.50748521172893, nombre: "Entrada Casetilla Guardas", nivel: 1 },
    puntoK: { latitud: 10.359985230975427, longitud: -84.50894951855557, nombre: "Entrada Principal Peatonal", nivel: 1 }
}


const RUTAS_TEC = [
    //Ruta 1
    { puntoA: PUNTOS_TEC.puntoK, puntoB: PUNTOS_TEC.puntoL, peso: 48 },
    { puntoA: PUNTOS_TEC.puntoL, puntoB: PUNTOS_TEC.puntoM, peso: 46 },
    { puntoA: PUNTOS_TEC.puntoM, puntoB: PUNTOS_TEC.puntoG, peso: 15 },
    //Ruta 2
    { puntoA: PUNTOS_TEC.puntoJ, puntoB: PUNTOS_TEC.puntoN, peso: 13 },
    { puntoA: PUNTOS_TEC.puntoN, puntoB: PUNTOS_TEC.puntoP, peso: 91 },
    { puntoA: PUNTOS_TEC.puntoP, puntoB: PUNTOS_TEC.puntoQ, peso: 27 },
    { puntoA: PUNTOS_TEC.puntoQ, puntoB: PUNTOS_TEC.puntoG, peso: 42 },

];

var AREA_TEC = [
    { latitud: 10.360812, longitud: -84.507278 }, // entrada guardas
    { latitud: 10.359964, longitud: -84.508938 }, // cajero
    { latitud: 10.359699, longitud: -84.509746 }, // arboles
    { latitud: 10.361050, longitud: -84.511640 }, // escuela idiomas
    { latitud: 10.360406, longitud: -84.513362 }, // lecheria abajo
    { latitud: 10.361692, longitud: -84.514060 }, // lecheria arriba
    { latitud: 10.366882, longitud: -84.513573 }, // casas profes izq
    { latitud: 10.367439, longitud: -84.512486 }, // casas profes der
    { latitud: 10.364915, longitud: -84.507899 }, // bio tec arriba
    { latitud: 10.363912, longitud: -84.507282 }, // bio tec abajo
    { latitud: 10.361421, longitud: -84.508596 }, // abajo de los cocodrilos
];

//const newPoint = encontrarPuntoCercano(puntoPartida, PUNTOS_TEC)
// Función para encontrar la ruta más corta utilizando el algoritmo de Dijkstra
function encontrarRutaMasCorta(puntoPartida, puntoLlegada, rutas) {
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
            console.log(pesoTotal, "-----")
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

//------------------------------
// DISTANCIA ENTRE PUNTOS
const encontrarPuntoCercano = (puntoInicial) => {
    let puntoCercano = null;
    let distanciaMinima = Infinity;
    const puntos = puntoDentroFigura(puntoInicial, AREA_TEC) ? PUNTOS_TEC : PUNTOS_TEC_ENTRADAS;
    for (const punto in puntos) {
        if (puntos[punto].nivel === puntoInicial.nivel) {
            const distancia = calcularDistancia(puntoInicial, puntos[punto]);
            if (distancia < distanciaMinima) {
                puntoCercano = puntos[punto];
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

//------------------------------
// DISTANCIA ENTRE PUNTOS
const puntoDentroFigura = (punto, figura) => {
    // Obtener las coordenadas del punto
    var puntoLat = punto.latitud;
    var puntoLng = punto.longitud;

    // Contador para el número de intersecciones
    var intersecciones = 0;

    // Recorrer cada lado de la figura
    for (var i = 0; i < figura.length; i++) {
        var punto1 = figura[i];
        var punto2 = figura[(i + 1) % figura.length];

        // Obtener las coordenadas de los puntos que forman el lado
        var lat1 = punto1.latitud;
        var lng1 = punto1.longitud;
        var lat2 = punto2.latitud;
        var lng2 = punto2.longitud;

        // Verificar si el rayo cruza el lado
        if (
            (lat1 > puntoLat && lat2 <= puntoLat) ||
            (lat2 > puntoLat && lat1 <= puntoLat)
        ) {
            var interseccionLng =
                ((puntoLat - lat1) * (lng2 - lng1)) / (lat2 - lat1) + lng1;

            // Verificar si la intersección está a la derecha del punto
            if (interseccionLng > puntoLng) {
                intersecciones++;
            }
        }
    }

    // Si el número de intersecciones es impar, el punto está dentro de la figura
    return intersecciones % 2 === 1;
}


// Apartamentos Brattis
var punto1 = { latitud: 10.36108004043027, longitud: -84.50708948041648, nivel: 1 };
//Parqueo CTEC
var punto2 = { latitud: 10.360446529840855, longitud: -84.50816159829559, nivel: 1 };
// Verificar si el punto está dentro de la figura
//var resultado1 = puntoDentroFigura(punto1, figura);
var resultado3 = puntoDentroFigura(punto2, AREA_TEC);


// Imprimir el resultado
//console.log(resultado1);
//console.log(resultado3);
//console.log(encontrarPuntoCercano(punto1));
const resultado = encontrarRutaMasCorta(encontrarPuntoCercano(punto1), PUNTOS_TEC.puntoG, RUTAS_TEC)
// Ejemplo de uso
//const puntoInicial = { latitud: 1.0, longitud: 1.0, nombre: "Punto X", nivel: 0 };
//const puntosExistentes = [PUNTOS.puntoA, PUNTOS.puntoB, PUNTOS.puntoC, PUNTOS.puntoD];

//console.log("Punto cercano:", encontrarPuntoCercano(puntoInicial, puntosExistentes));


// Llamar a la función para encontrar la ruta más corta
//const resultado = encontrarRutaMasCorta(PUNTOS.puntoPartida, PUNTOS.puntoLlegada, RUTAS);

// Imprimir el resultado
console.log("Ruta más corta:", resultado.ruta);
console.log("Peso total:", resultado.pesoTotal);
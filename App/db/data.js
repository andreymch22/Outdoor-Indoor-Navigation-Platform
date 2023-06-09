const PUNTOS = {
    puntoPartida: { latitud: 0.0, longitud: 0.0, nombre: "Partida", nivel: 0 },
    puntoLlegada: { latitud: 10.0, longitud: 10.0, nombre: "Llegada", nivel: 0 },
    //Puntos complementarios
    puntoA: { latitud: 2.0, longitud: 2.0, nombre: "Punto A", nivel: 0 },
    puntoB: { latitud: 4.0, longitud: 4.0, nombre: "Punto B", nivel: 0 },
    puntoC: { latitud: 6.0, longitud: 6.0, nombre: "Punto C", nivel: 0 },
    puntoD: { latitud: 8.0, longitud: 8.0, nombre: "Punto D", nivel: 0 },
}

const PUNTOS_TEC= [
    { latitud:10.361434550039517 , longitud:-84.50920962957525 , nombre: "Colegio Cientifico de Costa Rica", nivel:1  },
    { latitud:10.362575139808184 , longitud:-84.51039965724325 , nombre:"Baños del Laboratorio de Ingenieria en Computacion" , nivel:  },
    { latitud:10.361419937916878, longitud:-84.5100667151496 , nombre:"Escuela Ingenieria en Computacion" , nivel:2  },
    { latitud:10.362709877818935 , longitud:-84.51040828354408 , nombre:"Laboratorios Ingenieria en Computacion" , nivel:1  },
    { latitud:10.361864273539009 , longitud:-84.51010047729717 , nombre:"Comedor Institucional del TEC" , nivel:1  },
    { latitud:10.360725157673233, longitud:-84.50970053359863 , nombre:"Baños Biblioteca" , nivel:1  },
    { latitud:10.360722762508287 , longitud:-84.50887631127634 , nombre:"CTEC Centro de Transferencia Tecnologia y Educacion Continua" , nivel:1  },
    { latitud:10.360349262491532 , longitud:-84.50976158617898 , nombre:"24/7" , nivel:1  },
    { latitud:10.360654788942538 , longitud:-84.50965667564459 , nombre:"Biblioteca" , nivel:1  },
]
const RUTAS = [
    { puntoA: PUNTOS.puntoPartida, puntoB: PUNTOS.puntoA, peso: 10 },
    { puntoA: PUNTOS.puntoPartida, puntoB: PUNTOS.puntoB, peso: 4 },
    { puntoA: PUNTOS.puntoA, puntoB: PUNTOS.puntoC, peso: 3 },
    { puntoA: PUNTOS.puntoB, puntoB: PUNTOS.puntoD, peso: 5 },
    { puntoA: PUNTOS.puntoC, puntoB: PUNTOS.puntoLlegada, peso: 2 },
    { puntoA: PUNTOS.puntoD, puntoB: PUNTOS.puntoLlegada, peso: 3 }
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

export {PUNTOS, RUTAS, AREA_TEC}
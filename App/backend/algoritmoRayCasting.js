//import { PUNTOS } from "../db";
// algoritmo de Ray Casting en JavaScript
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
  
  // Ejemplo de uso
  
  // Definir los puntos de la figura irregular (en sentido horario o antihorario)
  
  var figura = [
    { latitud: 0.0, longitud: 0.0 },
    { latitud: 2.0, longitud: 4.0 },
    { latitud: 4.0, longitud: 1.0 },
    { latitud: 2.0, longitud: -2.0}
  ];
  // Definir el punto a verificar
  
  //var punto = { latitud: 4, longitud: 2 };
  
  // Apartamentos Brattis
  var punto1 = { latitud: 10.36108004043027, longitud: -84.50708948041648 };
  //Parqueo CTEC
  var punto2 = { latitud: 10.360446529840855, longitud: -84.50816159829559 };

  var punto3 = { latitud: 1.0, longitud: 1.0 };
  // Verificar si el punto está dentro de la figura
  //var resultado1 = puntoDentroFigura(punto1, figura);
  var resultado3 = puntoDentroFigura(punto3, figura);

  
  // Imprimir el resultado
  //console.log(resultado1);
  console.log(resultado3);

  //export{puntoDentroFigura}
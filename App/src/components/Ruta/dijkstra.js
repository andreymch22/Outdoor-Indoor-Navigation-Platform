
// Función para encontrar el nodo con la distancia mínima
function encontrarNodoMinimo(distancias, visitados) {
    let nodoMinimo = null;
    let distanciaMinima = Infinity;
  
    for (const nodo in distancias) {
      const distancia = distancias[nodo];
  
      // Si el nodo no ha sido visitado y tiene una distancia menor a la mínima actual, actualizar la mínima
      if (!visitados[nodo] && distancia < distanciaMinima) {
        nodoMinimo = nodo;
        distanciaMinima = distancia;
      }
    }
  
    return nodoMinimo;
  }
  
  // Función para encontrar la ruta más corta utilizando el algoritmo de Dijkstra
  export async function encontrarRutaMasCorta(inicio, final) {
    const rutaRef = firebase.firestore().collection('Ruta');
    const snapshot = await rutaRef.get();
  
    const grafo = {};
  
    // Construir el grafo a partir de los documentos de la colección "Ruta"
    snapshot.forEach(doc => {
      const { PuntoA, PuntoB, Peso } = doc.data();
  
      // Agregar el nodo PuntoA al grafo si no existe
      if (!grafo[PuntoA]) {
        grafo[PuntoA] = {};
      }
  
      // Agregar el nodo PuntoB al grafo si no existe
      if (!grafo[PuntoB]) {
        grafo[PuntoB] = {};
      }
  
      // Agregar la arista entre los nodos PuntoA y PuntoB con el peso dado
      grafo[PuntoA][PuntoB] = Peso;
    });
  
    const distancias = {};
    const padres = {};
    const visitados = {};
  
    // Inicializar las distancias de todos los nodos como infinito, excepto el nodo inicial que es 0
    for (const nodo in grafo) {
      distancias[nodo] = nodo === inicio ? 0 : Infinity;
    }
  
    // Algoritmo de Dijkstra para encontrar la ruta más corta
    for (let i = 0; i < Object.keys(grafo).length; i++) {
      const nodoActual = encontrarNodoMinimo(distancias, visitados);
  
      // Marcar el nodo actual como visitado
      visitados[nodoActual] = true;
  
      // Obtener los nodos vecinos del nodo actual
      const vecinos = grafo[nodoActual];
  
      // Iterar sobre los nodos vecinos
      for (const nodoVecino in vecinos) {
        const peso = vecinos[nodoVecino];
        const distanciaTotal = distancias[nodoActual] + peso;
  
        // Si la distancia total es menor a la distancia actual almacenada en distancias, actualizarla y establecer el padre
        if (distanciaTotal < distancias[nodoVecino]) {
          distancias[nodoVecino] = distanciaTotal;
          padres[nodoVecino] = nodoActual;
        }
      }
    }
  
    // Construir la ruta más corta
    const rutaMasCorta = [final];
    let padre = padres[final];
  
    while (padre) {
      rutaMasCorta.unshift(padre);
      padre = padres[padre];
    }
  
    return rutaMasCorta;
  }
  
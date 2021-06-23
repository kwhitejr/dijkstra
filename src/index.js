/* eslint-disable no-loop-func */
const PriorityQueue = require('./PriorityQueue');

/**
 * A function that returns the shortest path between two vertices.
 * @param {WeightedGraph} graph
 * @param {vertex} start
 * @param {vertex} finish
 */
const dijkstra = (graph, start, finish) => {
  const vertices = new PriorityQueue();
  const distances = {}; // maps vertex to shortest known distance to it
  const previous = {}; // maps vertex to the traveled-from vertex along shortest route
  const path = []; // path from finish vertex to start vertex
  let smallest;

  // Initialize distances for each vertex to Infinity, except for start, which is 0
  // Enqueue each vertex
  // Initialize each "previous" value to null
  Object.keys(graph.adjacencyList).forEach((vertex) => {
    if (vertex === start) {
      distances[vertex] = 0;
      vertices.enqueue(vertex, 0);
    } else {
      distances[vertex] = Infinity;
      vertices.enqueue(vertex, Infinity);
    }
    previous[vertex] = null;
  });
  console.log(vertices.values);

  // While there are vertices to process, pick the next lowest priority one
  while (vertices.values.length) {
    smallest = vertices.dequeue().value;

    // If smallest is the finish vertex, build path to return
    if (smallest === finish) {
      while (previous[smallest]) {
        path.push(smallest);
        smallest = previous[smallest];
      }
      break;
    }

    // Process next vertex
    if (smallest || distances[smallest] !== Infinity) {
      // For each neighbor...
      Object.keys(graph.adjacencyList[smallest]).forEach((neighbor) => {
        const nextNode = graph.adjacencyList[smallest][neighbor];
        const candidate = distances[smallest] + nextNode.weight;
        const nextNeighbor = nextNode.node;
        console.log(neighbor);

        // If new candidate distance is shorter than known distance
        // then set candidate distance as known shortest
        // and update previous block
        // and add this candidate neighbor back to the queue
        if (candidate < distances[nextNeighbor]) {
          distances[nextNeighbor] = candidate;
          previous[nextNeighbor] = smallest;
          vertices.enqueue(nextNeighbor, candidate);
          console.log(vertices.values);
        }
      });
    }
  }
  return path.concat(smallest).reverse();
};

module.exports = dijkstra;

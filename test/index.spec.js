const { expect } = require('chai');
const WeightedGraph = require('../src/WeightedGraph');
const dijkstra = require('../src/index');

describe('index.js', () => {
  const graph = new WeightedGraph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  graph.addVertex('F');
  graph.addEdge('A', 'B', 4);
  graph.addEdge('A', 'C', 3);
  graph.addEdge('B', 'E', 2);
  graph.addEdge('C', 'D', 3);
  graph.addEdge('C', 'F', 4);
  graph.addEdge('D', 'E', 1);
  graph.addEdge('D', 'F', 1);
  graph.addEdge('E', 'F', 2);

  describe('dijkstra()', () => {
    it('should return the shortest path between two vertices', () => {
      const shortestPath = dijkstra(graph, 'A', 'D');
      expect(shortestPath).to.deep.equal(['A', 'C', 'D']);
    });
  });
});

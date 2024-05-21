# Graphs in JavaScript

A graph is a non-linear data structure consisting of a set of nodes (vertices) and a set of edges connecting these nodes. Graphs are widely used in JavaScript for modeling relationships between objects, representing networks, solving routing problems, and more.

## Types of Graphs

- **Directed Graph (Digraph)**: A graph in which edges have a direction, indicating a one-way relationship between nodes.
- **Undirected Graph**: A graph in which edges do not have a direction, indicating a two-way relationship between nodes.
- **Weighted Graph**: A graph in which edges have weights or costs associated with them.
- **Cyclic Graph**: A graph containing at least one cycle (a path that starts and ends at the same node).
- **Acyclic Graph**: A graph with no cycles.

## Graph Representation

Graphs can be represented using various data structures, including adjacency lists, adjacency matrices, and edge lists. In JavaScript, adjacency lists are commonly used for their efficiency in representing sparse graphs.

## Applications of Graphs

- **Social Networks**: Graphs can model relationships between users in social networking platforms.
- **Maps and Navigation Systems**: Graphs can represent roads, cities, and intersections in maps for route planning.
- **Recommendation Systems**: Graphs can capture similarities between items or users for generating recommendations.
- **Compiler Design**: Graphs are used in compilers for syntax analysis and optimization phases.

## Example

```javascript
class Graph {
    constructor() {
        this.vertices = {};
    }

    addVertex(vertex) {
        if (!this.vertices[vertex]) {
            this.vertices[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.vertices[vertex1] || !this.vertices[vertex2]) {
            throw new Error("Vertex not found");
        }
        this.vertices[vertex1].push(vertex2);
        this.vertices[vertex2].push(vertex1); // For undirected graph
    }

    printGraph() {
        for (let vertex in this.vertices) {
            console.log(`${vertex} --> ${this.vertices[vertex].join(', ')}`);
        }
    }
}

// Example usage
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.printGraph();
```
## Conclusion

Graphs are versatile data structures in JavaScript that allow for modeling complex relationships and solving various real-world problems efficiently. Understanding graphs and their representations is essential for developing algorithms and applications involving networked data.

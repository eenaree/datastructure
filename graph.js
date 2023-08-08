class Graph {
  constructor() {
    this.matrix = [];
    this.vertices = [];
  }

  addVertex(name) {
    if (this.#searchVertex(name) !== null) {
      throw new Error('Vertex already exist.');
    }

    const vertex = new Vertex(name);
    this.vertices.push(vertex);
    this.matrix.push([]);
  }

  removeVertex(vertex) {
    for (let i = 0; i < this.vertices.length; i++) {
      if (this.vertices[i].name === vertex) {
        for (let j = 0; j < this.matrix.length; j++) {
          this.matrix[j].splice(i, 1);
        }
        this.vertices.splice(i, 1);
        this.matrix.splice(i, 1);
      }
    }
  }

  #searchVertex(vertex) {
    for (let i = 0; i < this.vertices.length; i++) {
      if (this.vertices[i].name === vertex) {
        return i;
      }
    }

    return null;
  }

  addArc(vertex1, vertex2, value, capacity) {
    const rowIndex = this.#searchVertex(vertex1);
    const cellIndex = this.#searchVertex(vertex2);
    if (rowIndex === null) {
      throw new Error(`${vertex1} not found`);
    }
    if (cellIndex === null) {
      throw new Error(`${vertex2} not found`);
    }
    this.matrix[rowIndex][cellIndex] = new Arc(value, capacity);
  }

  removeArc(vertex1, vertex2) {
    const rowIndex = this.#searchVertex(vertex1);
    const cellIndex = this.#searchVertex(vertex2);
    if (rowIndex === null) {
      throw new Error(`${vertex1} not found`);
    }
    if (cellIndex === null) {
      throw new Error(`${vertex2} not found`);
    }
    this.matrix[rowIndex][cellIndex] = null;
  }
}

class Vertex {
  constructor(name) {
    this.name = name;
  }
}

class Arc {
  constructor(value, capacity) {
    this.value = value;
    this.capacity = capacity;
  }
}

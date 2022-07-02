const createNode = (key) => {
  let neighbors = [];

  return {
    key,
    neighbors,
    addNeighbor: (node) => neighbors.push(node),
  };
};

const createGraph = (directed = false) => {
  let nodes = [];
  let edges = [];
  return {
    directed,
    nodes,
    edges,
    addNode: (key) => {
      const newNode = createNode(key);
      nodes.push(newNode);
    },
    getNode: (key) => nodes.find((node) => node.key === key),
    addEdge: (firstNodeKey, scndNodeKey) => {
      const firstNode = this.getNode(firstNodeKey);
      const scndNode = this.getNode(scndNodeKey);

      firstNode.addNeighbor(scndNode);

      if (!directed) scndNode.addNeighbor(firstNode);
    },
    print: () =>
      nodes
        .map(({ key, neighbors }) => {
          let res = key;

          if (neighbors.length)
            result += ` => ${neighbors
              .map((neighbor) => neighbor.key)
              .join(" ")}`;

          return res;
        })
        .join("\n"),
  };
};
